import Phaser from 'phaser';

class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOverScene');
  }

  create() {
    const xCenter = this.game.config.width * 0.5;

    this.leaderBoard = this.add.sprite(xCenter, this.game.config.height * 0.8, 'MainButton', 3);

    this.continueButton = this.add.sprite(xCenter, this.game.config.height * 0.9, 'MainButton', 3);

    this.leaderBoard.setInteractive();
    this.continueButton.setInteractive();

    this.buttons = {
      buttonArr: [this.leaderBoard, this.continueButton],
    };

    for (let i = 0; i < this.buttons.buttonArr.length; i += 1) {
      this.buttons.buttonArr[i].on(
        'pointerover',
        () => {
          this.buttons.buttonArr[i].setTexture('MainButton', 4);
        },
        this,
      );

      this.buttons.buttonArr[i].on(
        'pointerout',
        () => {
          this.buttons.buttonArr[i].setTexture('MainButton', 3);
        },
        this,
      );
      this.buttons.buttonArr[i].on('pointerdown', () => {
        if (i == 0) {
          this.scene.start('LeaderBoardScene');
        } else {
          this.scene.start('MainMenu');
        }
      });
    }

    this.add
      .text(xCenter, this.game.config.height * 0.8, 'Leader Board', {
        color: '#FFFFFF',
        fontSize: '25px',
      })
      .setOrigin(0.5);

    this.add
      .text(xCenter, this.game.config.height * 0.9, 'Continue', {
        color: '#FFFFFF',
        fontSize: '25px',
      })
      .setOrigin(0.5);

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
