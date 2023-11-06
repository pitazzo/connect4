import { ColumnId } from "../../models/value-objects/column-id.js";
import { PlayerController } from "./player.controller.js";

export class HumanPlayerController extends PlayerController {
  protected selectColumn(): Promise<ColumnId> {
    return this.viewFactory
      .createQuestionsView()
      .askForColumnInList(
        this.game.board.getAvailableColumns(),
        this.game.getCurrentPlayer()
      );
  }
}
