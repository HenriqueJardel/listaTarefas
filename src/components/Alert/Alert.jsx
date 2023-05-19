import {forwardRef, useImperativeHandle, useState} from "react";
import "./Alert.css";

const Alert = forwardRef((props, ref) => {
    const [visivel, setVisivel] = useState(false);
    const [mensagem, setMensagem] = useState("");
    const style = {};

    if(props.tipo === "sucesso") {
        style.backgroundColor = "#04AA6D";
    } else if(props.tipo === "alerta") {
        style.backgroundColor = "#2196F3";
    } else {
        style.backgroundColor = "#f44336";
    }

    useImperativeHandle(ref, () => ({
        mostrarMensagem(mensagem, tipo) {
            setVisivel(true);
            setMensagem(mensagem);

            const timeOut = setTimeout(() => setVisivel(false), 3000);

            return () => clearTimeout(timeOut);
        }
    }));

    return (
        <>
            {visivel && (
                <div className="Alert" style={style}><strong>{mensagem}</strong></div>
            )}
        </>
    )
});
export default Alert;