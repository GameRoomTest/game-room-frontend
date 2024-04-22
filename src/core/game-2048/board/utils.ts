import { v4 as uuid } from 'uuid';

import { getRandomNumber } from 'src/utils/get-random-number';
import {
  Axis,
  Direction,
  Board,
  TempBoardMatrix,
  TempTile,
  TempInMotionTile,
} from './types';

const columnLength = 4;
const rowLength = 4;
const initialTileValue = 2;

export function insertOne(board: Board): Board {
  const _board = structuredClone(board);

  let x = getRandomNumber(rowLength - 1);
  let y = getRandomNumber(columnLength - 1);

  while (
    board.some(({ position }) => position.x === x) &&
    board.some(({ position }) => position.y === y)
  ) {
    x = getRandomNumber(rowLength - 1);
    y = getRandomNumber(columnLength - 1);
  }

  _board.push({
    id: uuid(),
    value: initialTileValue,
    position: {
      x,
      y,
    },
  });

  return _board;
}

export const getInitialBoard = (): Board => {
  const initialBoard: Board = [];

  const firstTileX = getRandomNumber(rowLength - 1);
  const firstTileY = getRandomNumber(columnLength - 1);

  const secondTileX = getRandomNumber(rowLength - 1);
  const secondTileY = getRandomNumber(columnLength - 1, firstTileY);

  // while (firstTileX === secondTileX && firstTileY === secondTileY) {
  //   secondTileX = getRandomNumber(columnLength - 1);
  //   secondTileY = getRandomNumber(columnLength - 1);
  // }

  initialBoard.push({
    id: uuid(),
    value: initialTileValue,
    position: {
      [Axis.X]: firstTileX,
      [Axis.Y]: firstTileY,
    },
  });
  initialBoard.push({
    id: uuid(),
    value: initialTileValue,
    position: {
      [Axis.X]: secondTileX,
      [Axis.Y]: secondTileY,
    },
  });

  return initialBoard;
};

export function getNextBoard(
  board: Board,
  axis: Axis,
  direction: Direction,
): Board {
  const tempBoardMatrix = getEmptyBoardMatrix();

  board.forEach((tile) => {
    tempBoardMatrix[tile.position[Axis.Y]][tile.position[Axis.X]] = {
      id: tile.id,
      value: tile.value,
    };
  });

  const nextBoardMatrix = getNextBoardMatrix(tempBoardMatrix, axis, direction);

  const nextBoard: Board = [];

  nextBoardMatrix.forEach((row, columnIndex) => {
    row.forEach((tile, rowIndex) => {
      if (tile) {
        nextBoard.push({
          ...tile,
          position: {
            [Axis.X]: rowIndex,
            [Axis.Y]: columnIndex,
          },
        });
      }
    });
  });

  return nextBoard;
}

export function getEmptyBoardMatrix(): TempBoardMatrix {
  return Array(columnLength)
    .fill(undefined)
    .map(() => Array(rowLength).fill(undefined));
}

export function getNextBoardMatrix(
  board: TempBoardMatrix,
  axis: Axis,
  direction: Direction,
): TempBoardMatrix {
  const _board = structuredClone(board);

  if (axis === Axis.X) {
    const columnLength = board.length;

    for (let i = 0; i < columnLength; i++) {
      _board[i] = getNextTiles(board[i], axis, direction);
    }
  } else {
    const rowLength = board[0].length;

    for (let i = 0; i < rowLength; i++) {
      const tiles = getColumn(board, i);

      const nextColumn = getNextTiles(tiles, axis, direction);

      nextColumn.forEach((tile, columnIndex) => {
        _board[columnIndex][i] = tile;
      });
    }
  }

  return _board;
}

function getColumn(board: TempBoardMatrix, columnIndex: number): TempTile[] {
  const tiles: TempTile[] = [];

  board.forEach((row) => {
    tiles.push(row[columnIndex]);
  });

  return tiles;
}

function getNextTiles(tiles: TempTile[], axis: Axis, direction: Direction) {
  // mover hacia la direccion los items
  const relocatedTiles = relocate(tiles, axis, direction);

  // fusionar los que son iguales y estan seguidos
  const tilesJoinedByPairs = joinPairs(relocatedTiles, direction);

  // mover hacia la direccion los items
  const result = relocate(tilesJoinedByPairs, axis, direction);

  return result;
}

function joinPairs(tiles: TempTile[], direction: Direction): TempTile[] {
  const _tiles =
    direction === Direction.POSITIVE ? [...tiles].reverse() : [...tiles];

  for (let i = 0; i < _tiles.length; i++) {
    const tile = _tiles[i];
    const nextIndex = i + 1;

    // si no existe el siguiente indice
    if (nextIndex >= _tiles.length) continue;

    const nextTile = _tiles[nextIndex];

    // si el actual o el siguiente es undefined
    if (!tile || !nextTile) continue;

    // si son diferentes
    if (tile.value !== nextTile.value) continue;

    // colocar la suma en el indice actual
    _tiles[i] = {
      ...tile,
      id: nextTile.id,
      value: tile.value + nextTile.value,
    };
    // descartar el siguiente
    _tiles[nextIndex] = undefined;
  }

  return direction === Direction.POSITIVE ? _tiles.reverse() : _tiles;
}

function relocate(
  tiles: TempTile[],
  axis: Axis,
  direction: Direction,
): TempTile[] {
  const tilesWithValues: TempInMotionTile[] = [];
  const blanks: undefined[] = [];

  for (let i = 0; i < tiles.length; i++) {
    const tile = tiles[i];

    if (tile) {
      tilesWithValues.push(tile);
    } else {
      blanks.push(undefined);
    }
  }

  const nextTiles =
    direction === Direction.POSITIVE
      ? [...blanks, ...tilesWithValues]
      : [...tilesWithValues, ...blanks];

  // nextTiles.forEach((tile, i) => {
  //   if (!tile) return;

  //   nextTiles[i] = tile;
  // });

  return nextTiles;
}
