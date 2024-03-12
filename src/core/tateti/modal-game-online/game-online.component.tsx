import { FunctionComponent, useState } from 'react';
import Modal from 'src/components/modal';
import { getSocket } from 'src/core/socket';
import { Event } from 'src/core/socket/types';
import { v4 as uuid } from 'uuid';


const GameOnline: FunctionComponent<Props>=({className, open}) =>{
    const[ playerOneName, setPlayerOneName] = useState('');
    const[ step, setStep] = useState<Step>(Step.Intial);
    const[code, setCode] = useState('');

    const onConfirmPlayerOneName = ()=>{
        getSocket().on(Event.GAME_CREATED, (roomCode)=>{
            setCode(roomCode);
        })
        getSocket().emit(Event.CREATE_GAME, {id:uuid(), name:playerOneName})
        setStep(Step.ShareCode)
    }

    return (
        <Modal className={className} open={open}>
            {step === Step.Intial &&
            <div>
            <button onClick={() => setStep(Step.InputPlayerOne)} >Create Game</button>
            <button onClick={() => setStep(Step.JoinPlayerTwo)} >Join Game</button>
            </div>
            }
            { step === Step.InputPlayerOne &&
            <div>
                <input type="text" value={playerOneName} onChange={(e) => setPlayerOneName(e.target.value)}/>
                <button onClick={onConfirmPlayerOneName} > Generate Code</button>
            </div>
            }
            { step === Step.ShareCode &&
            <div>
                <div>{code}</div>
                <p>Share the Code to play</p>
            </div>
            }
        </Modal>
    )
}

export default GameOnline;

enum Step{
    Intial,
    InputPlayerOne,
    ShareCode,
    JoinPlayerTwo
}

interface Props{
    className?: string;
    open: boolean;
}