import Phaser from 'phaser';

class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('background0', './assets/sprBg0.png');
    this.load.image('background1', './assets/sprBg1.png');
  }

  create() {
    this.scene.start('Preload');
  }
}
export default BootScene;
