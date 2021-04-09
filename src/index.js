import Phaser from 'phaser';

import BootScene from './scenes/BootScene';
import PreloadScene from './scenes/PreloadScene';
import MainMenuScene from './scenes/MainMenuScene';
import GameScene from './scenes/GameScene';

const config = {
  type: Phaser.AUTO,
  width: 480,
  height: 640,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
    },
  },
  scene: [BootScene, PreloadScene, MainMenuScene, GameScene],
  // pixelArt: true,
  // roundPixels: true,
};

export default new Phaser.Game(config);
