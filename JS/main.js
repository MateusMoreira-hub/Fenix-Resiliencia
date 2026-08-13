fundo = document.body
word1 = document.querySelector("#word1")
word2 = document.querySelector("#word2")
word3 = document.querySelector("#word3")
word4 = document.querySelector("#word4")
cond = [0,0,0,0]

function queimar1(){
word1.innerHTML = "<h1>Eu sou capaz</h1>";    
word1.style.color="yellow";
word1.style.animation = "txtflame 2s linear infinite";
word1.style.filter= "drop-shadow(0 0 10px rgba(255, 234, 0, 0.8))";
cond[0] = 1;
verautoestima();
}

function queimar2(){
word2.innerHTML = "<h1>Eu sou incrível</h1>";    
word2.style.color="yellow";
word2.style.animation = "txtflame 2s linear infinite";
word2.style.filter= "drop-shadow(0 0 10px rgba(255, 234, 0, 0.8))";
cond[1] = 1;
verautoestima();
}

function queimar3(){
word3.innerHTML = "<h1>Eu vou fazer agora</h1>";    
word3.style.color="yellow";
word3.style.animation = "txtflame 2s linear infinite";
word3.style.filter= "drop-shadow(0 0 10px rgba(255, 234, 0, 0.8))";
cond[2] = 1;
verautoestima();
}

function queimar4(){
word4.innerHTML = "<h1>Eu sou amável</h1>";    
word4.style.color="yellow";
word4.style.animation = "txtflame 2s linear infinite";
word4.style.filter= "drop-shadow(0 0 10px rgba(255, 234, 0, 0.8))";
cond[3] = 1;
verautoestima();
}

function verautoestima(){
autoestima = cond[0]+cond[1]+cond[2]+cond[3]
if (autoestima == 4){
    setTimeout(proxpage, 500)
}
}

function proxpage(){
window.location.href = "/HTML/renascendo.html"
}