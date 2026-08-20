alert("Olá mundo!");

var nasc = 2008;
let nome = "Francisco";
const viva = true;
let altura = 1.76;

if (viva){
   let saudacao = "Olá "+ nome +"!";
   let msg = `Altura ${altura}m | Idade ${2026-nasc}`;
   alert(saudacao+"\n"+msg);
}else{
    alert("R.I.P");
}