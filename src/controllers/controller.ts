import { Game } from "../models/game.js";
import { ControllerVisitor } from "./controller-visitor.interface.js";
import { Logic } from "./logic.js";

export abstract class Controller {
  constructor(protected readonly game: Game, protected readonly logic: Logic) {}

  abstract accept(controllerVisitor: ControllerVisitor): Promise<void>;

  complete(): void {
    this.logic.next();
  }
}
