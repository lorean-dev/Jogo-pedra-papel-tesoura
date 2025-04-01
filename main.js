//variaveis
var pedra = document.getElementById("pedra");
var tesoura = document.getElementById("tesoura");
var papel = document.getElementById("papel");

var scorePlayer = document.getElementById("scorePlayer");
var scoreComput = document.getElementById("scoreComput");
var scoreEmpate = document.getElementById("scoreEmpate");

var imgComput =document.getElementById("imgComput");
var imgPlayer = document.getElementById("imgPlayer");

var titulo = document.getElementById("titulo");
//fim das variaveis


//eventosbao clicar
pedra.onclick =  async function(){
 
 
 controles(pedra);
 
 var escolhacomput = Math.floor(Math.random()*3);
 
 controlesComput(escolhacomput);
 
 comparar(pedra,escolhacomput);
 
};

tesoura.onclick = function(){
 controles(tesoura);
 
 var escolhacomput1 = Math.floor(Math.random()*3);
 
 controlesComput(escolhacomput1);
  
 comparar(tesoura,escolhacomput1);
};

papel.onclick = function(){
 controles(papel);
 
 var escolhacomput2 = Math.floor(Math.random()*3);
 
 controlesComput(escolhacomput2);
 
 comparar(papel,escolhacomput2);
 
};
//fim doa eventos ao clicar

//randomizar Math.floor(Math.random()*3))



