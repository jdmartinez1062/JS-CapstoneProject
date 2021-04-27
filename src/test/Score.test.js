import { submitScore, retrieveScoreH } from '../scoreRequests';

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
    });

    submitScore('HighestScore', newHighest + 1);

    retrieveScoreH().then((response) => {
      newHighest = response;
      expect(newHighest).toBe(oldHighest + 1);
    });
  });
});
