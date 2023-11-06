import inquirer from "inquirer";
import { ColumnId } from "../../../models/value-objects/column-id.js";
import { Player } from "../../../models/players/player.js";
import { QuestionsView } from "../../interfaces/helpers/questions-view.interface.js";

export class ConsoleQuestionsView implements QuestionsView {
  async askForNumberInRange(
    min: number,
    max: number,
    question: string
  ): Promise<number> {
    const answer = await inquirer.prompt([
      {
        type: "input",
        name: "number",
        message: question,
        validate: (input: string) => {
          const num = parseInt(input, 10);
          if (isNaN(num)) {
            return "Por favor, introduce un número válido.";
          }
          if (num < min || num > max) {
            return `El número debe estar entre ${min} y ${max}.`;
          }
          return true;
        },
      },
    ]);
    return parseInt(answer["number"]);
  }

  async askForColumnInList(
    columnIds: ColumnId[],
    player: Player
  ): Promise<ColumnId> {
    const answer = await inquirer.prompt({
      type: "list",
      message: `Jugador ${player.color}, selecciona una columna:`,
      name: "columnId",
      choices: columnIds.map((columnId) => ({
        name: `Columna ${columnId.value + 1}`,
        value: columnId,
      })),
    });

    return answer["columnId"];
  }

  async askYesNoQuestion(message: string): Promise<boolean> {
    const answer = await inquirer.prompt({
      type: "list",
      message: message,
      name: "result",
      choices: [
        {
          name: "Sí",
          value: true,
        },
        {
          name: "No",
          value: false,
        },
      ],
    });

    return answer["result"];
  }
}
