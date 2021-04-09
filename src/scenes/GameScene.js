import Phaser from 'phaser';
import Player from '../Player';
import { scrollBg, bgUpdate } from './scrollingBg';

class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  preload() {}

  create() {
    scrollBg(this);

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
  }
}

export default GameScene;
