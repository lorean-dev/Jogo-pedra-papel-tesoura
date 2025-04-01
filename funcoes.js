//selecionar

 function controles(botao) {
 
 imgPlayer.style.opacity = 0;
 
  setTimeout (()=>{
 switch(botao){
 case pedra :
  imgPlayer.style.transition="opacity 4s ease-in-out";
 imgPlayer.src = "pedra.png";
 imgPlayer.style.opacity = 1;
 break;
 
 case tesoura:
  imgPlayer.style.transition="opacity 4s ease-in-out";
  imgPlayer.src = "tesoura.png";
  imgPlayer.style.opacity = 1;
  break;
  
  case papel:
   imgPlayer.style.transition="opacity 4s ease-in-out";
   imgPlayer.src = "papel.png";
   imgPlayer.style.opacity = 1;
   break;
 default:
 };//switch
},2000);//settimeout


};


//aleatorio do comoutador
function controlesComput(botao) {


imgComput.style.opacity = 0;

setTimeout(
function(){
 switch (botao) {
  case 0:
   imgComput.style.transition="opacity 4s ease-in-out"
  imgComput.src = "pedra.png";
  imgComput.style.opacity = 1;
  
   break;
  case 1:
   imgComput.style.transition="opacity 4s ease-in-out"
   imgComput.src = "tesoura.png";
   imgComput.style.opacity = 1;
   break;
  case 2:
   imgComput.style.transition="opacity 4s ease-in-out"
   imgComput.src = "papel.png";
   imgComput.style.opacity = 1;
   break;
  default:
 };//switch
 
},//funcao anonima
2000);//settimeout


 
};

//funcao comparar

//variavei do placar
var numero_vencedor =1;
var numero_empate = 1;
var numero_perdedor =1;


function comparar (player,computer){
 titulo.style.opacity= 0;
 
 setTimeout(()=>{
//usuario escolhendo pedra
 if(player == pedra && computer == 1){
  
  titulo.style.transition="opacity 4s ease-in-out";
  
 titulo.textContent = "parabes voce venceu";
 
 titulo.style.opacity= 1;
 
 scorePlayer.textContent = `${numero_vencedor++}`;
    
 }
 
 
 else if (player == pedra && computer == 0){
  titulo.style.transition="opacity 4s ease-in-out";
  
  titulo.textContent = "empate";
  
  titulo.style.opacity= 1;
  
  scoreEmpate.textContent = `${numero_empate++}`;
 }
 
 
 else if(player == pedra && computer == 2){
  titulo.style.transition="opacity 4s ease-in-out";
  
  titulo.textContent = "voce perdeu";
  
  titulo.style.opacity= 1;
  
  scoreComput.textContent = `${numero_perdedor++}`;
 }
 //fim do usario escolhendo pedra
 
 //usuario escolhendo tesoura
 else if(player == tesoura && computer == 0){
  titulo.style.transition="opacity 4s ease-in-out";
  titulo.textContent = "voce perdeu";
  titulo.style.opacity= 1;
  
  scoreComput.textContent = `${numero_perdedor++}`;
 }
 
 
 else if (player == tesoura && computer == 1) {
titulo.style.transition="opacity 4s ease-in-out";
 titulo.textContent = "empate";
 titulo.style.opacity= 1;
  
  scoreEmpate.textContent = `${numero_empate++}`;
 }
 
 else if (player == tesoura && computer == 2) {
titulo.style.transition="opacity 4s ease-in-out";
 titulo.textContent = "parabes voce venceu";
 titulo.style.opacity= 1;
 scorePlayer.textContent = `${numero_vencedor++}`;
    
 }
 
 //usuario escolhendo papel
 else if (player == papel && computer == 0) {
titulo.style.transition="opacity 4s ease-in-out";
 titulo.textContent = "parabes voce venceu";
titulo.style.opacity= 1;
scorePlayer.textContent = `${numero_vencedor++}`;
    
 }
 
 
 else if (player == papel && computer == 1) {
titulo.style.transition="opacity 4s ease-in-out";
 titulo.textContent = "voce perdeu";
titulo.style.opacity= 1;
scoreComput.textContent = `${numero_perdedor++}`;

 }
 
 else if (player == papel && computer == 2) {
titulo.style.transition="opacity 4s ease-in-out";
 titulo.textContent = "empate";
titulo.style.opacity= 1;
scoreEmpate.textContent = `${numero_empate++}`;
    
 }
 
},2000 );

};

