import { PlayController } from "../../controllers/play.controller.js";
import { PlayerVisitor } from "../../views/player-visitor.js";
import { Player } from "./player.js";

export class MachinePlayer extends Player {
  async accept(
    playerVisitor: PlayerVisitor,
    controller: PlayController
  ): Promise<void> {
    await playerVisitor.visitMachinePlayer(controller);
  }
  getType(): "human" | "machine" {
    return "machine";
  }
}
