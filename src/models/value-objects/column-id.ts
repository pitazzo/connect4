import assert from "node:assert";
import { BoardSize } from "./board-size.js";

export class ColumnId {
  private constructor(readonly value: number) {}

  static fromRaw(value: number, boardSize: BoardSize): ColumnId {
    assert(
      value >= 0 && value < boardSize.columns,
      `Column ID is out of range, should be [0, ${boardSize.columns}] and was ${value}`
    );

    return new ColumnId(value);
  }
}
