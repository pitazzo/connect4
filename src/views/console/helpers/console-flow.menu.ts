import inquirer from "inquirer";
import { Command } from "../../../commands/command.abstract.js";
import { FlowMenu } from "../../interfaces/helpers/flow.menu.js";
import { assert } from "console";

export class ConsoleFlowMenu extends FlowMenu {
  async selectCommand(): Promise<Command> {
    const availableCommands = this.commands.filter((command) =>
      command.isAvailable()
    );

    assert(availableCommands.length > 0);

    if (availableCommands.length === 1) {
      return availableCommands[0];
    }

    const answer = await inquirer.prompt({
      type: "list",
      message: "¿Cómo quieres seguir?",
      name: "result",
      choices: availableCommands.map((command) => ({
        name: command.name,
        value: command,
      })),
    });

    return answer["result"];
  }
}
