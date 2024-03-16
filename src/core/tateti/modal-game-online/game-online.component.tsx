import { FunctionComponent, useState } from "react";
import Modal from "src/components/modal";
import { getSocket } from "src/core/socket";
import { Event, Room, Player as SocketPlayer } from "src/core/socket/types";
import { v4 as uuid } from "uuid";
import { Player } from "../types";
import {Mark} from 'src/core/tateti/types';

const GameOnline: FunctionComponent<Props> = ({
  className,
  open,
  onSubmit,
}) => {
  const [playerOneName, setPlayerOneName] = useState("");
  const [playerTwoName, setPlayerTwoName] = useState("");
  const [step, setStep] = useState<Step>(Step.Intial);
  const [code, setCode] = useState("");

  const onConfirmPlayerOneName = () => {
    getSocket().on(Event.GAME_CREATED, (roomCode: string) => {
      setCode(roomCode);
    });
    const playerOneId = uuid();

    getSocket().emit(Event.CREATE_GAME, {
      id: playerOneId,
      name: playerOneName,
    });
    setStep(Step.ShareCode);

    getSocket().on(Event.JOINED_IN_GAME, (room: Room) => {
      const playerTwo = Object.values(room.players).find((p) => p.id !== playerOneId ) as SocketPlayer;
      const playerOne = Object.values(room.players).find((p) => p.id === playerOneId ) as SocketPlayer;
      onSubmit(
        {
          id: playerOne.id,
          mark: playerOne.mark,
          name: playerOne.name,
          score: 0,
        },
        {
          id: playerTwo.id,
          mark: playerTwo.mark,
          name: playerTwo.name,
          score: 0,
        },
        playerOne.mark
      );
      console.log(room);
    });
  };

  const onConfirmPlayerTwoName = () => {
    const playerTwoId = uuid();
    getSocket().emit(Event.JOIN_GAME, {
      id: playerTwoId,
      name: playerTwoName,
      code,
    });
    console.log(code);
    getSocket().on(Event.JOINED_IN_GAME, (room: Room) => {
      const playerOne = Object.values(room.players).find((p) => p.id !== playerTwoId) as SocketPlayer;
      const playerTwo = Object.values(room.players).find((p) => p.id === playerTwoId) as SocketPlayer;
      onSubmit(
        {
          id: playerOne.id,
          mark: playerOne.mark,
          name: playerOne.name,
          score: 0,
        },
        {
          id: playerTwo.id,
          mark: playerTwo.mark,
          name: playerTwo.name,
          score: 0,
        },
        playerTwo.mark
      );
      console.log(room);
    });
  };

  return (
    <Modal className={className} open={open}>
      {step === Step.Intial && (
        <div>
          <button onClick={() => setStep(Step.InputPlayerOne)}>
            Create Game
          </button>
          <button onClick={() => setStep(Step.JoinPlayerTwo)}>Join Game</button>
        </div>
      )}
      {step === Step.InputPlayerOne && (
        <div>
          <input
            type="text"
            value={playerOneName}
            onChange={(e) => setPlayerOneName(e.target.value)}
          />
          <button onClick={onConfirmPlayerOneName}> Generate Code</button>
        </div>
      )}
      {step === Step.ShareCode && (
        <div>
          <div>{code}</div>
          <p>Share the Code to play</p>
        </div>
      )}
      {step === Step.JoinPlayerTwo && (
        <div>
          <label>Name</label>
          <input
            type="text"
            value={playerTwoName}
            onChange={(e) => setPlayerTwoName(e.target.value)}
          />
          <br />
          <label>Join to Play</label>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <br />
          <button type="submit" onClick={onConfirmPlayerTwoName}>
            {" "}
            Join
          </button>
        </div>
      )}
    </Modal>
  );
};

export default GameOnline;

enum Step {
  Intial,
  InputPlayerOne,
  ShareCode,
  JoinPlayerTwo,
}

interface Props {
  className?: string;
  open: boolean;
  onSubmit: (value1: Player, value2: Player, myMark: Mark) => void;
}
