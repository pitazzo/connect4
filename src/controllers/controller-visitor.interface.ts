import { PlayController } from "./play.controller.js";
import { ResumeController } from "./resume-game.controller.js";
import { StartGameController } from "./start-game.controller.js";

export interface ControllerVisitor {
  visitStartController(startController: StartGameController): Promise<void>;
  visitPlayController(playController: PlayController): Promise<void>;
  visitResumeController(resumeController: ResumeController): Promise<void>;
}
