/*
    O que precisamos fazer? - Quando o usuário clicar no botão "Aplicar filtros", vamos filtrar as cartas baseado na categoria e no preço máximo selecionados
    OBJETIVO 1 - Criar a funcionalidade de filtrar as cartas
        passo 1 - pegar o botao de aplicar filtros  do HTML e mandar pro JS
        passo 2 - escutar o clique no botão de aplicar filtros
        passo 3 - pegar os valores dos campos de categoria e preço
        passo 4 - para cada carta, verificar se ela deve ser mostrada ou escondida, baseado nos filtros que a pessoa digitou
*/

// passo 1 - pegar o botao de aplicar filtros  do HTML e mandar pro JS
const botaoFiltrar = document.querySelector('.btn-filtrar');

// passo 2 - escutar o clique no botão de aplicar filtros
botaoFiltrar.addEventListener('click', function () {
    // passo 3 - pegar os valores dos campos de categoria e preço
    const categoriaSelecionada = document.querySelector('#categoria').value;
    const precoMaximoSelecionado = document.querySelector('#preco').value;
    // passo 4 - para cada carta, verificar se ela deve ser mostrada ou escondida, baseado nos filtros que a pessoa digitou
    const cartas = document.querySelectorAll(".carta")

    cartas.forEach(function (carta) {
        const categoriaCarta = carta.dataset.categoria;
        const precoCarta = carta.dataset.preco;

        let mostrarCarta = true;

        console.log('categoriaSelecionada:', categoriaSelecionada);

        const cartaNaoBateComFiltroDeCategoria =
        categoriaSelecionada.toLowerCase() !== 
        categoriaCarta.toLowerCase();

        if(categoriaSelecionada != '' && 
        cartaNaoBateComFiltroDeCategoria) {
            mostrarCarta = false;
        }

        const temFiltroDePreco = precoMaximoSelecionado !== '';
        const cartaNaoBateComFiltroDePrecoMaximo = 
        parseFloat(precoCarta) > parseFloat(precoMaximoSelecionado);

        if(precoMaximoSelecionado !== '' && cartaNaoBateComFiltroDePrecoMaximo) {
            mostrarCarta = false;
        }

        if (mostrarCarta) {
            carta.classList.add('mostrar');
            carta.classList.remove('esconder');
        } else {
            carta.classList.remove('mostrar');
            carta.classList.add('esconder');
        }
    });
});

// Adiciona o listener para o Enter no campo de preço apenas uma vez
const precoInput = document.querySelector('#preco');
const btnFiltrar = document.querySelector('.btn-filtrar');

precoInput.addEventListener('keydown', function (event) {
    // Se a tecla pressionada for "Enter"
    if (event.key === 'Enter') {
        btnFiltrar.click();
    }
});
