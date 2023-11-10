import { Session } from "../models/session.js";
import { Command } from "./command.abstract.js";

export class UndoCommand extends Command {
  constructor(private readonly session: Session) {
    super("Deshacer último movimiento");
  }

  isAvailable(): boolean {
    return this.session.canUndo();
  }
  execute(): void {
    return this.session.undo();
  }
}
