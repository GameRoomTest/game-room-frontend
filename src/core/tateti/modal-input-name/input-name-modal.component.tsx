import { FunctionComponent, useState } from "react"
import Modal from "src/components/modal"

const InputNameModal: FunctionComponent<Props> = ({open, onSubmit, className})=> {
    const [player1, setPlayer1] = useState('');
    const [player2, setPlayer2] = useState('');

    const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        onSubmit(player1, player2);
    }

    return (
        <Modal open={open} >
            <form onSubmit={onSubmitForm} className={className}>
                <ul>
                    <li>
                <label>Enter the player one's name</label>
                <input placeholder="input name" value={player1} onChange={(e) => setPlayer1(e.target.value)}/>
                    </li>
                    <li>
                <label>Enter the player two's name</label>
                <input placeholder="input name" value={player2} onChange={(e) => setPlayer2(e.target.value)} />
                    </li>
                </ul>
                <button type="submit" disabled={!player1 || !player2} > Play </button>
            </form>
        </Modal>
    )
}
export default InputNameModal;

interface Props {
    className?: string;
    open: boolean;
    onSubmit: (value1: string, value2: string) => void;
}