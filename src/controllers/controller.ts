import { Game } from "../models/game.js";
import { ViewFactory } from "../views/view.factory.js";
import { Logic } from "./logic.js";

export abstract class Controller {
  constructor(
    protected readonly logic: Logic,
    protected readonly game: Game,
    protected readonly viewFactory: ViewFactory
  ) {}

  abstract control(): Promise<void>;
}
