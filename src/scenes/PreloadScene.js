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
    progressBox.fillRect(width / 2 - 320 / 2, 270, 320, 50);

    loadingText.setOrigin(0.5, 0.5);

    this.load.on('progress', (value) => {
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(width / 2 - 300 / 2, 280, 300 * value, 30);
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

    this.load.image('LaserEnemy0', './assets/sprEnemy1.png');
    this.load.image('LaserPlayer', './assets/sprLaserPlayer.png');

    this.load.spritesheet('Player', './assets/sprPlayer.png', {
      frameWidth: 16,
      frameHeight: 16,
    });

    this.load.spritesheet('Enemy0', './assets/sprEnemy0.png', {
      frameWidth: 16,
      frameHeight: 16,
    });

    this.load.image('Enemy1', './assets/sprEnemy1.png');

    this.load.spritesheet('Enemy2', './assets/.png', {
      frameWidth: 16,
      frameHeight: 16,
    });

    this.load.spritesheet('Explosion', './assets/sprExplosion', {
      frameWidth: 32,
      frameHeight: 32,
    });

    this.load.audio('sndExplode0', './assets/sndExplode0.wav');
    this.load.audio('sndExplode1', './assets/sndExplode1.wav');
    this.load.audio('sndLaser', './assets/sndLaser.wav');
  }
}
export default PreloadScene;
