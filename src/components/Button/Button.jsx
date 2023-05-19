import "./Button.css";
const Button = (props) => {
    return (
        <button className="Button" type="submit">
            <span className="Icone">
                {props.children}
            </span>
            <span className="Texto">
                {props.texto}
            </span>
        </button>
    )
}

export default Button;