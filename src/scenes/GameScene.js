import Phaser from 'phaser';
import Player from '../Player';
import { scrollBg, bgUpdate } from './scrollingBg';

const customKeys = (scene) => {
  scene.keyW = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
  scene.keyS = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
  scene.keyA = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
  scene.keyD = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
  scene.keySpace = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
};

class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  preload() {}

  create() {
    scrollBg(this);
    customKeys(this);
    this.anims.create({
      key: 'Player',
      frames: this.anims.generateFrameNumbers('Player'),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: 'Enemy0',
      frames: this.anims.generateFrameNumbers('Enemy0'),
      frameRate: 20,
      repeat: -1,
    });
    this.anims.create({
      key: 'Enemy1',
      frames: this.anims.generateFrameNumbers('Enemy1'),
      frameRate: 20,
      repeat: -1,
    });

    this.player = new Player(this, this.game.config.width * 0.5, this.game.config.height * 0.5, 'Player');
  }

  update() {
    bgUpdate(this);
    this.player.update();

    if (this.keyW.isDown) {
      this.player.moveUp();
    } else if (this.keyS.isDown) {
      this.player.moveDown();
    }

    if (this.keyA.isDown) {
      this.player.moveLeft();
    } else if (this.keyD.isDown) {
      this.player.moveRight();
    }
  }
}

export default GameScene;
