import { FunctionComponent } from "react";
import { Mark } from "../types";


const BoardItem: FunctionComponent<Props> = ({className, mark, onClick})=> {

    return (
        <div className={className} onClick={onClick}> 
        {mark}
        </div>
    )
}

export default BoardItem


interface Props{
    className?: string;
    mark?: Mark;
    onClick: () => void
} 

