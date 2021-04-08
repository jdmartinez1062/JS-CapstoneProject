import Phaser from 'phaser';

class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('loader-scene', 'asset/galaga.png');
    this.scene.start('Preload');
  }
}
export default BootScene;
