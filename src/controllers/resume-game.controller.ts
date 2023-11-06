import { Game } from "../models/game.js";
import { ViewFactory } from "../views/view.factory.js";
import { Controller } from "./controller.js";
import { Logic } from "./logic.js";

export class ResumeController extends Controller {
  async control(): Promise<void> {
    const wantsAnotherGame = this.viewFactory
      .createQuestionsView()
      .askYesNoQuestion("¿Quieres jugar otra partida?");

    if (wantsAnotherGame) {
      this.resetGame();
      return;
    }
    this.logic.next();
  }
  resetGame(): void {
    this.game.reset();
    this.logic.currentState = "INITIAL";
  }
}
