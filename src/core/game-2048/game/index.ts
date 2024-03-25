import styled from 'styled-components';
import Game from './game.component';

export default styled(Game)`
  height: 100%;
  display: flex;
  flex-direction: column;

  .header {
    display: flex;
    justify-content: space-between;
  }

  .game-title-tile {
    background-color: #e6c864;
    color: #fff;
    font-weight: 700;
    aspect-ratio: 1/1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    height: 100px;
    border-radius: 0.25rem;
  }

  .game-body {
    flex-grow: 1;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
