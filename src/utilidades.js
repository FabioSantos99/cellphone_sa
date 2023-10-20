export const catalogo = [
    {
    id: "1",
    nome: "Iphone 8",
    marca: "Apple",
    preco: 600,
    imagem: "apple-phone8.png",
    seguro: false
},
{
    id: '2',
    nome: "Apple14",
    marca: "Apple",
    preco: 1200,
    imagem: "Apple14.png",
    seguro: false
},
{
    id: '3',
    nome: "GalaxyA10",
    marca: "Samsung",
    preco: 450,
    imagem: "galaxyA10.png",
    seguro: true
},
{
    id: '4',
    nome: "GalaxyA23",
    marca: "Samsung",
    preco: 760,
    imagem: "galaxyA23.png",
    seguro: true

},
{
    id: '5',
    nome: "Iphone SE",
    marca: "Apple",
    preco: 1100,
    imagem: "iphoneSE.png",
    seguro: false
},
{
    id: '6',
    nome: "Moto Edge",
    marca: "Motorola",
    preco: 535,
    imagem: "MotoEdge.png",
    seguro: true

},
{
    id: '7',
    nome: "MotoG",
    marca: "Motorola",
    preco: 1000,
    imagem: "MotoG.png",
    seguro: false

},
{
    id: '8',
    nome: "MotoNeo",
    marca: "Motorola",
    preco: 1000,
    imagem: "MotoNeo.png",
    seguro: false
},

];

export function salvarLocalStorage(chave, informacao) {

    localStorage.setItem(chave, JSON.stringify(informacao));
}

export function lerLocalStorage(chave) {

    return JSON.parse(localStorage.getItem(chave));
}

export function apagarDoLocalStorage(chave) {
    localStorage.removeItem(chave);
}

export function desenharProdutoCarrinhoSimples(idProduto, idContainerHtml, quantidadeProduto) {

    const produto = catalogo.find((p) => p.id === idProduto);
    const containerProdutosCarrinho = document.getElementById(idContainerHtml);
  
      // - Ajeitando elemento article para ajustar selecionador de quantidade da página E_COMMERCE.
  
      const elementoArticle = document.createElement('article'); //<article< </article>
      const articleClasses = [
      'flex',
      'bg-stone-200',
      'rounded-lg',
      'p-1',
      'relative',
      'mb-2',
      'w-96'
    ];
    
    for (const articleClass of articleClasses) {
      elementoArticle.classList.add(articleClass);
    }
  
      const cartaoProdutoCarrinho = `
      <img src="Imagens/${produto.imagem}" alt="Carrinho: ${produto.nome}" class="h-24 rounded-lg">
    <div>
      <div class="p-2 flex flex-col justify-between">
  
      <p class="text-slate-900 text-sm">${produto.nome}</p>
      </div>
      <p class="text-slate-600 text-xs">Cor: Branco</p>
      <p class="text-green-700 text-lg"> $ ${produto.preco}</p>
    </div>
    <div class='flex text-slate-950 items-end absolute bottom-0 right-2'>
        
        <p id = "quantidade-${produto.id}" class='ml-2'> ${quantidadeProduto}</p>
  
    </div>`;
  
    elementoArticle.innerHTML = cartaoProdutoCarrinho;
    containerProdutosCarrinho.appendChild(elementoArticle);
  
  }