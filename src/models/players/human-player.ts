import { PlayerVisitor } from "../../controllers/players/player-visitor.js";
import { Player } from "./player.js";

export class HumanPlayer extends Player {
  async accept(playerVisitor: PlayerVisitor): Promise<void> {
    await playerVisitor.visitHumanPlayer();
  }
  getType(): "human" | "machine" {
    return "human";
  }
}
