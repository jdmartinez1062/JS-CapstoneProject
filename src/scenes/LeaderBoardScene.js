import Phaser from 'phaser';
import { retrieveTopScores } from '../scoreRequests';

class LeaderBoardScene extends Phaser.Scene {
  constructor() {
    super('LeaderBoardScene');
  }

  create() {
    retrieveTopScores();
  }
}
