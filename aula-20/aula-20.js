/*
==== MUDAR ATRIBUTOS DE UM ELEMENTO HTML ===

let a = document.getElementById("link");

a.href = "https://www.google.com";
a.target = "_self";


==== MUDAR ESTILOS DE UM ELEMENTO HTML ===

//elemento.style.propriedade = novoEstilo

let div = document.getElementById("div-style");

div.style.color = "black";
div.style.backgroundColor = "gray";
div.style.width = "200px";
div.style.paddingLeft = "50px";
div.style.margin = "100px";

==== OBTER VALORES DE INPUTS ===

let nome = document.getElementById("nome-1").value;

document.getElementById("frase-1").innerHTML = `Ola, ${nome}`;

===== EVENTOS ===

--- onload ---

window.onload = function() {
    console.log('Ola, Maria!')
}


*/

//elemento.onclick = function(){ evento }

/*
*/

function cumprimentar() {
    let nome = document.getElementById("nome-2").value;
    document.getElementById("frase-2").innerHTML = `Ola, ${nome}`;
    document.getElementById("botao-2").style.display = 'none';
}

//exemplo do evento onchange

let nome = document.getElementById("nome-3");

nome.onchange = function() {
    document.getElementById("frase-3").innerHTML = `ola, ${nome.value}`; 
}

//exemplo do evento onmouseover e onmouseout

let caixa = document.getElementById("mouseover");

caixa.onmouseover = function() {
    caixa.style.backgroundColor = "azure";
    caixa.style.color = "red";
    caixa.innerHTML = "Ola, Maria. ❤️";
}

caixa.onmouseout = function() {
    caixa.style.backgroundColor = "black";
    caixa.style.color = "white";
    caixa.innerHTML = "Passe o mouse em mim.";
}




