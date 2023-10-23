import { Controller } from "./controller.js";
import { ControllerVisitor } from "./controller-visitor.interface.js";
import { HumanPlayer } from "../models/players/human-player.js";
import { Color } from "../models/enums/colors.enum.js";
import { MachinePlayer } from "../models/players/machine-player.js";
import { Player } from "../models/players/player.js";
import assert from "node:assert";

export interface PlayerSummary
  extends Array<{
    type: "human" | "machine";
    color: Color;
  }> {}

export class StartGameController extends Controller {
  private static NUMBER_OF_PLAYERS = 2;
  async accept(controllerVisitor: ControllerVisitor): Promise<void> {
    await controllerVisitor.visitStartController(this);
  }

  setNumberOfHumanPlayers(numberOfHumanPlayers: number): void {
    assert(
      numberOfHumanPlayers >= 0 && numberOfHumanPlayers <= 2,
      `Number of humans players has to be [0, 2], but is ${numberOfHumanPlayers}`
    );

    const possibleColors = [Color.YELLOW, Color.RED];

    const humans: Player[] = Array.from(
      Array(numberOfHumanPlayers),
      (_, __) => new HumanPlayer(possibleColors.pop()!)
    );

    const machines: Player[] = Array.from(
      Array(StartGameController.NUMBER_OF_PLAYERS - numberOfHumanPlayers),
      (_, __) => new MachinePlayer(possibleColors.pop()!)
    );

    const players = [...humans, ...machines];

    this.game.setPlayers([players[0], players[1]]);
  }

  getPlayersSummary(): PlayerSummary {
    return this.game
      .getPlayers()
      .map((player) => ({ type: player.getType(), color: player.color }));
  }
}
