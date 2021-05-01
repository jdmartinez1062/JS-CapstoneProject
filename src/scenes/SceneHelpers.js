import Phaser from 'phaser';
import { retrieveScoreH, submitScore } from '../scoreRequests';

const buttonsCreate = (y, text, scene, sceneStart) => {
  scene.buttonArray = [];

  const xCenter = scene.game.config.width * 0.5;
  for (let i = 0; i < text.length; i += 1) {
    scene.buttonArray[i] = scene.add.sprite(
      xCenter,
      scene.game.config.height * (y + i * 0.1),
      'MainButton',
      3,
    );
    scene.buttonArray[i].setInteractive();

    scene.add
      .text(xCenter, scene.game.config.height * (y + i * 0.1), `${text[i]}`, {
        color: '#FFFFFF',
        fontSize: '25px',
      })
      .setOrigin(0.5);
  }

  for (let i = 0; i < scene.buttonArray.length; i += 1) {
    scene.buttonArray[i].on(
      'pointerover',
      () => {
        scene.buttonArray[i].setTexture('MainButton', 4);
      },
      scene,
    );

    scene.buttonArray[i].on(
      'pointerout',
      () => {
        scene.buttonArray[i].setTexture('MainButton', 3);
      },
      scene,
    );
    scene.buttonArray[i].on('pointerdown', () => {
      scene.scene.start(sceneStart[i]);
    });
  }

  return scene.buttonArray;
};

const customKeys = (scene) => {
  scene.keyW = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
  scene.keyS = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
  scene.keyA = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
  scene.keyD = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
  scene.keySpace = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  scene.keyEnter = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
};

const gameOver = (scene, player) => {
  scene.add.text(120, 100, `This game's score: ${scene.player.getData('score')}`, {
    color: '#FFFFFF',
    fontSize: '20px',
  });
  submitScore(localStorage.getItem('PlayerName'), scene.player.getData('score'), this);

  retrieveScoreH(scene)
    .then((response) => {
      scene.highestScore.destroy();
      scene.add.text(
        40,
        200,
        `The higest all time score is: ${response.score} by ${response.name}`,
        {
          color: '#FFFFFF',
          fontSize: '20px',
          align: 'center',
          wordWrap: { width: 450, useAdvancedWrap: true },
        },
      );
    })
    .catch((err) => {
      scene.add.text(100, 300, `There was an error e: ${err}`, {
        color: '#DA0000',
        fontSize: '20px',
      });
    });

  scene.add.text(40, 400, 'Press ENTER to go to the Main Menu', {
    color: '#FFFFFF',
    fontSize: '20px',
  });

  player.explode(false);
};

export { buttonsCreate, customKeys, gameOver };
