import { FunctionComponent } from "react";
import GameList from "../game/game-list";

const MainPage: FunctionComponent<Props> = ({className}) => {
  return (
    <div className={className}>
      <header className="title-container">
        <h2>Game room</h2>
      </header>

      <GameList />
    </div>
  )
}

export default MainPage;

interface Props {
  className?: string;
}
