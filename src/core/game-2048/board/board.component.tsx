import { FunctionComponent, useCallback, useState } from 'react';
import { Axis, Direction, Board as IBoard } from './types';
import { getExponent } from 'src/utils/get-exponent';
import { getInitialBoard, getNextBoard, insertOne } from './utils';
import { useKeyDownHandler } from './use-key-down-handler';
import { useSetTileSize } from './use-set-tile-size';
import { columnLength, rowLength } from './fixtures';

const Board: FunctionComponent<StyledComponentProps> = ({ className }) => {
  const [board, setBoard] = useState<IBoard>(() => getInitialBoard());

  const move = useCallback((axis: Axis, direction: Direction) => {
    setBoard((prev) => getNextBoard(prev, axis, direction));

    setBoard((prev) => insertOne(prev));
  }, []);

  useKeyDownHandler(move);

  const tileRef = useSetTileSize();

  return (
    <div className={className}>
      <div className="tiles-back">
        {Array(rowLength * columnLength)
          .fill(undefined)
          .map((_, i) => (
            <div className="tile-back" ref={tileRef} key={i} />
          ))}
      </div>

      <div className="tiles-container" id="tiles-container">
        {board.map(({ id, value, position }) => (
          <div
            key={id}
            // eslint-disable-next-line max-len
            className={`tile tile-position-${position[Axis.X]}-${position[Axis.Y]} tile-exp-${getExponent(value)}`}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
