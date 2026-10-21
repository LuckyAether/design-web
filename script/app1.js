/*Processamento/Armazenamento*/
let hoje = new Date();
/*Entradas*/
const cadastro = document.getElementById("cadastro");
const nome = cadastro.nome;
/*saidas*/
const saudacao = document.getElementById("saudacao");

/*Passo a passo*/
cadastro.addEventListener("submit", function(e){
    e.preventDefault();
    let data_formatada = `${hoje.getDay()}/${hoje.getMonth()}/${hoje.getFullYear}`;
    saudacao.innerHTML = `Olá, ${nome.value}! Hoje é ${data_formatada}`;
    cadastro.reset();
});