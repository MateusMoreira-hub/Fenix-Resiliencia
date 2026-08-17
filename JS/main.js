fundo = document.body
word1 = document.querySelector("#word1")
word2 = document.querySelector("#word2")
word3 = document.querySelector("#word3")
word4 = document.querySelector("#word4")
cond = [0,0,0,0]

  function atualizarContagem() {
  if (segundos > 0) {
    segundos--;
    setTimeout(atualizarContagem, 1000); 
  } else{
window.location.href = "/HTML/burnwords.html";
}
  }
  

function queimar1(){
word1.innerHTML = "<h2>Eu sou capaz</h2>";    
word1.style.color="yellow";
word1.style.animation = "txtflame 2s linear infinite";
word1.style.filter= "drop-shadow(0 0 10px rgba(255, 234, 0, 0.8))";
cond[0] = 1;
verautoestima();
}

function queimar2(){
word2.innerHTML = "<h2>Eu sou incrível</h2>";    
word2.style.color="yellow";
word2.style.animation = "txtflame 2s linear infinite";
word2.style.filter= "drop-shadow(0 0 10px rgba(255, 234, 0, 0.8))";
cond[1] = 1;
verautoestima();
}

function queimar3(){
word3.innerHTML = "<h2>Eu vou fazer agora</h2>";    
word3.style.color="yellow";
word3.style.animation = "txtflame 2s linear infinite";
word3.style.filter= "drop-shadow(0 0 10px rgba(255, 234, 0, 0.8))";
cond[2] = 1;
verautoestima();
}

function queimar4(){
word4.innerHTML = "<h2>Eu sou amável</h2>";    
word4.style.color="yellow";
word4.style.animation = "txtflame 2s linear infinite";
word4.style.filter= "drop-shadow(0 0 10px rgba(255, 234, 0, 0.8))";
cond[3] = 1;
verautoestima();
}

function verautoestima(){
autoestima = cond[0]+cond[1]+cond[2]+cond[3]
if (autoestima == 4){
hum = document.querySelector("#hum");
fenix = document.createElement("img");
fenix.className="fenix";
fenix.src="/IMAGE/Fenix.png";
hum.appendChild(fenix);
fundo.style.animation="renascimento 2s linear"
fenix.style.animation="voando 5s linear"
    setTimeout(proxpage, 3000)
}
}

function queimarword(){
    word = document.querySelector("#yourword");
}


function proxpage(){
window.location.href = "/HTML/yourword.html";
}