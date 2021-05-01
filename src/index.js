import Phaser from 'phaser';
import './style.css';
import BootScene from './scenes/BootScene';
import PreloadScene from './scenes/PreloadScene';
import MainMenuScene from './scenes/MainMenuScene';
import GameScene from './scenes/GameScene';
import GameOverScene from './scenes/GameOverScene';
import LeaderBoardScene from './scenes/LeaderBoardScene';

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
  dom: {
    createContainer: true,
  },
  scene: [BootScene, PreloadScene, MainMenuScene, GameScene, GameOverScene, LeaderBoardScene],
  // pixelArt: true,
  // roundPixels: true,
};

export default new Phaser.Game(config);
