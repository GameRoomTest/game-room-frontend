import { FunctionComponent } from 'react';

const Menu: FunctionComponent<Props> = ({ className }) => {
  return (
    <div className={className}>
      <h1 className="menu-title">SIMON SAYS </h1>

      <div className="action-buttons-container">
        <button className="options button"> PLAY</button>
        <button className="options button"> HIGH SCORE </button>
        <button className="options button"> MORE GAME </button>
      </div>
    </div>
  );
};

export default Menu;

interface Props extends StyledComponentProps {
  onClickNewGame: () => void;
}
