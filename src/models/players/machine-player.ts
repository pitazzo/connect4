import { PlayerVisitor } from "../../controllers/players/player-visitor.js";
import { Player } from "./player.js";

export class MachinePlayer extends Player {
  async accept(playerVisitor: PlayerVisitor): Promise<void> {
    await playerVisitor.visitMachinePlayer();
  }
  getType(): "human" | "machine" {
    return "machine";
  }
}
