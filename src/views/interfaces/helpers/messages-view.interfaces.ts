import { PlayerSummary } from "../../../controllers/start-game.controller.js";
import { Player } from "../../../models/players/player.js";
import { ColumnId } from "../../../models/value-objects/column-id.js";

export interface MessagesView {
  welcome(): void;
  tokenPlaced(player: Player, columnId: ColumnId): void;
  start(playerSummary: PlayerSummary): void;
  announceWinner(player: Player | null): void;
}
