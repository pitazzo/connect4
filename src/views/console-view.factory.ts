import { ConsoleBoardView } from "./console/helpers/console-board.view.js";
import { ConsoleMessagesView } from "./console/helpers/console-messages.view.js";
import { ConsoleQuestionsView } from "./console/helpers/console-questions.view.js";
import { BoardView } from "./interfaces/helpers/board-view.interface.js";
import { MessagesView } from "./interfaces/helpers/messages-view.interfaces.js";
import { QuestionsView } from "./interfaces/helpers/questions-view.interface.js";
import { ViewFactory } from "./view.factory.js";

export class ConsoleViewFactory implements ViewFactory {
  createBoardView(): BoardView {
    return new ConsoleBoardView();
  }
  createMessagesView(): MessagesView {
    return new ConsoleMessagesView();
  }
  createQuestionsView(): QuestionsView {
    return new ConsoleQuestionsView();
  }
}
