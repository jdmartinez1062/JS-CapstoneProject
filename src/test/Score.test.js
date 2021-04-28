import { submitScore, retrieveScoreH, retrieveTopScores } from '../scoreRequests';

jest.mock('../scoreRequests');

describe('Test scoring system', () => {
  test('Submits a score correctly', () => {
    submitScore('John', 1000)
      .then((response) => {
        expect(response.status).toBe(201);
      })
      .catch((err) => err.value);
  });

  test('Submits a score with out a name', () => {
    submitScore(null, 1000)
      .then((response) => {
        expect(response.status).toBe(400);
      })
      .catch((err) => err.value);
  });
  test('Submits a score with out a score', () => {
    submitScore('John', null)
      .then((response) => {
        expect(response.status).toBe(400);
      })
      .catch((err) => err.value);
  });

  test('Retrieves the highest score', () => {
    let newHighest;
    let oldHighest;

    retrieveScoreH().then((response) => {
      newHighest = response;
      oldHighest = newHighest;
      submitScore('HighestScore', newHighest + 1);

      retrieveScoreH().then((response) => {
        newHighest = response;
        expect(newHighest).toBe(oldHighest + 1);
      });
    });
  });

  test('Retrieves 10 top scores', () => {
    let newTop10;

    let oldTop10;

    retrieveTopScores().then((response) => {
      oldTop10 = response;
      submitScore('HighestScore', oldTop10[0].score + 1);
      submitScore('10Score', oldTop10[9].score + 1);
      retrieveTopScores().then((response) => {
        newTop10 = response;
        expect(newTop10[0].user).toBe('HighestScore');
        expect(newTop10[9].user).toBe('10Score');
      });
    });
  });
});
