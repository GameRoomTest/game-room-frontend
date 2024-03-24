import { FunctionComponent } from 'react';
import Menu from 'src/core/game-2048/menu';

const Game2048: FunctionComponent<StyledComponentProps> = ({ className }) => {
  return (
    <div className={className}>
      <div className="body-container">
        <Menu />
      </div>
    </div>
  );
};

export default Game2048;
