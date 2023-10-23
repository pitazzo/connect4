import { assert } from "console";
import { Column } from "./column.js";
import { Token } from "./token.js";
import { Color } from "./enums/colors.enum.js";
import { Coordinate } from "./value-objects/coordinate.js";
import { BoardSize } from "./value-objects/board-size.js";
import { ColumnId } from "./value-objects/column-id.js";
import { Direction } from "./enums/direction.enum.js";

export class Board {
  private columns: Column[];
  private lastPlacedPosition: Coordinate;

  private constructor(readonly boardSize: BoardSize) {
    this.initializeBoard();
  }

  static defaultSize(): Board {
    const DEFAULT_SIZE = BoardSize.fromRaw(7, 6);
    return new Board(DEFAULT_SIZE);
  }

  private initializeBoard(): void {
    this.lastPlacedPosition = null;
    this.columns = Array.from(
      Array(this.boardSize.columns),
      (_, __) => new Column(this.boardSize.depth)
    );
  }

  reset(): void {
    this.initializeBoard();
  }

  placeTokenAt(columnId: ColumnId, token: Token): void {
    assert(!this.columns[columnId.value].isFull(), "Selected column is full");
    this.lastPlacedPosition = Coordinate.fromRaw(
      columnId.value,
      this.columns[columnId.value].getFirstEmptyDepth(),
      this.boardSize
    );
    this.columns[columnId.value].placeToken(token);
  }

  getTokenAt(coordinate: Coordinate): Token | null {
    return this.columns[coordinate.column].getTokenAt(coordinate.depth);
  }

  isColumnFull(columndId: ColumnId): boolean {
    return this.columns[columndId.value].isFull();
  }

  getAvailableColumns(): ColumnId[] {
    const ids = [];
    for (let i = 0; i < this.columns.length; i++) {
      if (!this.columns[i].isFull()) {
        ids.push(ColumnId.fromRaw(i, this.boardSize));
      }
    }

    return ids;
  }

  hasConnect4(color: Color): boolean {
    if (!this.lastPlacedPosition) {
      return false;
    }

    const horizontal =
      this.countSameInDirection(
        color,
        this.lastPlacedPosition,
        Direction.EAST
      ) +
      this.countSameInDirection(
        color,
        this.lastPlacedPosition,
        Direction.WEST
      ) -
      1;

    const vertical = this.countSameInDirection(
      color,
      this.lastPlacedPosition,
      Direction.SOUTH
    );

    const diagonal =
      this.countSameInDirection(
        color,
        this.lastPlacedPosition,
        Direction.NORTH_EAST
      ) +
      this.countSameInDirection(
        color,
        this.lastPlacedPosition,
        Direction.SOUTH_WEST
      ) -
      1;

    const inverseDiagonal =
      this.countSameInDirection(
        color,
        this.lastPlacedPosition,
        Direction.NORTH_WEST
      ) +
      this.countSameInDirection(
        color,
        this.lastPlacedPosition,
        Direction.SOUTH_EAST
      ) -
      1;

    return (
      horizontal >= 4 || vertical >= 4 || diagonal >= 4 || inverseDiagonal >= 4
    );
  }

  private countSameInDirection(
    color: Color,
    currentPosition: Coordinate | null,
    direction: Direction
  ): number {
    if (!currentPosition) {
      return 0;
    }
    if (
      this.columns[currentPosition.column].getTokenAt(currentPosition.depth)
        ?.color !== color
    ) {
      return 0;
    }
    return (
      1 +
      this.countSameInDirection(
        color,
        currentPosition.getNextCoordinateInDirection(direction, this.boardSize),
        direction
      )
    );
  }
}
