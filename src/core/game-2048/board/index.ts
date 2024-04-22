import styled from 'styled-components';
import Board from './board.component';
import { colors } from './fixtures';

const columnLength = 4;
const rowLength = 4;

const getTilePositionStyles = () => {
  let styles = '';

  for (let y = 0; y < columnLength; y++) {
    for (let x = 0; x < rowLength; x++) {
      const gap =
        parseFloat(getComputedStyle(document.documentElement).fontSize) / 2;

      styles += `
        .tile-position-${x}-${y} {
          transform: translate(
            calc(${gap * x}px + (var(--tile-width, 0) * ${x})),
            calc(${gap * y}px + (var(--tile-height, 0) * ${y}))
          );
        }
      `;
    }
  }

  return styles;
};

const getTileColorsStyles = () => {
  let styles = '';

  colors.forEach((color, i) => {
    styles += `
      .tile.tile-exp-${i} {
        background-color: ${color};
        ${[0, 1].includes(i) ? 'color: #766f61' : ''}
      }
    `;
  });

  return styles;
};

export default styled(Board)`
  width: 100%;
  aspect-ratio: 1/1;
  background-color: #a39183;
  border-radius: var(--border-radius-size);
  position: relative;

  .tiles-back {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 0.5rem;
    padding: 0.5rem;
    height: 100%;

    .tile-back {
      border-radius: var(--border-radius-size);
      background-color: #beae9f;
    }
  }

  .tiles-container {
    padding: 0.5rem;
    position: absolute;
    top: 0;
    left: 0;
  }

  .tile {
    position: absolute;
    transition: 100ms ease-in-out;
    border-radius: var(--border-radius-size);
    width: var(--tile-width, 0);
    height: var(--tile-height, 0);

    color: #fff;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
  }

  ${getTilePositionStyles()}

  ${getTileColorsStyles()}
`;
