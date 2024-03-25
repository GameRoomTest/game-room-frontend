import { FunctionComponent } from 'react';
import { Mark, PlayerByMark } from '../types';

const alertWinner: FunctionComponent<Props> = ({
  className,
  mark,
  players,
}) => {
  return (
    <div>
      <div className={className}>The winner is: {players[mark].name}</div>
    </div>
  );
};

export default alertWinner;

interface Props {
  className?: string;
  mark: Mark;
  players: PlayerByMark;
}
