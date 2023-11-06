export interface PlayerVisitor {
  visitMachinePlayer(): Promise<void>;
  visitHumanPlayer(): Promise<void>;
}
