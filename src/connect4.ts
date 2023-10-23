import { Controller } from "./controllers/controller.js";
import { ControllerVisitor } from "./controllers/controller-visitor.interface.js";
import { Logic } from "./controllers/logic.js";

export abstract class Connect4 {
  private view: ControllerVisitor;
  private logic: Logic;

  protected constructor() {
    this.logic = new Logic();
    this.view = this.createView();
  }

  protected abstract createView(): ControllerVisitor;

  protected async play(): Promise<void> {
    let controller: Controller | null = null;
    do {
      controller = this.logic.getController();
      if (controller) {
        await controller.accept(this.view);
      }
    } while (controller !== null);
  }
}
