import { PlayController } from "../../../controllers/play.controller.js";
import { Coordinate } from "../../../models/value-objects/coordinate.js";

export class BoardView {
  draw(controller: PlayController): void {
    const size = controller.getBoardSize();
    console.log(`\n┬${"──┬".repeat(size.columns)}`);
    for (let row = 0; row < size.depth; row++) {
      for (let column = 0; column < size.columns; column++) {
        const token = controller.getTokenAtCoordinate(
          new Coordinate(column, row)
        );
        process.stdout.write("|");
        process.stdout.write(token?.color ?? "⚪️");
      }
      process.stdout.write("|\n");
    }
    console.log(`┴${"──┴".repeat(size.columns)}\n`);
  }
}
