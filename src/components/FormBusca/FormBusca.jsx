import { useState } from "react";
import { IconeLupa } from "../Icones/Icones";
import Button from "../Button/Button";
import "./FormBusca.css";

const FormBusca = (props) => {
    const [descricao, setDescricao] = useState("");
    const [dataCriacao, setDataCriacao] = useState("");
    const [concluido, setConcluido] = useState("Todos");

    function handleSubmit(e) {
        e.preventDefault();
        props.onSubmit(descricao, dataCriacao, concluido);
    }

    return (
        <fieldset className="FormBusca">
            <legend className="Lengend"><strong>Informe os filtros para pesquisa</strong></legend>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="Input">
                    <div className="FormGroup">
                        <label className="Label"><strong>Descrição:</strong></label>
                        <input type="text"
                                  placeholder="Digite a descrição"
                                  value={descricao}
                                  onChange={(e) => setDescricao(e.target.value)}/>
                    </div>
                    <div className="FormGroup">
                        <label className="Label"><strong>Data cadastro: </strong> </label>
                        <input type="date"
                                  placeholder="Selecione a data"
                                  value={dataCriacao}
                                  onChange={(e) => setDataCriacao(e.target.value)}/>
                    </div>
                    <div className="FormGroup">
                        <label className="Label"><strong>Concluído: </strong></label>
                        <select onChange={(e) => setConcluido(e.target.value)}>
                            <option value="Todos">Todos</option>
                            <option value="Sim">Sim</option>
                            <option value="Não">Não</option>
                        </select>
                    </div>
                </div>
                <div className="FormButton">
                    <Button texto="Pesquisar">
                        {IconeLupa}
                    </Button>
                </div>
            </form>
        </fieldset>
    );
}

export default FormBusca;