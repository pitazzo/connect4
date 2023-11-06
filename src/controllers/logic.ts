import { Game } from "../models/game.js";
import { ViewFactory } from "../views/view.factory.js";
import { Controller } from "./controller.js";
import { PlayController } from "./play.controller.js";
import { ResumeController } from "./resume-game.controller.js";
import { StartGameController } from "./start-game.controller.js";

type StateValue = "INITIAL" | "IN_GAME" | "RESUME" | "EXIT";

const STATE_ORDER: StateValue[] = ["INITIAL", "IN_GAME", "RESUME", "EXIT"];

export class Logic {
  game: Game;
  currentState: StateValue;
  controllers: Map<StateValue, Controller>;

  constructor(viewFactory: ViewFactory) {
    this.game = new Game();
    this.currentState = "INITIAL";
    this.controllers = new Map<StateValue, Controller>([
      ["INITIAL", new StartGameController(this, this.game, viewFactory)],
      ["IN_GAME", new PlayController(this, this.game, viewFactory)],
      ["RESUME", new ResumeController(this, this.game, viewFactory)],
    ]);
  }

  next(): void {
    const currentIndex = STATE_ORDER.indexOf(this.currentState);
    this.currentState = STATE_ORDER[(currentIndex + 1) % STATE_ORDER.length];
  }

  getController(): Controller | null {
    return this.controllers.get(this.currentState) ?? null;
  }
}
