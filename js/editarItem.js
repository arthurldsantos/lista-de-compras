import { obterDataAtual } from "./obterDataAtual.js";

export const editarItem = (elemento) => {
    let novoItem = prompt('Digite o novo nome do item:');

    if (novoItem !== null && novoItem.trim() !== '') {
        const itemTextoAtualizado = elemento.querySelector('#item-titulo');
        itemTextoAtualizado.textContent = novoItem;

        const estavaComprado = elemento.querySelector('.checkbox-input').checked;

        if (estavaComprado) {
            elemento.querySelector('.checkbox-input').checked = true;
            elemento.querySelector('.checkbox-customizado').classList.add('checked');
            itemTextoAtualizado.style.textDecoration = 'line-through';
        }

        const dataDeCriacao = elemento.querySelector('.item-lista-texto');
        dataDeCriacao.textContent = obterDataAtual();
    }
}