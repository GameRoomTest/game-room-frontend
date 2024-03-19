import styled from "styled-components";
import Board from "./board.component";


export default styled(Board)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .square {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 5px;
        aspect-ratio: 1/1;
        width: 25%;
        min-width: 400px;
        color: white;

    }

    .buttonReset{
        border: 2px solid rgb(216, 2, 134);
        border-radius: 25px;
        display: inline-block;
        font-family: "Lucida Console", Monaco, monospace;
        font-size: 20px;
        letter-spacing: 1px;
        cursor: pointer;
        padding: 1rem;
    }
`;
