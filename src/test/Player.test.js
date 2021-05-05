import Player from '../Player';

jest.mock('../Player');

describe('Test Player object creation', () => {
  const newPlayer = new Player('TestScene', 1, 1, 'Player');

  test('Expect newPlayer to be an Object', () => {
    expect(typeof newPlayer).toBe('object');
  });
  test('scene attribute exists', () => {
    expect(!newPlayer.scene).toBe(false);
  });
  test('x attribute exists', () => {
    expect(newPlayer.x != null).toBe(true);
  });
  test('y attribute exists', () => {
    expect(newPlayer.y != null).toBe(true);
  });
  test('key attribute exists', () => {
    expect(!newPlayer.key).toBe(false);
  });
  test('scene attribute exists', () => {
    expect(!newPlayer.scene).toBe(false);
  });
});
