import { Board } from "./board.js";
import { Player } from "./players/player.js";

export class Memento {
  constructor(
    readonly board: Board,
    readonly players: [Player, Player] | undefined,
    readonly currentPlayerPosition: number
  ) {}
}
