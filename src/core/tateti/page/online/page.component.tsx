import { FunctionComponent, useState } from "react";
import GameOnline from "../../modal-game-online";

const Page: FunctionComponent<Props>=({className}) => {
    const [openGameModeModal, setOpenGameModeModal]= useState(false)

    return(
        <div className={className}>
            <button onClick={() => setOpenGameModeModal(true)}>Online</button>
            <GameOnline open={openGameModeModal}/>
        </div>
    )
}

export default Page;

interface Props{
    className?: string;
}