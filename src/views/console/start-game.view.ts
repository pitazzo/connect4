import { StartGameController } from "../../controllers/start-game.controller.js";
import { View } from "../view.interface.js";
import { MessagesView } from "./helpers/messages.view.js";
import { QuestionsView } from "./helpers/questions.view.js";

export class StartView implements View {
  async interact(controller: StartGameController): Promise<void> {
    const messagesView = new MessagesView();
    messagesView.welcome();
    const humansPlayers = await new QuestionsView().askForNumberInRange(
      0,
      2,
      "¿Cuántos jugadores humanos quieres?"
    );
    controller.setNumberOfHumanPlayers(humansPlayers);
    messagesView.start(controller.getPlayersSummary());
    controller.complete();
  }
}
