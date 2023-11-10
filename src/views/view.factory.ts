import { Session } from "../models/session.js";
import { BoardView } from "./interfaces/helpers/board-view.interface.js";
import { FlowMenu } from "./interfaces/helpers/flow.menu.js";
import { MessagesView } from "./interfaces/helpers/messages-view.interfaces.js";
import { QuestionsView } from "./interfaces/helpers/questions-view.interface.js";

export interface ViewFactory {
  createBoardView(): BoardView;
  createMessagesView(): MessagesView;
  createQuestionsView(): QuestionsView;
  createFlowMenu(session: Session): FlowMenu;
}
