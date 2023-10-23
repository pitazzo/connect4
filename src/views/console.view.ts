import { ControllerVisitor } from "../controllers/controller-visitor.interface.js";
import { PlayController } from "../controllers/play.controller.js";
import { ResumeController } from "../controllers/resume-game.controller.js";
import { StartGameController } from "../controllers/start-game.controller.js";
import { PlayView } from "./console/play.view.js";
import { ResumeView } from "./console/resume-game.view.js";
import { StartView } from "./console/start-game.view.js";

export class ConsoleView implements ControllerVisitor {
  private startView: StartView = new StartView();
  private playView: PlayView = new PlayView();
  private resumeView: ResumeView = new ResumeView();

  async visitStartController(
    startController: StartGameController
  ): Promise<void> {
    await this.startView.interact(startController);
  }
  async visitPlayController(playController: PlayController): Promise<void> {
    await this.playView.interact(playController);
  }
  async visitResumeController(
    resumeController: ResumeController
  ): Promise<void> {
    await this.resumeView.interact(resumeController);
  }
}
