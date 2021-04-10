const gameID = 'C1Ke6YljNQHKfzYxq70e';
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores`;

const submitScore = async (score, scene) => {
  const data = {
    user: 'Global',
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
    await fetch(url, payload);
  } catch (error) {
    scene.add.text(150, 150, `There was an error Submission: ${error}`, {
      color: '#DA0000',
      fontSize: '20px',
    });
  }
};

const retrieveScoreH = async (scene) => {
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

    scene.highestScore = scene.add
      .text(150, 15, `Highest Score: ${highest}`, {
        color: '#FFFFFF',
        fontSize: '20px',
      })
      .setOrigin(0.5, 0.1);
  } catch (error) {
    scene.add.text(150, 150, `There was an error Retrieval: ${error}`, {
      color: '#DA0000',
      fontSize: '20px',
    });
  }

  return highest;
};

export { submitScore, retrieveScoreH };
