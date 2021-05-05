import Phaser from 'phaser';
import { retrieveScoreH } from '../scoreRequests';
import { buttonsCreate } from './SceneHelpers';

import { scrollBg, bgUpdate } from './scrollingBg';

class MainMenuScene extends Phaser.Scene {
  constructor() {
    super('MainMenu');
  }

  create() {
    const leaderBoardDiv = document.getElementById('leaderboard');

    if (leaderBoardDiv) {
      leaderBoardDiv.remove();
    }
    this.input.keyboard.clearCaptures();

    this.input.on('space', () => {
      this.scene.start('GameScene');
    });

    const inputAlert = this.add
      .text(this.game.config.width * 0.5, this.game.config.height * 0.85 - 100, 'Input your name', {
        color: '#FFFFFF',
        fontSize: '20px',
      })
      .setOrigin(0.5, 0.1);

    const nameInput = document.createElement('input');
    nameInput.id = 'name';
    nameInput.placeholder = 'Player Name';
    const body = document.getElementsByTagName('body')[0];

    body.append(nameInput);

    this.add
      .text(this.game.config.width * 0.5, this.game.config.height * 0.5 - 100, 'Galaga', {
        color: '#FFFFFF',
        fontSize: '30px',
      })
      .setOrigin(0.5, 0.1);

    retrieveScoreH(this);

    this.buttons = buttonsCreate(0.5, ['Play', 'Leader Board'], this, [
      'GameScene',
      'LeaderBoardScene',
    ]);

    this.playButton = this.add.sprite();

    this.buttons[0].removeListener('pointerdown');
    this.buttons[0].on(
      'pointerdown',
      () => {
        if (nameInput.value !== '') {
          localStorage.setItem('PlayerName', nameInput.value);
          this.scene.start('GameScene');
          nameInput.value = '';
        } else {
          this.tweens.add({
            targets: inputAlert,
            alpha: 0.2,
            duration: 250,
            ease: 'Power3',
            yoyo: true,
          });
        }
      },
      this,
    );
    scrollBg(this);
  }

  update() {
    bgUpdate(this);
  }
}

export default MainMenuScene;
