import {Mark} from 'src/core/tateti/types';

export enum Event {
  CREATE_GAME = "createGame",
  GAME_CREATED = "gameCreated",
  JOIN_GAME = "joinGame",
  JOINED_IN_GAME = "joinedInGame",
  ERROR_JOINING = "errorJoining",
  MOVE = "move",
  ON_MOVE = 'onMove',
  WINNER = "winner",
}

export interface Player {
  id: string;
  name: string;
  socketId: string;
  mark: Mark;
  movement: number[];
}

export type Code = string;

export type PlayerById = Record<Player["id"], Player>;

export interface Room {
  code: Code;
  players: PlayerById;
}
