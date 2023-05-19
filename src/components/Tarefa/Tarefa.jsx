import "./Tarefa.css";
import {IconeCheck, IconeRemocao} from "../Icones/Icones";
import Condicional from "../Condicional/Condicional";

const Tarefa = (props) => {

    const tarefa = {
        descricao: props.descricao,
        dataCriacao: props.dataCriacao,
        concluido: props.concluido,
        indice: props.indice
    };

    const style = {}

    if(props.concluido === "Sim") {
        style.border = "2px solid #508E4F";
    } else {
        style.border = "2px solid #F2600C";
    }

    return (
      <div style={style} className="Tarefa">
         <div className="Labels">
             <span><strong>Descrição</strong></span>
             <span><strong>Data criação</strong></span>
             <span><strong>Ações</strong></span>
         </div>
          <div className="Valores">
              <Condicional teste={props.concluido === "Sim"}>
                  <span className="Descricao"><s>{props.descricao}</s></span>
              </Condicional>
              <Condicional teste={props.concluido === "Não"}>
                  <span className="Descricao">{props.descricao}</span>
              </Condicional>
              <Condicional teste={props.concluido === "Sim"}>
                  <span><s>{props.dataCriacao}</s></span>
              </Condicional>
              <Condicional teste={props.concluido === "Não"}>
                  <span>{props.dataCriacao}</span>
              </Condicional>
              <div className="Acoes">
                 <Condicional teste={props.concluido === "Sim"}>
                     <button className="Remover"
                             onClick={() => props.removerTarefa(tarefa)}>{IconeRemocao}</button>
                 </Condicional>
                 <Condicional teste={props.concluido === "Não"}>
                     <button className="Concluir"
                             onClick={() => props.concluirTarefa(tarefa)}>{IconeCheck}</button>
                     <button className="Remover"
                             onClick={() => props.removerTarefa(tarefa)}>{IconeRemocao}</button>
                 </Condicional>
              </div>
          </div>
      </div>
    );
}

export default Tarefa;