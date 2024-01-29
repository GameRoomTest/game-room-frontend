import { FunctionComponent } from "react";

const TatetiPage: FunctionComponent<Props> =({className}) => {
 return (
    <div className={className}>
        <h1 className="title">Tateti</h1>
    </div>
 )
}

export default TatetiPage;

interface Props {
    className?: string
}