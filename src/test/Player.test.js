import { Scene } from 'phaser';
import Player from '../Player';
import TestScene from './__mocks__/testScene';

describe('Test Player object creation', () => {
  const testScene = new Scene('testing');

  const newPlayer = new Player(testScene, 100, 100, 'Player');

  test('Expect newPlayer to be an Object', () => {
    expect(typeof newPlayer).toBe('object');
  });
  test('scene attribute exists', () => {
    expect(!newPlayer.scene).toBe(false);
  });
  test('x attribute exists', () => {
    expect(!newPlayer.x).toBe(false);
  });
  test('y attribute exists', () => {
    expect(!newPlayer.y).toBe(false);
  });
  test('key attribute exists', () => {
    expect(!newPlayer.key).toBe(false);
  });
  test('scene attribute exists', () => {
    expect(!newPlayer.scene).toBe(false);
  });

  test('Player isShooting data is False', () => {
    expect(newPlayer.getData('isShooting')).toBe(false);
  });
});
