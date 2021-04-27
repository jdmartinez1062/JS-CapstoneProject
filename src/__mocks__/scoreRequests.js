import fetch from 'node-fetch';

const gameID = 'C1Ke6YljNQHKfzYxq70e';
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores`;

const submitScore = async (player, score) => {
  let value;
  const data = {
    user: player,
    score,
  };

  const payload = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  try {
    value = await fetch(url, payload);
  } catch (error) {
    Error(`There was an error Submission: ${error}`);
  }

  return value;
};

const retrieveScoreH = async () => {
  const payload = {
    method: 'GET',
    mode: 'cors',
  };

  const send = await fetch(url, payload);
  let highest = 0;

  try {
    const json = await send.json();
    for (let i = 0; i < json.result.length; i += 1) {
      if (json.result[i].score > highest) {
        highest = json.result[i].score;
      }
    }

    return `Highest Score: ${highest}`;
  } catch (error) {
    Error(`There was an error Retrieval: ${error}`);
  }

  return highest;
};

export { submitScore, retrieveScoreH };
