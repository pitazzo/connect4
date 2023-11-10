import assert from "assert";
import { Game } from "./game.js";
import { Memento } from "./memento.js";

export class Registry {
  private mementos: Memento[];
  private firstPrevious: number;

  constructor(private readonly game: Game) {
    this.reset();
  }

  reset(): void {
    this.firstPrevious = 0;
    this.mementos = [this.game.createSnapshot()];
  }

  register(): void {
    this.mementos.splice(0, this.firstPrevious);
    this.firstPrevious = 0;
    this.mementos.unshift(this.game.createSnapshot());
  }

  undo(): void {
    assert(this.isUndoable());
    this.firstPrevious++;
    this.game.loadSnapshot(this.mementos[this.firstPrevious]);
  }

  redo(): void {
    assert(this.isRedoable());
    this.firstPrevious--;
    this.game.loadSnapshot(this.mementos[this.firstPrevious]);
  }

  isUndoable(): boolean {
    return this.firstPrevious < this.mementos.length - 1;
  }

  isRedoable(): boolean {
    return this.firstPrevious > 0;
  }
}
