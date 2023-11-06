import { Connect4 } from "./connect4.js";
import { ConsoleViewFactory } from "./views/console-view.factory.js";
import { ViewFactory } from "./views/view.factory.js";

export class ConsoleConnect4 extends Connect4 {
  protected createViewFactory(): ViewFactory {
    return new ConsoleViewFactory();
  }

  static start(): void {
    new ConsoleConnect4().play();
  }
}
