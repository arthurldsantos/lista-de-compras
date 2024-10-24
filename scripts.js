const item = document.getElementById('input-item');
const botaoSalvarItem = document.getElementById('adicionar-botao');
const listaDeCompras = document.getElementById('lista-de-compras');

botaoSalvarItem.addEventListener('click', adicionarItem);

function adicionarItem(evento) {
    evento.preventDefault();
    
    const itemDaLista = document.createElement('li');
    const containerItemLista = document.createElement('div')
    containerItemLista.classList.add('item-lista-container');

    const containerNomeDoItem = document.createElement('div');
    const nomeDoItem = document.createElement('p');
    nomeDoItem.innerText = item.value;
    containerNomeDoItem.appendChild(nomeDoItem);

    const containerBotoes = document.createElement('div');
    const botaoRemover = document.createElement('button');
    botaoRemover.classList.add('botao-acao');

    const imagemRemover = document.createElement('img');
    imagemRemover.src = 'img/delete.svg';
    imagemRemover.alt = 'Deletar';

    botaoRemover.appendChild(imagemRemover);
    containerBotoes.appendChild(botaoRemover);

    /* Botão de edição */

    const botaoEditar = document.createElement('button');
    botaoEditar.classList.add('botao-acao');

    const imagemEditar = document.createElement('img');
    imagemEditar.src = 'img/edit.svg';
    imagemEditar.alt = 'Editar';

    botaoEditar.appendChild(imagemEditar);
    containerBotoes.appendChild(botaoEditar);

    /* Botão de edição */

    containerItemLista.appendChild(containerNomeDoItem);
    containerItemLista.appendChild(containerBotoes);

    itemDaLista.appendChild(containerItemLista);

    listaDeCompras.appendChild(itemDaLista);
}

