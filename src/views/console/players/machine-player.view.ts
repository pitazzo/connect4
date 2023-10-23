import { PlayController } from "../../../controllers/play.controller.js";
import { Board } from "../../../models/board.js";
import { BoardSize } from "../../../models/value-objects/board-size.js";
import { ColumnId } from "../../../models/value-objects/column-id.js";
import { PlayerView } from "./player.view.js";

export class MachinePlayerView extends PlayerView {
  protected async selectColumn(controller: PlayController): Promise<ColumnId> {
    const size = controller.getBoardSize();
    let selectedColumn: ColumnId;
    do {
      selectedColumn = ColumnId.fromRaw(
        Math.floor(Math.random() * size.columns),
        size
      );
    } while (controller.isColumnFull(selectedColumn));
    return selectedColumn;
  }
}
