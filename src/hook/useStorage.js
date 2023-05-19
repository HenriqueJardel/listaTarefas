export const useStorage = () => {
    function buscarItem(descricao, dataCriacao, concluido) {
        let listaTarefas = getListaTarefas();
        let dataFormatada = "";

        if(dataCriacao) {
            const arr = dataCriacao.split("-");
            dataFormatada = `${arr[2]}/${arr[1]}/${arr[0]}`
        }

        if(listaTarefas === null || listaTarefas === undefined) {
            return null;
        }

        return listaTarefas.filter(item => {
            let podeAdicionar = true;

            if(descricao && !item.descricao.toLowerCase().includes(descricao.toLowerCase())) {
                podeAdicionar = false;
            }

            if(dataFormatada && !item.dataCriacao.includes(dataFormatada)) {
                podeAdicionar = false;
            }

            if(concluido && concluido != "Todos" &&
                !item.concluido.toLowerCase().includes(concluido.toLowerCase())) {
                podeAdicionar = false;
            }

            return podeAdicionar;
        });
    }
    function salvarItem(item) {
        let listaTarefas = getListaTarefas();
        let indice = getIndice();
        let hoje = new Date();

        item.dataCriacao = hoje.toLocaleDateString('pt-BR');
        item.concluido = "Não";
        item.indice = indice;

        listaTarefas.push(item);

        indice++;

        setListaTarefas(listaTarefas);
        setIndice(indice);
    }

    function concluirItem(item) {
        let listaTarefas = getListaTarefas();
        let index = getIndex(listaTarefas, item.indice);

        listaTarefas[index].concluido = "Sim";

        setListaTarefas(listaTarefas);
    }
    function removerItem(item) {
        let listaTarefas = getListaTarefas();
        let index = getIndex(listaTarefas, item.indice);

        listaTarefas.splice(index, 1);

        setListaTarefas(listaTarefas);
    }

    function getIndex(listaTarefas, indice) {
        for(let i = 0; i < listaTarefas.length; i++) {
            if(listaTarefas[i].indice === indice) {
                return i;
            }
        }

        return null;
    }
    function getListaTarefas() {
        return JSON.parse(localStorage.getItem("listaTarefas")) ?? [];
    }

    function getIndice() {
        return JSON.parse(localStorage.getItem("indice")) ?? 0;
    }
    function setListaTarefas(lista) {
        localStorage.setItem("listaTarefas", JSON.stringify(lista));
    }

    function setIndice(indice) {
        localStorage.setItem("indice", indice);
    }

    return [ buscarItem, salvarItem, concluirItem, removerItem]
}