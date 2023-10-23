import { PlayController } from "../controllers/play.controller.js";

export interface PlayerVisitor {
  visitMachinePlayer(controller: PlayController): Promise<void>;
  visitHumanPlayer(controller: PlayController): Promise<void>;
}
