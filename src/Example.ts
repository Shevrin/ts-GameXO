// export class Example extends Phaser.Scene {
//   constructor() {
//     super({
//       key: "Example",
//     });
//   }

//   preload() {
//     this.load.spritesheet("square", "assets/square.svg", {
//       frameWidth: 32,
//       frameHeight: 24,
//     });
//   }

//   create() {
//     const group:any  = this.add.group({
//       key: "grid",
//       frame: [0, 1, 2, 3, 4],
//       frameQuantity: 5,
//     });

//     Phaser.Actions.GridAlign(group.getChildren(), {
//       width: 10,
//       height: 10,
//       cellWidth: 32,
//       cellHeight: 32,
//       x: 100,
//       y: 100,
//     });
//   }
// }
