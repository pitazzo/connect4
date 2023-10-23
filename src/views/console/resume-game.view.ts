import { ResumeController } from "../../controllers/resume-game.controller.js";
import { View } from "../view.interface.js";
import { QuestionsView } from "./helpers/questions.view.js";

export class ResumeView implements View {
  async interact(controller: ResumeController): Promise<void> {
    const wantsAnotherGame = await new QuestionsView().askYesNoQuestion(
      "¿Quieres jugar otra partida?"
    );

    if (!wantsAnotherGame) {
      controller.complete();
      return;
    }
    controller.resetGame();
  }
}
