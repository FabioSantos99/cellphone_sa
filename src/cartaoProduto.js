import { adicionarAoCarrinho } from "./menuCarrinho";
import { catalogo} from "./utilidades";

export function renderizarCatalogo() {

    for (const produtoCatalogo of catalogo) {
        const cartaoProduto =  `<div class='border-solid w-48 m-2 flex flex-col p-2 justify-between shadow-xl shadow-slate-400 rounded-lg group ${produtoCatalogo.seguro ? 'com seguro incluido': 'sem seguro'}' id="card-produto-${produtoCatalogo.id}">
        <img 
        src="./Imagens/${produtoCatalogo.imagem}" alt="Produto1 do iphone8" class = 'group-hover:scale-110 duration-300 my-3 rouded-lg'>
        <p class='text-sm'>${produtoCatalogo.marca}</p>
        <p class='text-sm'>${produtoCatalogo.nome}</p>
        <p class='text-sm'>${produtoCatalogo.preco}</p>
        <button id='adicionar-${produtoCatalogo.id}' class='bg-black hover:bg-slate-700 text-slate-200'><i class="fa-solid fa-cart-plus fa-beat-fade" style="color: #ffffff;"></i></button>
        </div>`;
        
        document.getElementById("container-produto").innerHTML += cartaoProduto;
    }

    for (const produtoCatalogo of catalogo) {
        document.getElementById(`adicionar-${produtoCatalogo.id}`).addEventListener('click', () => adicionarAoCarrinho(produtoCatalogo.id));
    }

}
