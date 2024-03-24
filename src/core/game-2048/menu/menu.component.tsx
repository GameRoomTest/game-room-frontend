import { FunctionComponent } from 'react';

const Menu: FunctionComponent<StyledComponentProps> = ({ className }) => {
  return (
    <div className={className}>
      <h1 className="menu-title">Menu</h1>

      <div className="action-buttons-container">
        <button className="new-game button">New Game</button>
        <button className="options button">Options</button>
      </div>
    </div>
  );
};

export default Menu;
