import styled from 'styled-components';
import Game2048 from './game-2048.component';

export default styled(Game2048)`
  * {
    font-family: Rajdhani;
  }

  background-color: #fbf5e9;
  min-height: 100dvh;

  .body-container {
    padding: 2rem;
    width: 90%;
    max-width: 500px;
    margin: auto;

    display: flex;
    flex-direction: column;
    height: 100dvh;
  }

  .header {
    display: flex;
  }

  .title-tile {
    color: #fff;
    font-weight: 700;
    background-color: #e6c864;
    aspect-ratio: 1/1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    width: 25%;
    border-radius: 0.25rem;
  }
`;
