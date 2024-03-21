import styled from 'styled-components';
import TatetiPage from './page.component';

export default styled(TatetiPage)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 47, 121, 0.4992121848739496) 35%,
    rgba(0, 212, 255, 1) 100%
  );

  .title {
    font-family: Arial Black;
    font-weight: bold;
    font-size: 90px;
    color: black;
    text-shadow:
      0 1px 0 #ddd,
      0 2px 0 #ccc,
      0 3px 0 #bbb,
      0 4px 0 #aaa,
      0 5px 0 #acacac,
      0 6px 1px rgba(0, 0, 0, 0.1),
      0 0 5px rgba(0, 0, 0, 0.1),
      0 1px 3px rgba(0, 0, 0, 0.3),
      0 3px 5px rgba(0, 0, 0, 0.2),
      0 5px 10px rgba(0, 0, 0, 0.25),
      0 10px 10px rgba(0, 0, 0, 0.2),
      0 20px 20px rgba(0, 0, 0, 0.15);
  }

  .board-conteiner {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
  }

  .title {
    font-family: Arial Black;
    font-weight: bold;
    font-size: 90px;
    color: black;
    text-shadow:
      0 1px 0 #ddd,
      0 2px 0 #ccc,
      0 3px 0 #bbb,
      0 4px 0 #aaa,
      0 5px 0 #acacac,
      0 6px 1px rgba(0, 0, 0, 0.1),
      0 0 5px rgba(0, 0, 0, 0.1),
      0 1px 3px rgba(0, 0, 0, 0.3),
      0 3px 5px rgba(0, 0, 0, 0.2),
      0 5px 10px rgba(0, 0, 0, 0.25),
      0 10px 10px rgba(0, 0, 0, 0.2),
      0 20px 20px rgba(0, 0, 0, 0.15);
  }

  .board-conteiner {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
  }

  .alert-winner {
    font-family: Arial;
    font-size: 30px;
    color: #1278bf;
    text-shadow: 0px 0px 9px #508ad3;
  }
  .buttonPlay {
    border: 2px solid rgb(216, 2, 134);
    border-radius: 10px;
    padding: 18px 36px;
    display: inline-block;
    font-family: 'Lucida Console', Monaco, monospace;
    font-size: 14px;
    letter-spacing: 1px;
    cursor: pointer;
  }

  .score b {
    font-size: 50px;
  }
  .score span {
    font-size: 30px;
    color: #fff;
  }
  .score strong {
    font-size: 30px;
  }
`;
