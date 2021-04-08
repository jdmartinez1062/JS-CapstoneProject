import Phaser from 'phaser';

class PreloadScene extends Phaser.Scene {
  constructor() {
    super('Preload');
  }

  preload() {
    this.add.image('loader-scene');
    this.load.image('sprBg0', './assets/sprBg0.png');
    this.load.image('sprBg1', './assets/sprBg1.png');
  }
}
export default PreloadScene;
