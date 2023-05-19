import {useState} from "react";
import "./FormCadastro.css";
import Button from "../Button/Button";
import {IconeAdicao} from "../Icones/Icones";
const FormCadastro = (props) => {
    const [descricao, setDescricao] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        props.onSubmit(descricao);

        setDescricao("");
    }

    return(
      <div>
          <fieldset className="FormCadastro">
              <legend className="Lengend"><strong>Adicionar tarefa</strong></legend>
              <form className="Form" onSubmit={(e) => handleSubmit(e)}>
                  <div className="FormGroup">
                      <label><strong>Descrição:</strong> </label>
                      <input className="Input"
                             type="text"
                             placeholder="Digite a descrição da tarefa"
                             value={descricao}
                             onChange={(e) => setDescricao(e.target.value)}
                             maxLength="55"/>
                  </div>
                  <Button texto="Adicionar">
                      {IconeAdicao}
                  </Button>
              </form>
          </fieldset>
      </div>
    );
}

export default FormCadastro;