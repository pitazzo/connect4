import chalk from "chalk";
import { PlayerSummary } from "../../../controllers/start-game.controller.js";
import { Player } from "../../../models/players/player.js";
import { ColumnId } from "../../../models/value-objects/column-id.js";

export class MessagesView {
  welcome(): void {
    console.log(`¡Bienvenido a ${chalk.blue("Conecta")}${chalk.red("4")}!`);
  }

  tokenPlaced(player: Player, columnId: ColumnId): void {
    console.log(
      `El jugador ${player.color} ha colocado en la columna ${chalk.red(
        columnId.value + 1
      )}\n`
    );
  }

  start(playerSummary: PlayerSummary): void {
    console.log("\nLa partida va a comenzar y...");
    const mapping = { machine: "máquina", human: "humano" };
    for (const player of playerSummary) {
      console.log(`El jugador ${player.color} será ${mapping[player.type]}`);
    }
  }

  announceWinner(player: Player | null): void {
    if (!player) {
      console.log(`¡La partida ha acabado en ${chalk.green("empate")}!`);
      return;
    }

    console.log(
      `¡El jugador ${player.color} ha ${chalk.green("ganado")} la partida!\n`
    );
  }
}
