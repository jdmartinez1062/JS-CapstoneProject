import Entities from './entities';

class PlayerLaser extends Entities {
  constructor(scene, x, y) {
    super(scene, x, y, 'PlayerLaser');

    this.body.velocity.y = -200;
  }

  update() {
    if (
      this.x < -this.displayWidth
      || this.x > this.scene.game.config.width + this.displayWidth
      || this.y < -this.displayHeight * 4
      || this.y > this.scene.game.config.height + this.displayHeight
    ) {
      if (this) {
        this.destroy();
      }
    }
  }
}

export default PlayerLaser;
