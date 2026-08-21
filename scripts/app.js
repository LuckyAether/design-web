var nasc = 2008;
let nome = "Francisco";
const viva = true;

function calcIdade(ano=2026){
    let idade = ano - nasc;
    alert(`Dentro de Função - Idade ${idade}`);
    return idade;
}

calcIdade()
/*
alert(`Fora da funcao : Idade ${idade}`); 
Erro pois a variavel let nao existe fora do escopo dela
*/
alert(`Fora da funcao : chamado calcIdade ${calcIdade(2027)}`);