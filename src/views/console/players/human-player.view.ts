import { PlayController } from "../../../controllers/play.controller.js";
import { ColumnId } from "../../../models/value-objects/column-id.js";
import { QuestionsView } from "../helpers/questions.view.js";
import { PlayerView } from "./player.view.js";

export class HumanPlayerView extends PlayerView {
  protected async selectColumn(controller: PlayController): Promise<ColumnId> {
    return new QuestionsView().askForColumnInList(
      controller.getAvailableColumns(),
      controller.getCurrentPlayer()
    );
  }
}
