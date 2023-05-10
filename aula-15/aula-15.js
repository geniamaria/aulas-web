/*
1. Operacoes logicas

// Maior que (>)
let a = 5;
let b = 10;
console.log(a > b);

let a = 2;
let b = 1;
console.log((a * b) >= (a ** b)); // (a * b) = 2 e (a ** b) = 2, => 2 >=2 //True

let idade = 14;
if(idade >= 18) {
console.log("Ja pode tirar carta de conducao");
} else {
console.log(`Ainda nao tem idade suficiente para tirar carta de conducao. Aguarde mais ${18 - idade} anos.`);
}


//EXEMPLO M-PESA
//obter o opcao a partir da caixa de dialogo
let saldo = 109.30;
let opcao = prompt(`
Escolha a opcao: 
1. Comprar Megas 
2. Comprar Jackpot 
3. Consultar Sado 
4. Fazer Txuna Credito`);


//EXEMPLO DA ESTRUTURA SWITCH
//converter a opcao para number
let opcaoEscolhida = Number(opcao);

//encontrar a opcao escolhida
switch (opcaoEscolhida) {
    case 1:
        console.log("Parabens! Acaba de comprar Megas. Agora ja pode navegar sem limites. \nTubo bom na vodacom!");
        break;
    case 2:
        console.log("Parabens! Acaba de comprar Jackpot. Agora ja pode falar sem parar. \nTubo bom na vodacom!");
        break;
    case 3:
        console.log(`O seu saldo e': ${saldo} MT. \nTudo bom na vodacom`);
        break;
    case 4:
        console.log("Parabens! Acaba de fazer txuna credito. \nTubo bom na vodacom");
        break;
    default:
        console.log("Opcao invalida.");
        break;
}


EXERCICIO 3

let x1, x2;

let a = Number(prompt("introduza o valor de a"));
let b = Number(prompt("introduza o valor de b"));
let c = Number(prompt("introduza o valor de c"));

let delta = b ** 2 - 4 * a * c;

if (delta < 0) {
    console.log("Nao existe raiz quadrada de numero negativo");
   
}else if(delta == 0){
    x1 = [-b + Math.sqrt(delta)] / 2 * a;
    x2 = [-b - Math.sqrt(delta)] / 2 * a;
    console.log("Delta=0 entao temos raizes iguais");
    console.log( x1, x2);
}else{
    console.log(delta);
    x1 = [-b + Math.sqrt(delta)] / 2 * a;
    x2 = [-b - Math.sqrt(delta)] / 2 * a;
    console.log(x1, x2);
    
}

EXERCICIO 4

let h = Number(prompt("introduza a hora"));

if(h<12){
    console.log("bom dia");
} else if(h>18){
    console.log("boa noite");
}else{
    console.log("boa tarde");
}

*/



