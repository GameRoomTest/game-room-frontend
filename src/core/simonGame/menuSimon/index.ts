import styled from 'styled-components';
import Menu from './menu.component';

export default styled(Menu)`
  display: flex;
  flex-direction: column;
  height: 100%;

  .menu-title {
    font-size: 5rem;
    text-align: center;
    color: red;
  }
  .action-buttons-container {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
`;
