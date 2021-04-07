import Phaser from 'phaser';

class GameScene extends Phaser.Scene {
  constructor() {
    super('game-scene');
  }

  preload() {
    this.load.image();
  }

  create() {}
}
