const botoes = document.querySelectorAll('button')
const containers = document.querySelectorAll('.containers')

botoes.forEach((botoes, indice) => {
    botoes.addEventListener("click", () => {

        const botaoSelecionado = document.querySelector('button.ativo')
        botaoSelecionado.classList.remove('ativo');
        botoes.classList.add('ativo')

        const containerSelecionado = document.querySelector('.containers.ativo')
        containerSelecionado.classList.remove('ativo')
        containers[indice].classList.add('ativo')
    })
});

