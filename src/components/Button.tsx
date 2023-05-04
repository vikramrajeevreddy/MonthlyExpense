
interface Props{
    children : String;
    onClickk : () => void;
    color: string;
}

const Button = ({children, onClickk, color} : Props) => {
    return (
        <div>
            <button className={"btn btn-" + color} onClick={onClickk}>{children}</button>
            
        </div>
    )
}

export default Button