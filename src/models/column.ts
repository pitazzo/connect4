import assert from "assert";
import { Token } from "./token.js";

export class Column {
  tokens: Token[];

  constructor(readonly depth: number) {
    this.tokens = Array(depth).fill(null);
  }

  getTokenAt(position: number): Token | null {
    assert(
      position >= 0 && position < this.depth,
      "Requested position is out of range"
    );
    return this.tokens[position];
  }

  isFull(): boolean {
    return !this.tokens.some((token) => token === null);
  }

  placeToken(token: Token): void {
    assert(!this.isFull(), "The given column is already full");

    this.tokens[this.getFirstEmptyDepth()] = token;
  }

  getFirstEmptyDepth(): number {
    for (let i = this.tokens.length - 1; i >= 0; i--) {
      if (this.tokens[i] === null) {
        return i;
      }
    }
    return -1;
  }
}
