import Phaser from 'phaser';
import { retrieveTopScores } from '../scoreRequests';

class LeaderBoardScene extends Phaser.Scene {
  constructor() {
    super('LeaderBoardScene');
  }

  create() {
    let topScores;
    const xCenter = this.game.config.width * 0.5;

    const inputName = document.getElementById('name');
    if (inputName) {
      inputName.remove();
    }

    this.add
      .text(xCenter, 15, 'Leader Board', {
        color: '#FFFFFF',
        fontSize: '30px',
      })
      .setOrigin(0.5);

    retrieveTopScores().then((response) => {
      topScores = response;

      for (let i = 0; i < 10; i += 1) {
        this.add
          .text(xCenter, 100 + i * 30, `${topScores[i].user}      ${topScores[i].score}`, {
            color: '#FFFFFF',
            fontSize: '20px',
          })
          .setOrigin(0.5);
      }
    });
  }
}

export default LeaderBoardScene;
