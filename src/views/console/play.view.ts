import { PlayController } from "../../controllers/play.controller.js";
import { PlayerVisitor } from "../player-visitor.js";
import { View } from "../view.interface.js";
import { BoardView } from "./helpers/board.view.js";
import { MessagesView } from "./helpers/messages.view.js";
import { HumanPlayerView } from "./players/human-player.view.js";
import { MachinePlayerView } from "./players/machine-player.view.js";

export class PlayView implements View, PlayerVisitor {
  async interact(controller: PlayController): Promise<void> {
    controller.advanceTurn();
    await controller.getCurrentPlayer().accept(this, controller);
    new BoardView().draw(controller);

    if (controller.getWinner() !== undefined) {
      new MessagesView().announceWinner(controller.getWinner());
      controller.complete();
    }
  }

  async visitMachinePlayer(controller: PlayController): Promise<void> {
    await new MachinePlayerView().placeToken(controller);
  }

  async visitHumanPlayer(controller: PlayController): Promise<void> {
    await new HumanPlayerView().placeToken(controller);
  }
}
