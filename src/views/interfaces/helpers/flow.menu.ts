import { ContinueCommand } from "../../../commands/continue.command.js";
import { RedoCommand } from "../../../commands/redo.command.js";
import { UndoCommand } from "../../../commands/undo.command.js";
import { Session } from "../../../models/session.js";
import { Menu } from "./menu.interface.js";

export abstract class FlowMenu extends Menu {
  constructor(session: Session) {
    super([
      new ContinueCommand(session),
      new UndoCommand(session),
      new RedoCommand(session),
    ]);
  }
}
