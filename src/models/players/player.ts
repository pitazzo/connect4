import { assert } from "console";
import { Board } from "../board.js";
import { Color } from "../enums/colors.enum.js";
import { Token } from "../token.js";
import { ColumnId } from "../value-objects/column-id.js";
import { PlayerVisitor } from "../../controllers/players/player-visitor.js";

export abstract class Player {
  private readonly tokens: Token[];

  constructor(readonly color: Color) {
    this.tokens = Array.from(Array(21), (_, __) => new Token(color));
  }

  hasTokens(): boolean {
    return this.tokens.length > 0;
  }
  placeTokenAt(columnId: ColumnId, board: Board): void {
    assert(this.hasTokens(), `Player ${this.color} has no more tokens`);
    const token = this.tokens.pop()!;
    board.placeTokenAt(columnId, token);
  }
  abstract getType(): "human" | "machine";
  abstract accept(playerVisitor: PlayerVisitor): Promise<void>;
}
