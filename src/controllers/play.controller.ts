import { Controller } from "./controller.js";
import { Player } from "../models/players/player.js";
import { PlayerVisitor } from "./players/player-visitor.js";
import { MachinePlayerController } from "./players/machine-player.controller.js";
import { HumanPlayerController } from "./players/human-player.controller.js";

export class PlayController extends Controller implements PlayerVisitor {
  async control(): Promise<void> {
    this.game.advanceTurn();
    await this.game.getCurrentPlayer().accept(this);
    this.viewFactory.createBoardView().draw(this.game.board);
    if (this.getWinner() !== undefined) {
      this.viewFactory.createMessagesView().announceWinner(this.getWinner());
      this.logic.next();
    }
  }

  async visitMachinePlayer(): Promise<void> {
    await new MachinePlayerController(
      this.logic,
      this.game,
      this.viewFactory
    ).control();
  }
  async visitHumanPlayer(): Promise<void> {
    await new HumanPlayerController(
      this.logic,
      this.game,
      this.viewFactory
    ).control();
  }

  private getWinner(): Player | undefined | null {
    const currentPlayer = this.game.getCurrentPlayer();
    if (!currentPlayer.hasTokens()) {
      return null;
    }

    if (this.game.board.hasConnect4(currentPlayer.color)) {
      return currentPlayer;
    }

    return undefined;
  }
}
