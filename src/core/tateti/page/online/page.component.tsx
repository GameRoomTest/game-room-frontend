import { FunctionComponent, useState } from 'react';
import GameOnline from '../../modal-game-online';
import { Player } from '../../types';
import { Mark } from 'src/core/tateti/types';

const Page: FunctionComponent<Props> = ({ className, onValue }) => {
  const [openGameModeModal, setOpenGameModeModal] = useState(false);

  return (
    <div className={className}>
      <button onClick={() => setOpenGameModeModal(true)}>Online</button>
      <GameOnline onSubmit={onValue} open={openGameModeModal} />
    </div>
  );
};

export default Page;

interface Props {
  className?: string;
  onValue: (value1: Player, value2: Player, myMark: Mark) => void;
}
