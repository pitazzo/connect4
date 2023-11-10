import { Session } from "../models/session.js";
import { Command } from "./command.abstract.js";

export class RedoCommand extends Command {
  constructor(private readonly session: Session) {
    super("Rehacer último movimiento");
  }

  isAvailable(): boolean {
    return this.session.canRedo();
  }
  execute(): void {
    return this.session.redo();
  }
}
