interface PlayerInterface {
  players: IPlayer[];
  getPlayerByTurn(turn: number): IPlayer;
  getPlayerByName(name: string): IPlayer | IPlayer[] | undefined;
  createPlayer(player: IPlayer): void;
  count(): number;
}
