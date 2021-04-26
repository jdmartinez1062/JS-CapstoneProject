import { Scene } from 'phaser';
import Player from '../Player';

describe('Test Player object creation', () => {
  const testScene = new Scene('testing');

  testScene.load.spritesheet('Player', './assets/SpaceshipKit-104.png', {
    frameWidth: 32,
    frameHeight: 32,
  });

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
