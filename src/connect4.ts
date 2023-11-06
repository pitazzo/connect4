import { Controller } from "./controllers/controller.js";
import { Logic } from "./controllers/logic.js";
import { ViewFactory } from "./views/view.factory.js";

export abstract class Connect4 {
  private logic: Logic;

  protected constructor() {
    this.logic = new Logic(this.createViewFactory());
  }

  protected abstract createViewFactory(): ViewFactory;

  protected async play(): Promise<void> {
    let controller: Controller | null = null;
    do {
      controller = this.logic.getController();
      if (controller) {
        await controller.control();
      }
    } while (controller !== null);
  }
}
