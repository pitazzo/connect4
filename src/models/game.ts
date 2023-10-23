import { Board } from "./board.js";
import { Player } from "./players/player.js";

export class Game {
  readonly board: Board;
  private players: [Player, Player] | undefined;
  private currentPlayerPosition: number;

  constructor() {
    this.board = Board.defaultSize();
    this.currentPlayerPosition = 0;
  }

  getPlayers(): [Player, Player] | undefined {
    return this.players;
  }

  getCurrentPlayer(): Player {
    return this.players[this.currentPlayerPosition];
  }

  advanceTurn(): void {
    this.currentPlayerPosition =
      (this.currentPlayerPosition + 1) % this.players.length;
  }

  setPlayers(players: [Player, Player]) {
    this.players = players;
  }

  reset(): void {
    this.board.reset();
    this.players = undefined;
    this.currentPlayerPosition = 0;
  }
}
