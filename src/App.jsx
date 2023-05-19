import { useRef, useState } from "react";
import { useStorage } from "./hook/useStorage";

import FormBusca from "./components/FormBusca/FormBusca";
import FormCadastro from "./components/FormCadastro/FormCadastro";
import Layout from "./components/Layout/Layout";
import ListaTarefas from "./components/ListaTarefas/ListaTarefas";
import Alert from "./components/Alert/Alert";

function App() {

  const [buscarItem, salvarItem, concluirItem, removerItem] = useStorage();
  const [resultado, setResultado] = useState([]);
  const [pesquisa, setPesquisa] = useState();
  const [tipo, setTipo] = useState("alerta");

  const alertRef = useRef(null);
  function pesquisar(descricao, dataCriacao, concluido) {
    let resultados = buscarItem(descricao, dataCriacao, concluido);

    if(resultados.length === 0) {
        mostrarMensagem("Não foram encontrados resultados para esses filtros!", "alerta");
    }

    setPesquisa({
        descricao: descricao,
        dataCriacao: dataCriacao,
        concluido: concluido
    });

    setResultado(resultados);
  }

  function removerTarefa(tarefa) {
      removerItem(tarefa);
      recarregarTarefas();
  }

  function concluirTarefa(tarefa) {
      concluirItem(tarefa);
      recarregarTarefas();
  }
  function cadastrarTarefa(descricao) {
      if(descricao === null || descricao === undefined || descricao.length === 0) {
          mostrarMensagem("O campo descrição é obrigatório!", "erro");
          return;
      }

      salvarItem({ descricao: descricao });
      recarregarTarefas();
  }

  function recarregarTarefas() {
      if(pesquisa !== null && pesquisa !== undefined) {
          pesquisar(pesquisa.descricao, pesquisa.dataCriacao, pesquisa.concluido);
      } else {
          pesquisar();
      }
  }

  function mostrarMensagem(mensagem, tipo) {
      setTipo(tipo);
      alertRef.current?.mostrarMensagem(mensagem);
  }

  return (
      <div>
          <div style={{ position: "absolute", top: 0, right: 0}}>
              <Alert ref={alertRef} tipo={tipo}/>
          </div>
          <Layout>
              <strong><h2 style={{ textAlign: "center"}}>Coisas a fazer</h2></strong>
          </Layout>
          <Layout>
              <FormCadastro onSubmit={cadastrarTarefa}/>
          </Layout>
          <Layout>
              <FormBusca onSubmit={pesquisar} />
              <ListaTarefas resultado={resultado}
                            removerTarefa={removerTarefa}
                            concluirTarefa={concluirTarefa}/>
          </Layout>
      </div>
  );
}

export default App;
