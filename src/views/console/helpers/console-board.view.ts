import { Board } from "../../../models/board.js";
import { Coordinate } from "../../../models/value-objects/coordinate.js";
import { BoardView } from "../../interfaces/helpers/board-view.interface.js";

export class ConsoleBoardView implements BoardView {
  draw(board: Board): void {
    const size = board.boardSize;
    console.log(`\n┬${"──┬".repeat(size.columns)}`);
    for (let row = 0; row < size.depth; row++) {
      for (let column = 0; column < size.columns; column++) {
        const token = board.getTokenAt(new Coordinate(column, row));
        process.stdout.write("|");
        process.stdout.write(token?.color ?? "⚪️");
      }
      process.stdout.write("|\n");
    }
    console.log(`┴${"──┴".repeat(size.columns)}\n`);
  }
}
