import { FunctionComponent } from 'react';

const Game2048: FunctionComponent<StyledComponentProps> = ({ className }) => {
  return (
    <div className={className}>
      <div className="body-container">
        <header className="header">
          <div className="title-tile">2048</div>
        </header>
      </div>
    </div>
  );
};

export default Game2048;
