import { Controller } from "./controller.js";
import { ControllerVisitor } from "./controller-visitor.interface.js";
import { Coordinate } from "../models/value-objects/coordinate.js";
import { Token } from "../models/token.js";
import { BoardSize } from "../models/value-objects/board-size.js";
import { ColumnId } from "../models/value-objects/column-id.js";
import { Player } from "../models/players/player.js";

export class PlayController extends Controller {
  async accept(controllerVisitor: ControllerVisitor): Promise<void> {
    await controllerVisitor.visitPlayController(this);
  }

  getCurrentPlayer(): Player {
    return this.game.getCurrentPlayer();
  }

  advanceTurn(): void {
    this.game.advanceTurn();
  }

  placeTokenFromCurrentPlayerAt(columnId: ColumnId): void {
    this.game.getCurrentPlayer().placeTokenAt(columnId, this.game.board);
  }

  getBoardSize(): BoardSize {
    return this.game.board.boardSize;
  }

  isColumnFull(columnId: ColumnId): boolean {
    return this.game.board.isColumnFull(columnId);
  }

  getAvailableColumns(): ColumnId[] {
    return this.game.board.getAvailableColumns();
  }

  getTokenAtCoordinate(coordinate: Coordinate): Token | null {
    return this.game.board.getTokenAt(coordinate);
  }

  getWinner(): Player | undefined | null {
    const currentPlayer = this.getCurrentPlayer();
    if (!currentPlayer.hasTokens()) {
      return null;
    }

    if (this.game.board.hasConnect4(currentPlayer.color)) {
      return currentPlayer;
    }

    return undefined;
  }
}
