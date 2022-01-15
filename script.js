const botao = document.querySelector('button');
}

gerarValorAleatorio =() => {
    return Math.floor(Math.random() * 671);
}

pegarPersonagem = () => {
    for(i = 1; i <=3; i++){
        
        const personagem = document.querySelector('#personagem-'+i);
        const imagem = personagem.querySelector('img');
        const nomeDoPersonagem = personagem.querySelector('#nome');
        const especie = personagem.querySelector("#especie");
        const condicao = personagem.querySelector("#status");
