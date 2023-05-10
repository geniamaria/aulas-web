/*
ATALHOS NO VS CODE

ctrl + d => Selecionar ocorrencias (um por um);
ctrl + shift + l => Selecionar todas as ocorrencias
*/


/*
//CODIGOS QUE IMPRIMEM A FRASE "BOM DIA" 10 VEZES

//usando o for
for(let i = 0; i < 10; i++) { 
    console.log("Bom dia"); 
}

//usando o while
let i = 0;
while(i < 10) { 
    console.log("Bom dia");
    i++;
}

//usando o do-while
let i = 0;
do {
    console.log("Boa tarde");
    i++;
} while (i < 10);

//exemplo de um metodo que soma dois numeros
function somarNumeros(nr1, nr2) {
    let soma = nr1 + nr2;

    return soma;
}

let resultadoSoma = somarNumeros(10, 15);
console.log(resultadoSoma);

*/


let opcaoEscolhida;
let saldo = 109.30;
while (true) {
    let opcao = prompt(`
    Saldo: ${saldo}
    Escolha a opcao: 
    1. Comprar Megas 
    2. Comprar Jackpot 
    3. Consultar Sado 
    4. Fazer Txuna Credito
    5. Sair
    `);

    //converter a opcao para number
    opcaoEscolhida = Number(opcao);

    if(opcaoEscolhida == 5) {
        break;
    }

    //encontrar a opcao escolhida
    switch (opcaoEscolhida) {
        case 1:
            console.log("Parabens! Acaba de comprar Internet. Agora ja pode navegar sem parar. \nTubo bom na vodacom!");
            break;
        case 2:
            let opcaoJackpot = Number(
                prompt(`
                Saldo: ${saldo}
                Escolha a opcao: 
                1. 2MT - 8MT Jackpot
                2. 4MT - 12MT Jackpot
                3. 10MT - 30MT Jackpot
                4. 20MT - 80MT Jackpot
                0. voltar
                `)
            );
            
            if(opcaoJackpot == 0) {
                break;
            }

            comprarJackpot(opcaoJackpot);
            
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
}

function comprarJackpot(opcaoJackpot) {

    switch (opcaoJackpot) {
        case 1:
            if(saldo < 2)  {
                alert("Saldo Insuficiente");
            } else {
                saldo = saldo - 2;
                alert(`Parabens! Acaba de comprar 8MT de Jackpot. Saldo ${saldo}`);
            }
            break;
        case 2:
            if(saldo < 4)  {
                alert("Saldo Insuficiente");
            } else {
                saldo = saldo - 4;
                alert(`Parabens! Acaba de comprar 12MT de Jackpot. Saldo ${saldo}`);
            }
            break;
        case 3:
            if(saldo < 10)  {
                alert("Saldo Insuficiente");
            } else {
                saldo = saldo - 10;
                alert(`Parabens! Acaba de comprar 30MT de Jackpot. Saldo ${saldo}`);
            }
            break;
        case 4:
            if(saldo < 20)  {
                alert("Saldo Insuficiente");
            } else {
                saldo = saldo - 20;
                alert(`Parabens! Acaba de comprar 80MT de Jackpot. Saldo ${saldo}`);
            }
            break;
        default:
            alert("Opcao invalida. Tente de novo");
            break;
    }
}