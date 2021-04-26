import Phaser from 'phaser';

class TestScene extends Phaser.Scene {
  constructor() {
    super('TestScene');
  }
  preload() {
    testScene.load.spritesheet('Player', './assets/SpaceshipKit-104.png', {
      frameWidth: 32,
      frameHeight: 32,
    });
  }

  create() {}
}

export default TestScene;
