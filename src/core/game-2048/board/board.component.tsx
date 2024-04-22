import { FunctionComponent, useEffect, useRef, useState } from 'react';
import { Axis, Direction, Board as IBoard } from './types';
import { getExponent } from 'src/utils/get-exponent';
import { getInitialBoard, getNextBoard, insertOne } from './utils';

const Board: FunctionComponent<StyledComponentProps> = ({ className }) => {
  const tileRef = useRef<HTMLDivElement>(null);
  const [board, setBoard] = useState<IBoard>(() => getInitialBoard());

  useEffect(() => {
    function keyDownHandler(e: KeyboardEvent) {
      if (e.key === 'ArrowUp') {
        setBoard((prev) => getNextBoard(prev, Axis.Y, Direction.NEGATIVE));
      }
      if (e.key === 'ArrowDown') {
        setBoard((prev) => getNextBoard(prev, Axis.Y, Direction.POSITIVE));
      }
      if (e.key === 'ArrowLeft') {
        setBoard((prev) => getNextBoard(prev, Axis.X, Direction.NEGATIVE));
      }
      if (e.key === 'ArrowRight') {
        setBoard((prev) => getNextBoard(prev, Axis.X, Direction.POSITIVE));
      }

      // setBoard((prev) => insertOne(prev));
    }

    addEventListener('keydown', keyDownHandler);

    return () => {
      removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  useEffect(() => {
    const widthSize = tileRef.current?.clientWidth;
    const heightSize = tileRef.current?.clientHeight;

    if (!widthSize || !heightSize) return;

    const element = document.getElementById('tiles-container');
    element?.style.setProperty('--tile-width', `${widthSize}px`);
    element?.style.setProperty('--tile-height', `${heightSize}px`);
  }, []);

  return (
    <div className={className}>
      <div className="tiles-back">
        <div className="tile-back" ref={tileRef}></div>
        <div className="tile-back"></div>
        <div className="tile-back"></div>
        <div className="tile-back"></div>
        <div className="tile-back"></div>
        <div className="tile-back"></div>
        <div className="tile-back"></div>
        <div className="tile-back"></div>
        <div className="tile-back"></div>
        <div className="tile-back"></div>
        <div className="tile-back"></div>
        <div className="tile-back"></div>
        <div className="tile-back"></div>
        <div className="tile-back"></div>
        <div className="tile-back"></div>
        <div className="tile-back"></div>
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
