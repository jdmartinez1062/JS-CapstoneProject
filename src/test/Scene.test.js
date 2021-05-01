import BootScene from '../scenes/BootScene';
import GameScene from '../scenes/GameScene';
import MainMenuScene from '../scenes/MainMenuScene';
import PreloadScene from '../scenes/PreloadScene';

describe('Test each Scene', () => {
  test('BootScene is an instance of a BootScene', () => {
    expect(new BootScene()).toBeInstanceOf(BootScene);
  });
  test('PreloadScene is an instance of a PreloadScene', () => {
    expect(new PreloadScene()).toBeInstanceOf(PreloadScene);
  });
  test('MainMenuScene is an instance of a MainMenuScene', () => {
    expect(new MainMenuScene()).toBeInstanceOf(MainMenuScene);
  });
  test('GameScene is an instance of a GameScene', () => {
    expect(new GameScene()).toBeInstanceOf(GameScene);
  });
});
