import Phaser from 'phaser';

class ScrollingBackGround {
  constructor(scene, key, velocityY) {
    this.scene = scene;
    this.key = key;
    this.velocityY = velocityY;
    this.layers = this.scene.add.group();
    this.createLayers();
  }

  createLayers() {
    for (let i = 0; i < 2; i += 1) {
      const layer = this.scene.add.sprite(0, 0, this.key);
      layer.y = layer.displayHeight * i;
      const flipX = Phaser.Math.Between(0, 10) >= 5 ? -1 : 1;
      const flipY = Phaser.Math.Between(0, 10) >= 5 ? -1 : 1;
      layer.setScale(flipX * 2, flipY * 2);
      layer.setDepth(-5 - (i - 1));
      this.scene.physics.world.enableBody(layer, 0);
      layer.body.velocity.y = this.velocityY;

      this.layers.add(layer);
    }
  }

  update() {
    if (this.layers.getChildren()[0].y > 0) {
      for (let i = 0; i < this.layers.getChildren().length; i += 1) {
        const layer = this.layers.getChildren()[i];
        layer.y = -layer.displayHeight + layer.displayHeight * i;
      }
    }
  }
}

const scrollBg = (scene) => {
  scene.backgrounds = [];
  for (let i = 0; i < 2; i += 1) {
    const keys = ['background0', 'background1'];
    const key = keys[Phaser.Math.Between(0, keys.length - 1)];
    const bg = new ScrollingBackGround(scene, key, i * 10);
    scene.backgrounds.push(bg);
  }
};

const bgUpdate = (scene) => {
  for (let i = 0; i < scene.backgrounds.length; i += 1) {
    scene.backgrounds[i].update();
  }
};
export { ScrollingBackGround, scrollBg, bgUpdate };
