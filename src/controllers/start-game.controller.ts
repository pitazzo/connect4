import { Controller } from "./controller.js";
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

  async control(): Promise<void> {
    const messagesView = this.viewFactory.createMessagesView();
    const questionsView = this.viewFactory.createQuestionsView();
    messagesView.welcome();
    const humansPlayers = await questionsView.askForNumberInRange(
      0,
      2,
      "¿Cuántos jugadores humanos quieres?"
    );
    this.setNumberOfHumanPlayers(humansPlayers);
    messagesView.start(this.getPlayersSummary());
    this.logic.next();
  }

  private setNumberOfHumanPlayers(numberOfHumanPlayers: number): void {
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

  private getPlayersSummary(): PlayerSummary {
    return this.game
      .getPlayers()
      .map((player) => ({ type: player.getType(), color: player.color }));
  }
}
