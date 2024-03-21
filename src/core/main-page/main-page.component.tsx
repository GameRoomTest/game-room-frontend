import { FunctionComponent } from 'react';
import GameList from '../game/game-list';

const MainPage: FunctionComponent<Props> = ({ className }) => {
  return (
    <div className={className}>
      <header className="title-container">
        <h1>Game room</h1>
      </header>

      <GameList />
    </div>
  );
};

export default MainPage;

interface Props {
  className?: string;
}
