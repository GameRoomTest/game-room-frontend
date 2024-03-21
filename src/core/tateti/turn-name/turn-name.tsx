import { FunctionComponent } from 'react';
import { Mark, PlayerByMark } from '../types';

const TurnName: FunctionComponent<Props> = ({ className, mark, players }) => {
  return <div className={className}>Turn of: {players[mark].name} </div>;
};

export default TurnName;

interface Props {
  mark: Mark;
  className?: string;
  players: PlayerByMark;
}
