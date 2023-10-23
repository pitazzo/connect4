import { Controller } from "./controller.js";
import { ControllerVisitor } from "./controller-visitor.interface.js";

export class ResumeController extends Controller {
  async accept(controllerVisitor: ControllerVisitor): Promise<void> {
    await controllerVisitor.visitResumeController(this);
  }

  resetGame(): void {
    this.logic.currentState = "INITIAL";
    this.game.reset();
  }
}
