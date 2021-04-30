import Phaser from 'phaser';
import { retrieveTopScores } from '../scoreRequests';
import { buttonsCreate } from './SceneHelpers';

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

    const leaderBoardDiv = document.createElement('div');
    leaderBoardDiv.id = 'leaderboard';

    this.add
      .text(xCenter, 30, 'Leader Board', {
        color: '#FFFFFF',
        fontSize: '30px',
      })
      .setOrigin(0.5);

    retrieveTopScores().then((response) => {
      topScores = response;

      for (let i = 0; i < topScores.length; i += 1) {
        const holder = document.createElement('div');
        const name = document.createElement('p');
        const score = document.createElement('p');

        holder.append(name, score);

        name.textContent = topScores[i].user;
        score.textContent = topScores[i].score;

        leaderBoardDiv.append(holder);
      }

      document.getElementById('main').append(leaderBoardDiv);
    });
    buttonsCreate(0.9, ['Main Menu'], this, ['MainMenu']);
  }
}

export default LeaderBoardScene;
