import { ColumnId } from "../../models/value-objects/column-id.js";
import { Controller } from "../controller.js";

export abstract class PlayerController extends Controller {
  async control(): Promise<void> {
    const columnId = await this.selectColumn();
    this.session
      .getCurrentPlayer()
      .placeTokenAt(columnId, this.session.getBoard());
    this.viewFactory
      .createMessagesView()
      .tokenPlaced(this.session.getCurrentPlayer(), columnId);
  }

  protected abstract selectColumn(): Promise<ColumnId>;
}
