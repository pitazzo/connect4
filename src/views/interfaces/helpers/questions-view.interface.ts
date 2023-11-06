import { ColumnId } from "../../../models/value-objects/column-id.js";
import { Player } from "../../../models/players/player.js";

export interface QuestionsView {
  askForNumberInRange(
    min: number,
    max: number,
    question: string
  ): Promise<number>;
  askForColumnInList(columnIds: ColumnId[], player: Player): Promise<ColumnId>;
  askYesNoQuestion(message: string): Promise<boolean>;
}
