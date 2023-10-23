import assert from "node:assert";
import { BoardSize } from "./board-size.js";
import { Direction } from "../enums/direction.enum.js";

export class Coordinate {
  constructor(readonly column: number, readonly depth: number) {}

  static fromRaw(
    column: number,
    depth: number,
    boardSize: BoardSize
  ): Coordinate {
    assert(
      column >= 0 && column < boardSize.columns,
      `Column is out of range, should be [0, ${boardSize.columns}]`
    );

    assert(
      depth >= 0 && depth < boardSize.depth,
      `Depth is out of range, should be [0, ${boardSize.depth}]`
    );

    return new Coordinate(column, depth);
  }

  private isInRange(boardSize: BoardSize): boolean {
    return (
      this.column >= 0 &&
      this.column < boardSize.columns &&
      this.depth >= 0 &&
      this.depth < boardSize.depth
    );
  }

  getNextCoordinateInDirection(
    direction: Direction,
    boardSize: BoardSize
  ): Coordinate | null {
    let nextCoordinate: Coordinate = null;
    switch (direction) {
      case Direction.NORTH_EAST:
        nextCoordinate = new Coordinate(this.column + 1, this.depth - 1);
        break;
      case Direction.EAST:
        nextCoordinate = new Coordinate(this.column + 1, this.depth);
        break;
      case Direction.SOUTH_EAST:
        nextCoordinate = new Coordinate(this.column + 1, this.depth + 1);
        break;
      case Direction.SOUTH:
        nextCoordinate = new Coordinate(this.column, this.depth + 1);
        break;
      case Direction.SOUTH_WEST:
        nextCoordinate = new Coordinate(this.column - 1, this.depth + 1);
        break;
      case Direction.WEST:
        nextCoordinate = new Coordinate(this.column - 1, this.depth);
        break;
      case Direction.NORTH_WEST:
        nextCoordinate = new Coordinate(this.column - 1, this.depth - 1);
        break;
    }

    if (!nextCoordinate.isInRange(boardSize)) {
      return null;
    }
    return nextCoordinate;
  }
}
