import { AiOutlineLogin } from "react-icons/ai";
type LogginBtnProps = {
    action: () => void;
    style: string;
    text?: string;
};

const LogginButton: React.FC<LogginBtnProps> = (props) => {
    return (
        <button onClick={props.action} className={props.style}>
            {/* <p>{props.text}</p> */}
            <AiOutlineLogin size={36}/>
        </button>
    );
};

export default LogginButton;