import "phaser";
import { GameScene } from "./GameScene";
// https://rexrainbow.github.io/phaser3-rex-notes/docs/site/gridtable/#live-demos
const scene = new Phaser.Scene("game");

// scene.preload = function () {
//   console.log("scene");
// };
const config: Phaser.Types.Core.GameConfig = {
  title: "XO",
  type: Phaser.AUTO,
  // width: 400,
  // height: 400,
  // parent: "game",
  scale: {
    mode: Phaser.Scale.FIT,
    parent: "game",
    width: 800,
    height: 600,
  },
  scene: [GameScene],
  backgroundColor: "#111",
};

export class XOGame extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);
  }
}

window.onload = () => {
  const game = new XOGame(config);
};
