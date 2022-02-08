import "phaser";

export class GameScene extends Phaser.Scene {
  constructor() {
    super({
      key: "GameScene",
    });
  }

  init(): void {
    console.log("::GameScene init!!!");
  }
  preload(): void {
    console.log("::GameScene preload!");
    this.load.image("circle", "./assets/circle_app_w.svg");
    this.load.image("cross", "./assets/cross_app_w.svg");
  }

  create(): void {
    console.log("::GameScene create!");
  }

  update(): void {
    // console.log("update");
    // TODO
  }
}
