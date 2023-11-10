import { Board } from "./board.js";
import { Game } from "./game.js";
import { Player } from "./players/player.js";
import { Registry } from "./registry.js";

export class Session {
  private readonly game: Game;
  private readonly registry: Registry;

  constructor() {
    this.game = new Game();
    this.registry = new Registry(this.game);
  }

  getPlayers(): [Player, Player] | undefined {
    return this.game.getPlayers();
  }

  getCurrentPlayer(): Player {
    return this.game.getCurrentPlayer();
  }

  getBoard(): Board {
    return this.game.getBoard();
  }

  advanceTurn(): void {
    this.game.advanceTurn();
    this.registry.register();
  }

  setPlayers(players: [Player, Player]): void {
    this.game.setPlayers(players);
  }

  undo(): void {
    this.registry.undo();
  }

  canUndo(): boolean {
    return this.registry.isUndoable();
  }

  redo(): void {
    this.registry.redo();
  }

  canRedo(): boolean {
    return this.registry.isRedoable();
  }

  reset(): void {
    this.game.reset();
    this.registry.reset();
  }
}
