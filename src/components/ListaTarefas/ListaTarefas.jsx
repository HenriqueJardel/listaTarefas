import Tarefa from "../Tarefa/Tarefa";
import "./ListaTarefas.css";
const ListaTarefas = (props) => {
    return (
        <fieldset className="ListaTarefas">
            <legend className="Lengend"><strong>Tarefas</strong></legend>
            {props.resultado?.map((item, i) => {
                return (
                    <Tarefa key={i}
                            descricao={item.descricao}
                            dataCriacao={item.dataCriacao}
                            concluido={item.concluido}
                            indice={item.indice}
                            removerTarefa={props.removerTarefa}
                            concluirTarefa={props.concluirTarefa}/>
                );
            })}
        </fieldset>
    );
}

export default ListaTarefas;