class PlayerRepository implements PlayerInterface {
  public constructor(public players: Player[] = []) {}

  public getPlayerByTurn(turn: number): IPlayer {
    return this.players[turn];
  }
  public getPlayerByName(name: string): IPlayer | IPlayer[] | undefined {
    return this.players.find((player: IPlayer) => player.name === name);
  }
  public createPlayer(player: IPlayer): void {
    this.players.push(player);
  }
  public count(): number {
    return this.players.length;
  }
}
