import { FunctionComponent, useState } from 'react';
import Menu from 'src/core/simonGame/menuSimon';
import { View } from './types';

const SimonGame: FunctionComponent<StyledComponentProps> = ({ className }) => {
  const [view, setView] = useState(View.MenuSimon);

  return (
    <div className={className}>
      <div className="body-container">
        {view === View.MenuSimon && (
          <Menu onClickNewGame={() => setView(View.GameSimon)} />
        )}
      </div>
    </div>
  );
};

export default SimonGame;
