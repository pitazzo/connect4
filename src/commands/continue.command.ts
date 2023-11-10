import { Session } from "../models/session.js";
import { Command } from "./command.abstract.js";

export class ContinueCommand extends Command {
  constructor(private readonly session: Session) {
    super("Continuar partida");
  }

  isAvailable(): boolean {
    return true;
  }
  execute(): void {
    this.session.advanceTurn();
  }
}
