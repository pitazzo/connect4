import { PlayController } from "../../controllers/play.controller.js";
import { PlayerVisitor } from "../../views/player-visitor.js";
import { Player } from "./player.js";

export class HumanPlayer extends Player {
  async accept(
    playerVisitor: PlayerVisitor,
    controller: PlayController
  ): Promise<void> {
    await playerVisitor.visitHumanPlayer(controller);
  }
  getType(): "human" | "machine" {
    return "human";
  }
}
