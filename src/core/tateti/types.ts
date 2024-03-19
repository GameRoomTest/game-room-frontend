export interface Player {
    name: string;
    score: number;
    mark: Mark
}

export type PlayerByMark = Record<Mark, Player>

export enum Mark {
    X='X',
    O='O',
}
