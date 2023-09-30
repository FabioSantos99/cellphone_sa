(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function a(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=a(t);fetch(t.href,n)}})();const d=[{id:"1",nome:"Iphone 8",marca:"Apple",preco:600,imagem:"apple-phone8.png",seguro:!1},{id:"2",nome:"Apple14",marca:"Apple",preco:1200,imagem:"Apple14.png",seguro:!1},{id:"3",nome:"GalaxyA10",marca:"Samsung",preco:450,imagem:"galaxyA10.png",seguro:!0},{id:"4",nome:"GalaxyA23",marca:"Samsung",preco:760,imagem:"galaxyA23.png",seguro:!0},{id:"5",nome:"Iphone SE",marca:"Apple",preco:1100,imagem:"iphoneSE.png",seguro:!1},{id:"6",nome:"Moto Edge",marca:"Motorola",preco:535,imagem:"MotoEdge.png",seguro:!0},{id:"7",nome:"MotoG",marca:"Motorola",preco:1e3,imagem:"MotoG.png",seguro:!1},{id:"8",nome:"MotoNeo",marca:"Motorola",preco:1e3,imagem:"MotoNeo.png",seguro:!1}];function l(e,o){localStorage.setItem(e,JSON.stringify(o))}function E(e){return JSON.parse(localStorage.getItem(e))}const r=E("carrinho")??{};function x(){document.getElementById("carrinho").classList.add("right-[0px]"),document.getElementById("carrinho").classList.remove("right-[-360px]")}function b(){document.getElementById("carrinho").classList.remove("right-[0px]"),document.getElementById("carrinho").classList.add("right-[-360px]")}function C(){Object.keys(r).length!==0&&(window.location.href=window.location.origin+"/checkout.html")}function v(){const e=document.getElementById("fechar-carrinho"),o=document.getElementById("abrir-carrinho"),a=document.getElementById("finalizar-compra");e.addEventListener("click",b),o.addEventListener("click",x),a.addEventListener("click",C)}function g(e){delete r[e],l("carrinho",r),s(),y()}function p(e){r[e]++,l("carrinho",r),s(),f(e)}function I(e){if(r[e]===1){g(e);return}r[e]--,l("carrinho",r),s(),f(e)}function f(e){document.getElementById(`quantidade-${e}`).innerText=r[e]}function h(e){const o=d.find(c=>c.id===e),a=document.getElementById("produtos-carrinho"),i=document.createElement("article"),t=["flex","bg-slate-300","rounded-lg","p-1","relative"];for(const c of t)i.classList.add(c);const n=`<button id="remover-item-${o.id}" class="absolute top-0 right-2"><i class="fa-sharp fa-regular fa-circle-xmark text-slate-500 hover:bg-slate-800"></i>
    </button>
    <img src="Imagens/${o.imagem}" alt="Carrinho: ${o.nome}" class="h-24 rounded-lg">
  <div>
    <div class="p-2 flex flex-col justify-between">

    <p class="text-slate-900 text-sm">${o.nome}</p>
    </div>
    <p class="text-slate-600 text-xs">Cor: Branco</p>
    <p class="text-green-700 text-lg"> $ ${o.preco}</p>
  </div>
  <div class='flex text-slate-950 items-end absolute bottom-0 right-2'>
      <button id='decrementar-produto-${o.id}'>-</button>
      <p id = "quantidade-${o.id}" class='ml-2'> ${r[o.id]}</p>
      <button class='ml-2' id='incrementar-produto-${o.id}'>+</button>

  </div>`;i.innerHTML=n,a.appendChild(i),document.getElementById(`decrementar-produto-${o.id}`).addEventListener("click",()=>I(o.id)),document.getElementById(`incrementar-produto-${o.id}`).addEventListener("click",()=>p(o.id)),document.getElementById(`remover-item-${o.id}`).addEventListener("click",()=>g(o.id))}function y(){const e=document.getElementById("produtos-carrinho");e.innerHTML="";for(const o in r)h(o)}function L(e){if(e in r){p(e);return}r[e]=1,l("carrinho",r),h(e),s()}function s(){const e=document.getElementById("preco-total");let o=0;for(const a in r)o+=d.find(i=>i.id===a).preco*r[a];e.innerText=`Total: $${o}`}function B(){for(const e of d){const o=`<div class='border-solid w-48 m-2 flex flex-col p-2 justify-between shadow-xl shadow-slate-400 rounded-lg group ${e.seguro?"com seguro incluido":"sem seguro"}' id="card-produto-${e.id}">
        <img 
        src="./Imagens/${e.imagem}" alt="Produto1 do iphone8" class = 'group-hover:scale-110 duration-300 my-3 rouded-lg'>
        <p class='text-sm'>${e.marca}</p>
        <p class='text-sm'>${e.nome}</p>
        <p class='text-sm'>${e.preco}</p>
        <button id='adicionar-${e.id}' class='bg-black hover:bg-slate-700 text-slate-200'><i class="fa-solid fa-cart-plus fa-beat-fade" style="color: #ffffff;"></i></button>
        </div>`;document.getElementById("container-produto").innerHTML+=o}for(const e of d)document.getElementById(`adicionar-${e.id}`).addEventListener("click",()=>L(e.id))}const m=document.getElementById("container-produto");function u(){const e=Array.from(m.getElementsByClassName("hidden"));for(const o of e)o.classList.remove("hidden")}function $(){u();const e=Array.from(m.getElementsByClassName("sem"));for(const o of e)o.classList.add("hidden")}function S(){u();const e=Array.from(m.getElementsByClassName("com"));for(const o of e)o.classList.add("hidden")}function A(){document.getElementById("exibir-todos").addEventListener("click",u),document.getElementById("exibir-sem").addEventListener("click",S),document.getElementById("exibir-com").addEventListener("click",$)}B();v();y();s();A();
