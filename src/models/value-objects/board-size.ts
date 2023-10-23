import assert from "node:assert";

export class BoardSize {
  private constructor(readonly columns: number, readonly depth: number) {}

  static fromRaw(columns: number, depth: number): BoardSize {
    assert(columns > 0 && depth > 0, "Board size has to be greater than zero");
    return new BoardSize(columns, depth);
  }
}
