import Phaser from 'phaser';
import { buttonsCreate } from './SceneHelpers';

class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOverScene');
  }

  create() {
    const xCenter = this.game.config.width * 0.5;

    buttonsCreate(0.8, ['Leader Board', 'Continue'], this, ['LeaderBoardScene', 'MainMenu']);

    this.add
      .text(xCenter, 100, 'Credits', {
        color: '#FFFFFF',
        fontSize: '35px',
        align: 'center',
        wordWrap: { width: 450, useAdvancedWrap: true },
      })
      .setOrigin(0.5);

    this.add
      .text(xCenter, this.game.config.height * 0.5, 'Created by Juan Martínez', {
        color: '#FFFFFF',
        fontSize: '25px',
        align: 'center',
        wordWrap: { width: 450, useAdvancedWrap: true },
      })
      .setOrigin(0.5);

    this.add
      .text(xCenter, 400, 'Press ENTER to go to the Main Menu', {
        color: '#FFFFFF',
        fontSize: '20px',
      })
      .setOrigin(0.5);

    this.keyEnter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

    if (this.keyEnter.isDown) {
      this.scene.start('MainMenu');
    }
  }
}

export default GameOverScene;
