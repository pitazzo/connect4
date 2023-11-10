import { Session } from "../models/session.js";
import { ViewFactory } from "../views/view.factory.js";
import { Logic } from "./logic.js";

export abstract class Controller {
  constructor(
    protected readonly logic: Logic,
    protected readonly session: Session,
    protected readonly viewFactory: ViewFactory
  ) {}

  abstract control(): Promise<void>;
}
