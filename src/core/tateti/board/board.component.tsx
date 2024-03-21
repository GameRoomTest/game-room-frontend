import { FunctionComponent, useEffect, useState } from 'react';
import BoardItem from '../board-item';
import { Mark, PlayerByMark } from '../types';

const winnerPatter = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];

const Board: FunctionComponent<Props> = ({
  className,
  onWin,
  onReset,
  mark,
  onMark,
  playersByMark,
  movements,
}) => {
  // const [markList,setMarkList] = useState<(Mark | undefined)[]>(Array(9).fill(undefined))
  const [isThereWinner, setIsThereWinner] = useState(false);

  // const onClickBoardItem = (index: number) => {
  //     if(markList[index] ) return;
  //     const newMarkList = [...markList]
  //     newMarkList[index] = mark
  //     setMarkList(newMarkList)

  //     const player = playersByMark[mark];
  //     onMark(index, player.id)
  // }
  const onClickBoardItem = (index: number) => {
    if (movements[index]) return;

    const player = playersByMark[mark];
    onMark(mark, index, player.id);
  };

  const reset = () => {
    setIsThereWinner(false);
    onReset();
  };

  const checkWinner = () => {
    winnerPatter.forEach((winningSequence) => {
      [Mark.O, Mark.X].forEach((currentMark) => {
        const isWinner = winningSequence.every(
          (index) => movements[index] === currentMark,
        );

        if (isWinner) {
          onWin(currentMark);
          setIsThereWinner(true);
        }
      });
    });
  };

  // const win = winnerPatter.every(() => markList.includes)
  // console.log(win,'Hay un ganador')

  useEffect(() => {
    checkWinner();
  }, [movements]);

  return (
    <div className={className}>
      <div className="square">
        {movements.map((mark, index) => (
          <BoardItem
            key={index}
            mark={mark}
            onClick={() => !isThereWinner && onClickBoardItem(index)}
          />
        ))}
        <br />
        <br />
      </div>

      <button className="buttonReset" onClick={reset}>
        {' '}
        reset
      </button>
    </div>
  );
};

export default Board;

interface Props {
  className?: string;
  onWin: (markWnerin: Mark) => void;
  onReset: () => void;
  mark: Mark;
  playersByMark: PlayerByMark;
  onMark: (mark: Mark, position: number, playerId: string) => void;
  movements: (Mark | undefined)[];
}
