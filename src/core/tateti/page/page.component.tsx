import { FunctionComponent, useState } from "react";
import Board from "../board";
import AlertWinner from "../alert-winner";
import TurnName from "../turn-name";
import { Mark, PlayerByMark } from "../types";

const TatetiPage: FunctionComponent<Props> =({className}) => {
    const [winner ,setWinner] = useState<Mark | undefined>(undefined);
    const [currentTurn, setCurrentTurn] = useState<Mark>(Mark.X);
    const [players, setPlayers] = useState<PlayerByMark | undefined>(undefined);

    
    const onMark = ()=> {
        setCurrentTurn(currentTurn === Mark.X ? Mark.O : Mark.X)
    }

    const onWin = (winnerMark: Mark) => {
        setWinner(winnerMark);

        setPlayers((prevPlayers) => {
            if(!prevPlayers) return;
            
            const currentScore = prevPlayers[winnerMark].score;
    
            return {
                ...prevPlayers,
                [winnerMark]: {
                    ...prevPlayers[winnerMark],                
                    score: currentScore + 1,
                }
            };
        });
    }

    const initGame = ()=>{
        const playerOneName = prompt("Enter the player one's name")
        const playerTwoName = prompt("Enter the player two's name")
        if (!playerOneName || !playerTwoName) return;
        setPlayers({
            [Mark.X]: {
                name: playerOneName,
                score: 0,
                mark:Mark.X,
            },
            [Mark.O]: {
                name: playerTwoName,
                score: 0,
                mark:Mark.O,
            }
        })
    }
    return (
    <div className={className}>
        <h1 className="title">Tateti page</h1>
        {!players &&
        <button className="buttonPlay" onClick={initGame}>Play</button>
        }
        {(!winner && players) &&
        <TurnName mark={currentTurn} players={players} />            
        }<section className="board-conteiner">
        { players && 
        <Board mark={currentTurn} onMark={onMark} onReset= {() => setWinner(undefined)}  
        onWin={onWin}/>
        }
        </section>
        {(winner && players) &&
        <AlertWinner className="alert-winner"  mark={winner} players={players}/>
          }
        {players && (
            <p className="score">
                <b> Scores: </b> <span> {players[Mark.X].name} : </span> <strong> {players[Mark.X].score}</strong>   <b>pts. </b>
                <b> Scores: </b> <span> {players[Mark.O].name} : </span> <strong> {players[Mark.O].score} </strong>  <b>pts. </b>
            </p>
        )}
    </div>
 )
}


export default TatetiPage;

interface Props {
    className?: string
}
