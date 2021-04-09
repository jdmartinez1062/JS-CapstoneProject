import Entities from './entities';
import EnemyLaser from './EnemyLaser';

class Enemies extends Entities {
  constructor(scene, x, y, enemy) {
    super(scene, x, y, enemy);
    this.play(enemy);

    this.shootTimer = this.scene.time.addEvent({
      delay: 1000,
      callback: () => {
        const laser = new EnemyLaser(this.scene, this.x, this.y);
        laser.setScale(this.scaleX);
        this.scene.enemyLasers.add(laser);
        this.scene.sfx.laser.play();
      },
      callbackScope: this,
      loop: true,
    });
  }

  onDestroy() {
    if (this.shootTimer !== undefined) {
      if (this.shootTimer) {
        this.shootTimer.remove(false);
      }
    }
  }

  update() {
    if (
      this.x < -this.displayWidth ||
      this.x > this.scene.game.config.width + this.displayWidth ||
      this.y < -this.displayHeight * 4 ||
      this.y > this.scene.game.config.height + this.displayHeight
    ) {
      if (this) {
        if (this.onDestroy !== undefined) {
          this.onDestroy();
        }

        this.destroy();
      }
    }
  }
}

export default Enemies;
