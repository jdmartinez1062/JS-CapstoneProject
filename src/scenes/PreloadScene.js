import Phaser from 'phaser';

class PreloadScene extends Phaser.Scene {
  constructor() {
    super('Preload');
  }

  preload() {
    const { width } = this.cameras.main;
    const { height } = this.cameras.main;
    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 100,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    });

    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0xb8bcc3, 0.8);
    progressBox.fillRect(this.game.config.width / 2 - 320 / 2, 270, 320, 50);

    loadingText.setOrigin(0.5, 0.5);

    this.load.on('progress', (value) => {
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(this.game.config.width / 2 - 300 / 2, 280, 300 * value, 30);
    });

    this.load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
      this.scene.start('MainMenu');
    });

    this.load.spritesheet('MainButton', './assets/button.png', {
      frameWidth: 300,
      frameHeight: 100,
    });

    this.load.image('EnemyLaser', './assets/sprLaserEnemy0.png');
    this.load.image('PlayerLaser', './assets/sprLaserPlayer.png');

    this.load.spritesheet('Player', './assets/sprPlayer.png', {
      frameWidth: 16,
      frameHeight: 16,
    });

    this.load.spritesheet('Enemy0', './assets/sprEnemy0.png', {
      frameWidth: 16,
      frameHeight: 16,
    });

    this.load.spritesheet('Enemy1', './assets/sprEnemy1.png', {
      frameWidth: 16,
      frameHeight: 16,
    });

    this.load.spritesheet('Enemy2', './assets/sprEnemy2.png', {
      frameWidth: 16,
      frameHeight: 16,
    });

    this.load.spritesheet('Explosion', './assets/sprExplosion', {
      frameWidth: 32,
      frameHeight: 32,
    });

    this.load.audio('SExplode0', './assets/sndExplode0.wav');
    this.load.audio('SExplode1', './assets/sndExplode1.wav');
    this.load.audio('SLaser', './assets/sndLaser.wav');
  }
}
export default PreloadScene;
