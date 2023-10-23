import { PlayController } from "../../../controllers/play.controller.js";
import { ColumnId } from "../../../models/value-objects/column-id.js";
import { MessagesView } from "../helpers/messages.view.js";

export abstract class PlayerView {
  async placeToken(controller: PlayController): Promise<void> {
    const columnId = await this.selectColumn(controller);
    controller.placeTokenFromCurrentPlayerAt(columnId);
    new MessagesView().tokenPlaced(controller.getCurrentPlayer(), columnId);
  }

  protected abstract selectColumn(
    controller: PlayController
  ): Promise<ColumnId>;
}
