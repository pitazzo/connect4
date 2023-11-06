import { Board } from "../../../models/board.js";

export interface BoardView {
  draw(board: Board): void;
}
