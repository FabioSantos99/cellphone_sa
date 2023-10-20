const catalogoProdutos = document.getElementById('container-produto');

function exibirTodos() {

   const produtosEscondidos = Array.from(catalogoProdutos.getElementsByClassName('hidden'));

   for (const produto of produtosEscondidos) {
    produto.classList.remove('hidden');
   }

}

function esconderSemSeguro() {

    exibirTodos();

    const produtosSemSeguro = Array.from(catalogoProdutos.getElementsByClassName('sem'));

    for(const produto of produtosSemSeguro) {

        produto.classList.add('hidden');
    }
}

function esconderComSeguro() {

    exibirTodos();
    const produtosComSeguro = Array.from(catalogoProdutos.getElementsByClassName('com'));

    for(const produto of produtosComSeguro) {

        produto.classList.add('hidden');
    }
}

export function inicializarFiltros() {
    document.getElementById('exibir-todos').addEventListener("click", exibirTodos);

    document.getElementById('exibir-sem').addEventListener("click", esconderComSeguro);

    document.getElementById('exibir-com').addEventListener("click", esconderSemSeguro);
}