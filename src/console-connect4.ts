import { Connect4 } from "./connect4.js";
import { ControllerVisitor } from "./controllers/controller-visitor.interface.js";
import { ConsoleView } from "./views/console.view.js";

export class ConsoleConnect4 extends Connect4 {
  protected createView(): ControllerVisitor {
    return new ConsoleView();
  }

  static start(): void {
    new ConsoleConnect4().play();
  }
}
