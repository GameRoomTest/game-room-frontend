import styled from 'styled-components';
import GameList from './game-list.component';

export default styled(GameList)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding-top: 2rem;
  width: calc(100% - 3rem);
  max-width: 800px;
  margin: auto;

  .game-item {
    border: solid 1px gray;
    border-radius: 8px;

    .title {
      font-weight: bold;
      color: gray;
    }
  }
`;
