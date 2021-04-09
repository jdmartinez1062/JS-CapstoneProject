import Entities from './entities';

class Enemies extends Entities {
  constructor(scene, x, y, enemy) {
    super(scene, x, y, enemy);
    this.play(enemy);
  }
}

export default Enemies;
