import { IPlayer } from "../../entities/player";

export default interface PlayerInterface {
  getPlayerByTurn(turn: number): IPlayer;
  getPlayerByName(name: string): IPlayer | IPlayer[] | undefined;
  createPlayer(player: IPlayer): void;
  count(): number;
}
