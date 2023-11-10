import { Session } from "../models/session.js";
import { ConsoleBoardView } from "./console/helpers/console-board.view.js";
import { ConsoleFlowMenu } from "./console/helpers/console-flow.menu.js";
import { ConsoleMessagesView } from "./console/helpers/console-messages.view.js";
import { ConsoleQuestionsView } from "./console/helpers/console-questions.view.js";
import { BoardView } from "./interfaces/helpers/board-view.interface.js";
import { FlowMenu } from "./interfaces/helpers/flow.menu.js";
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

  createFlowMenu(session: Session): FlowMenu {
    return new ConsoleFlowMenu(session);
  }
}
