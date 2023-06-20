/*

MODIFICAR O TEXTO DE UM ELEMENTO USANDO getElementById('id')

let texto = document.getElementById('paragraph');
texto.innerHTML = "O mundo e' quadrado.";


ADICIONAR UM TEXTO A UM ELEMENTO USANDO getElementById

let code = document.getElementById('code');
code.innerHTML = "Hello world!";


ACEDER A UM TEXTO DE UM ELEMENTO USANDO getElementById

let texto = document.getElementById('paragraph');
console.log(texto.innerHTML);

ACEDER A TEXTOS DE ELEMENTOS USANDO getElementByClassName

Caso 1: Modoficado um elemento especifico
let arrayParagrafos = document.getElementsByClassName('web');
arrayParagrafos[1].innerHTML = "Texto Modificado";

caso 2: Modificando todos os elementos com o mesmo texto
let arrayParagrafos = document.getElementsByClassName('web');
for(let i = 0; i < arrayParagrafos.length; i++) {
    arrayParagrafos[i].innerHTML = "Texto Modificado";
}

caso 3: Modificando todos os elementos mas com textos diferentes em cada elemento
let arrayParagrafos = document.getElementsByClassName('web');
for(let i = 0; i < arrayParagrafos.length; i++) {
    if(i == 0) {
        arrayParagrafos[i].innerHTML = "HTML";
    }
    if(i == 1) {
        arrayParagrafos[i].innerHTML = "CSS";
    }
    if(i == 2) {
        arrayParagrafos[i].innerHTML = "JS";
    }
    
}

// CRIAR E ELIMINAR ELEMENTOS HTML

//criando elementos HTML
let h1 = document.createElement("h1");
let p = document.createElement("p");

//adicionar conteudos dentro dos elementos HTML
h1.innerHTML = "Meu Titulo";
p.innerHTML = "Meu paragrafo";

//colocar os elementos criados dentro de uma div com o id 'contaier-1'
document.getElementById('container-1').appendChild(h1);
document.getElementById('container-1').appendChild(p);

//remover o paragrafo dentro de uma div com o id 'contaier-2'
let paragrafoEliminado = document.getElementById('paragrafo');
document.getElementById('container-2').removeChild(paragrafoEliminado);
*/

//TPC: encontrar o bug
let p = document.createElement("p").innerHTML = "Eu sou o paragrafo que substituiu o titulo";
let titulo = document.getElementById('titulo');
document.getElementById('container-3').replaceChild(titulo, p);









