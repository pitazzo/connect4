import { ColumnId } from "../../models/value-objects/column-id.js";
import { PlayerController } from "./player.controller.js";

export class MachinePlayerController extends PlayerController {
  protected async selectColumn(): Promise<ColumnId> {
    const size = this.session.getBoard().boardSize;
    let selectedColumn: ColumnId;
    do {
      selectedColumn = ColumnId.fromRaw(
        Math.floor(Math.random() * size.columns),
        size
      );
    } while (this.session.getBoard().isColumnFull(selectedColumn));
    return selectedColumn;
  }
}
