import Phaser from 'phaser';

class MainMenuScene extends Phaser.Scene {
  constructor() {
    super('MainMenu');
  }

  create() {
    this.scene.start('MainMenu');
  }
}

export default MainMenuScene;
