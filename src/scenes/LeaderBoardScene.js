import Phaser from 'phaser';
import { retrieveTopScores } from '../scoreRequests';

class LeaderBoardScene extends Phaser.Scene {
  constructor() {
    super('LeaderBoardScene');
  }

  create() {
    console.log(retrieveTopScores());
  }
}

export default LeaderBoardScene;
