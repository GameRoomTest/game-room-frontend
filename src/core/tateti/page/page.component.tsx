import { FunctionComponent, useEffect, useState } from 'react';
import Board from '../board';
import AlertWinner from '../alert-winner';
import TurnName from '../turn-name';
import { Mark, Player, PlayerByMark } from '../types';
import InputNameModal from 'src/core/tateti/modal-input-name';
import Page from './online';
import { getSocket } from 'src/core/socket';
import { Event } from 'src/core/socket/types';

const TatetiPage: FunctionComponent<Props> = ({ className }) => {
  const [winner, setWinner] = useState<Mark | undefined>(undefined);
  const [currentTurn, setCurrentTurn] = useState<Mark>(Mark.X);
  const [myMark, setMyMark] = useState<Mark | undefined>(undefined);
  const [players, setPlayers] = useState<PlayerByMark | undefined>(undefined);
  const [showModal, setShowModal] = useState(false);

  const [movements, setMovements] = useState<(Mark | undefined)[]>(
    Array(9).fill(undefined),
  );

  const onMark = (mark: Mark, position: number, playerId: string) => {
    const isMyTurn = currentTurn === myMark;
    if (!isMyTurn) return;

    setCurrentTurn(currentTurn === Mark.X ? Mark.O : Mark.X);

    const newMovements = [...movements];
    newMovements[position] = mark;
    setMovements(newMovements);

    getSocket().emit(Event.MOVE, { playerId, position });
  };

  useEffect(() => {
    getSocket().on(Event.ON_MOVE, ({ position }) => {
      console.log(Event.ON_MOVE);
      setCurrentTurn(currentTurn === Mark.O ? Mark.X : Mark.O);
      setMovements((prevMovement) => {
        const newMovements = [...prevMovement];
        console.log(myMark);
        newMovements[position] = myMark === Mark.O ? Mark.X : Mark.O;
        return newMovements;
      });
    });
    return () => {
      getSocket().off(Event.ON_MOVE);
    };
  }, [currentTurn, myMark]);

  const onWin = (winnerMark: Mark) => {
    setWinner(winnerMark);

    setPlayers((prevPlayers) => {
      if (!prevPlayers) return;

      const currentScore = prevPlayers[winnerMark].score;

      return {
        ...prevPlayers,
        [winnerMark]: {
          ...prevPlayers[winnerMark],
          score: currentScore + 1,
        },
      };
    });
  };

  const initGame = (playerOne: Player, playerTwo: Player, myMark: Mark) => {
    setPlayers({
      [playerOne.mark]: playerOne,
      [playerTwo.mark]: playerTwo,
    } as PlayerByMark);

    setMyMark(myMark);

    setShowModal(false);
  };
  return (
    <div className={className}>
      <h1 className="title">Tateti page</h1>
      {!players && (
        <button className="buttonPlay" onClick={() => setShowModal(true)}>
          Play
        </button>
      )}
      {!players && <Page onValue={initGame} />}
      {!winner && players && <TurnName mark={currentTurn} players={players} />}
      <section className="board-conteiner">
        {players && (
          <Board
            mark={currentTurn}
            playersByMark={players}
            onMark={onMark}
            onReset={() => {
              setWinner(undefined);
              setMovements(Array(9).fill(undefined));
            }}
            onWin={onWin}
            movements={movements}
          />
        )}
      </section>
      {winner && players && (
        <AlertWinner className="alert-winner" mark={winner} players={players} />
      )}
      {players && (
        <p className="score">
          <b> Scores: </b> <span> {players[Mark.X].name} : </span>{' '}
          <strong> {players[Mark.X].score}</strong> <b>pts. </b>
          <b> Scores: </b> <span> {players[Mark.O].name} : </span>{' '}
          <strong> {players[Mark.O].score} </strong> <b>pts. </b>
        </p>
      )}
      {/* <InputNameModal open={showModal} onSubmit={(value1, value2) => initGame(value1, value2)} /> */}
    </div>
  );
};

export default TatetiPage;

interface Props {
  className?: string;
}
