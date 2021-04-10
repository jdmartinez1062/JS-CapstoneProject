import Phaser from 'phaser';
import Enemies from '../Enemies';
import Player from '../Player';
import { retrieveScoreH, submitScore } from '../scoreRequests';
import { scrollBg, bgUpdate } from './scrollingBg';

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

  submitScore(scene.player.getData('score'));

  retrieveScoreH(scene)
    .then((response) => {
      scene.highestScore.destroy();
      scene.add.text(40, 200, `The higest all time score is: ${response}`, {
        color: '#FFFFFF',
        fontSize: '20px',
      });
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

class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  create() {
    scrollBg(this);
    customKeys(this);

    this.enemies = this.add.group();
    this.enemyLasers = this.add.group();
    this.playerLasers = this.add.group();

    this.time.addEvent({
      delay: 300,

      callback: () => {
        const enemyKey = ['Enemy0A', 'Enemy1A', 'Enemy2A'];
        const actualEnemy = enemyKey[Phaser.Math.Between(0, 2)];
        const enemy = new Enemies(
          this,
          Phaser.Math.Between(0, this.game.config.width),
          Phaser.Math.Between(0, this.game.config.height) * 0.4,
          actualEnemy,
        );
        this.enemies.add(enemy);
      },

      callbackScope: this,
      loop: true,
    });

    this.anims.create({
      key: 'Player',
      frames: this.anims.generateFrameNumbers('Player'),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: 'Enemy0A',
      frames: this.anims.generateFrameNumbers('Enemy0'),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: 'Enemy1A',
      frames: this.anims.generateFrameNumbers('Enemy1'),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: 'Enemy2A',
      frames: this.anims.generateFrameNumbers('Enemy2'),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: 'Explosion',
      frames: this.anims.generateFrameNumbers('Explosion'),
      frameRate: 20,
      repeat: 0,
    });

    this.player = new Player(
      this,
      this.game.config.width * 0.5,
      this.game.config.height * 0.8,
      'Player',
    );

    this.physics.add.collider(this.playerLasers, this.enemies, (playerLaser, enemy) => {
      if (enemy) {
        if (enemy.onDestroy !== undefined) {
          enemy.onDestroy();
        }
        if (!enemy.getData('isDead')) {
          this.player.setData('score', this.player.getData('score') + enemy.getData('value'));
          playerLaser.destroy();
        }

        enemy.explode(true);
      }
    });

    this.physics.add.collider(this.player, this.enemies, (player, enemy) => {
      if (enemy && player) {
        if (!player.getData('isDead') && !enemy.getData('isDead')) {
          if (enemy.onDestroy !== undefined) {
            enemy.onDestroy();
          }
          gameOver(this, player);
          enemy.explode(true);
        }
      }
    });

    this.physics.add.overlap(this.player, this.enemyLasers, (player, laser) => {
      if (!player.getData('isDead') && !laser.getData('isDead')) {
        laser.destroy();
        gameOver(this, player);
      }
    });

    this.sfx = {
      explosions: [this.sound.add('SExplode0'), this.sound.add('SExplode1')],
      laser: this.sound.add('SLaser'),
    };

    this.score = this.add
      .text(100, 15, `Score: ${this.player.getData('score')}`, {
        color: '#FFFFFF',
        fontSize: '30px',
      })
      .setOrigin(0.5, 0.1);
  }

  update() {
    bgUpdate(this);
    if (!this.player.getData('isDead')) {
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

      if (this.keySpace.isDown) {
        this.player.setData('isShooting', true);
      } else {
        this.player.setData('timerShootTick', this.player.getData('timerShootDelay') - 1);
        this.player.setData('isShooting', false);
      }
      this.score.setText(`Score: ${this.player.getData('score')}`);
    } else if (this.score && this.player.getData('isDead')) {
      this.score.destroy();
      this.keyEnter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
      if (this.keyEnter.isDown) {
        this.scene.start('MainMenu');
      }
    }

    for (let i = 0; i < this.enemies.getChildren().length; i += 1) {
      this.enemies.getChildren()[i].update();
    }
  }
}

export default GameScene;
