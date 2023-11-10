import { Controller } from "./controller.js";

export class ResumeController extends Controller {
  async control(): Promise<void> {
    const wantsAnotherGame = await this.viewFactory
      .createQuestionsView()
      .askYesNoQuestion("¿Quieres jugar otra partida?");

    if (wantsAnotherGame) {
      this.resetGame();
      return;
    }
    this.logic.next();
  }
  resetGame(): void {
    this.session.reset();
    this.logic.currentState = "INITIAL";
  }
}
