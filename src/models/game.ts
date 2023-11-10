import { Board } from "./board.js";
import { Memento } from "./memento.js";
import { Player } from "./players/player.js";

export class Game {
  private board: Board;
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

  getBoard(): Board {
    return this.board;
  }

  advanceTurn(): void {
    this.currentPlayerPosition =
      (this.currentPlayerPosition + 1) % this.players.length;
  }

  setPlayers(players: [Player, Player]): void {
    this.players = players;
  }

  reset(): void {
    this.board.reset();
    this.players = undefined;
    this.currentPlayerPosition = 0;
  }

  createSnapshot(): Memento {
    return new Memento(this.board, this.players, this.currentPlayerPosition);
  }

  loadSnapshot(memento: Memento): void {
    this.board = memento.board;
    this.players = memento.players;
    this.currentPlayerPosition = memento.currentPlayerPosition;
  }
}
