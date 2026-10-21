/*Processamento/Armazenamento*/
let hoje = new Date();
/*Entradas*/
const cadastro = document.getElementById("cadastro");
const nome = cadastro.nome;
const nasc = cadastro.nasc;
/*Saidas*/
const saudacao = document.getElementById("saudacao");
const aniversario = document.getElementById("aniversario");

/*Passo a passo*/
cadastro.addEventListener("submit", function(e){
    e.preventDefault();
    let data_nasc = new Date(nasc.value);
    let data_aniv = new Date(2026, nasc.value.getMonth(), nasc.value.getDate());
    let data_formatada = `${hoje.getDate()}/${hoje.getMonth()}/${hoje.getFullYear}`;
    saudacao.innerHTML = `Olá, ${nome.value}! Hoje é ${data_formatada}`;
    aniversario.innerHTML = `Diferenca de hoje para aniv ${hoje - data_aniv}`;
    cadastro.reset();
});