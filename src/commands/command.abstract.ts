export abstract class Command {
  constructor(readonly name: string) {}

  abstract isAvailable(): boolean;
  abstract execute(): void;
}
