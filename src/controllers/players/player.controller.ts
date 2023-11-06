import { ColumnId } from "../../models/value-objects/column-id.js";
import { Controller } from "../controller.js";

export abstract class PlayerController extends Controller {
  async control(): Promise<void> {
    const columnId = await this.selectColumn();
    this.game.getCurrentPlayer().placeTokenAt(columnId, this.game.board);
    this.viewFactory
      .createMessagesView()
      .tokenPlaced(this.game.getCurrentPlayer(), columnId);
  }

  protected abstract selectColumn(): Promise<ColumnId>;
}
