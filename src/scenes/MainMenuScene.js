import Phaser from 'phaser';
import { retrieveScoreH } from '../scoreRequests';

import { scrollBg, bgUpdate } from './scrollingBg';

class MainMenuScene extends Phaser.Scene {
  constructor() {
    super('MainMenu');
  }

  create() {
    this.input.on('space', () => {
      this.scene.start('GameScene');
    });

    this.add
      .text(this.game.config.width * 0.5, this.game.config.height * 0.5 - 100, 'Galaga', {
        color: '#FFFFFF',
        fontSize: '30px',
      })
      .setOrigin(0.5, 0.1);

    retrieveScoreH(this);

    this.playButton = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      'MainButton',
      3,
    );

    this.playButton.setInteractive();

    this.playButton.on(
      'pointerover',
      () => {
        this.playButton.setTexture('MainButton', 4);
      },
      this,
    );

    this.playButton.on(
      'pointerout',
      () => {
        this.playButton.setTexture('MainButton', 3);
      },
      this,
    );

    this.playButton.on(
      'pointerdown',
      () => {
        this.scene.start('GameScene');
      },
      this,
    );

    scrollBg(this);

    this.add
      .text(this.game.config.width * 0.5, this.game.config.height * 0.5 - 14, 'Play', {
        color: '#FFFFFF',
        fontSize: '30px',
      })
      .setOrigin(0.5, 0.1);
  }

  update() {
    bgUpdate(this);
  }
}

export default MainMenuScene;
