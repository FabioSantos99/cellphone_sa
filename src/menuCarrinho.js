import { catalogo, salvarLocalStorage, lerLocalStorage } from "./utilidades";

const idsProdutosCarrinhoComQuantidade = lerLocalStorage('carrinho') ?? {};

function abrirCarrinho() {
  
    document.getElementById("carrinho").classList.add("right-[0px]");
    document.getElementById("carrinho").classList.remove("right-[-360px]");
  }
  
  function fecharCarrinho() {
    document.getElementById("carrinho").classList.remove("right-[0px]");
    document.getElementById("carrinho").classList.add("right-[-360px]");
  }

  function irParaCheckout() {
    if(Object.keys(idsProdutosCarrinhoComQuantidade).length === 0) {
      return;
    }

    window.location.href = window.location.origin + '/checkout.html';
  }
  
  export function inicializarCarrinho() {
    const botaoFecharCarrinho = document.getElementById("fechar-carrinho");
    const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");
    const botaoIrparaCheckout = document.getElementById('finalizar-compra');

  
    botaoFecharCarrinho.addEventListener("click", fecharCarrinho);
    botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
    botaoIrparaCheckout.addEventListener("click", irParaCheckout);
  }


  // ------------- Remover produtos -----------


  function removerDoCarrinho(idProduto) {
    delete idsProdutosCarrinhoComQuantidade[idProduto];
    salvarLocalStorage("carrinho", idsProdutosCarrinhoComQuantidade);
    atualizarPrecoCarrinho();
    renderizarProdutosCarrinho();
  }

  // INCREMENTAR e DECREMENTAR QUANTIDADE DE PRODUTO


  function incrementarQuantidadeProduto(idProduto) {
    idsProdutosCarrinhoComQuantidade[idProduto]++;
    salvarLocalStorage("carrinho", idsProdutosCarrinhoComQuantidade);
    atualizarPrecoCarrinho();
    atualizarInformacaoQuantidade(idProduto);
  }  

  function decrementarQuantidadeProduto(idProduto) {
    if (idsProdutosCarrinhoComQuantidade[idProduto] === 1) {
      removerDoCarrinho(idProduto);
      return;
    }
    idsProdutosCarrinhoComQuantidade[idProduto]--;
    salvarLocalStorage("carrinho", idsProdutosCarrinhoComQuantidade);
    atualizarPrecoCarrinho();
    atualizarInformacaoQuantidade(idProduto);
  }


  function atualizarInformacaoQuantidade(idProduto) {
    document.getElementById(`quantidade-${idProduto}`).innerText = idsProdutosCarrinhoComQuantidade[idProduto];
  }

 //--------------------------------------------------

 function desenharProdutoNoCarrinho(idProduto) {

  const produto = catalogo.find((p) => p.id === idProduto);
  const containerProdutosCarrinho = document.getElementById('produtos-carrinho');

    // - Ajeitando elemento article para ajustar selecionador de quantidade da página E_COMMERCE.

    const elementoArticle = document.createElement('article'); //<article< </article>
    const articleClasses = [
    'flex',
    'bg-slate-300',
    'rounded-lg',
    'p-1',
    'relative',
  ];
  
  for (const articleClass of articleClasses) {
    elementoArticle.classList.add(articleClass);
  }

    const cartaoProdutoCarrinho = `<button id="remover-item-${produto.id}" class="absolute top-0 right-2"><i class="fa-sharp fa-regular fa-circle-xmark text-slate-500 hover:bg-slate-800"></i>
    </button>
    <img src="Imagens/${produto.imagem}" alt="Carrinho: ${produto.nome}" class="h-24 rounded-lg">
  <div>
    <div class="p-2 flex flex-col justify-between">

    <p class="text-slate-900 text-sm">${produto.nome}</p>
    </div>
    <p class="text-slate-600 text-xs">Cor: Branco</p>
    <p class="text-green-700 text-lg"> $ ${produto.preco}</p>
  </div>
  <div class='flex text-slate-950 items-end absolute bottom-0 right-2'>
      <button id='decrementar-produto-${produto.id}'>-</button>
      <p id = "quantidade-${produto.id}" class='ml-2'> ${idsProdutosCarrinhoComQuantidade[produto.id]}</p>
      <button class='ml-2' id='incrementar-produto-${produto.id}'>+</button>

  </div>`;

  elementoArticle.innerHTML = cartaoProdutoCarrinho;
  containerProdutosCarrinho.appendChild(elementoArticle);


  // -----------TEXTO DE INCREMENTO E DECREMENTO------------
  document.getElementById(`decrementar-produto-${produto.id}`).addEventListener('click', () => decrementarQuantidadeProduto(produto.id));

  document.getElementById(`incrementar-produto-${produto.id}`).addEventListener('click', () => incrementarQuantidadeProduto(produto.id));

  document.getElementById(`remover-item-${produto.id}`).addEventListener('click', () => removerDoCarrinho(produto.id));


}

export function renderizarProdutosCarrinho() {
  const containerProdutosCarrinho = document.getElementById('produtos-carrinho');
containerProdutosCarrinho.innerHTML = "";

  for (const idProduto in idsProdutosCarrinhoComQuantidade) {
    desenharProdutoNoCarrinho(idProduto);
  }

}

 export function adicionarAoCarrinho(idProduto) {
  if(idProduto in idsProdutosCarrinhoComQuantidade){
    incrementarQuantidadeProduto(idProduto);
    return;
  }
  idsProdutosCarrinhoComQuantidade[idProduto] = 1;
  salvarLocalStorage('carrinho', idsProdutosCarrinhoComQuantidade);
  desenharProdutoNoCarrinho(idProduto);
  atualizarPrecoCarrinho();
}


export function atualizarPrecoCarrinho() {
  const precoCarrinho = document.getElementById("preco-total");
  let precoTotalCarrinho = 0;
  for( const idProdutoNoCarrinho in idsProdutosCarrinhoComQuantidade) {
    precoTotalCarrinho += catalogo.find((p) => p.id === idProdutoNoCarrinho).preco * idsProdutosCarrinhoComQuantidade[idProdutoNoCarrinho];
  }
  precoCarrinho.innerText = `Total: $${precoTotalCarrinho}`;

}


