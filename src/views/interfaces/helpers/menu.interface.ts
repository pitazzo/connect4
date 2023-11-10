import { Command } from "../../../commands/command.abstract.js";

export abstract class Menu {
  constructor(protected readonly commands: Command[]) {}

  abstract selectCommand(): Promise<Command>;

  async execute(): Promise<void> {
    await this.selectCommand().then((command) => command.execute());
  }
}
