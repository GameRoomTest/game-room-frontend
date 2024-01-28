import { FunctionComponent } from "react";

const GameList: FunctionComponent<Props> = ({className}) => {
  return (
    <div className={className}>
      
      <div className="game-item">
        <div className="title">Tateti</div>
        <button>Jugar</button>
      </div>

      <div className="game-item">
        <div className="title">Tutti frutti</div>
        <button>Jugar</button>
      </div>

      <div className="game-item">
        <div className="title">Golpeado</div>
        <button>Jugar</button>
      </div>

      <div className="game-item">
        <div className="title">Truco</div>
        <button>Jugar</button>
      </div>
    </div>
  )
}

export default GameList;

interface Props {
  className?: string;
}
