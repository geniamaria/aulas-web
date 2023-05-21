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

//exemplo de um metodo que soma dois numeros (usando funcao declarada)
function somarNumeros(nr1, nr2) {
    let soma = nr1 + nr2;

    return soma;
}

console.log(somarNumeros(10, 15));


//exemplo de um metodo que soma dois numeros (usando funcao anonima)
let somarNumeros = function (nr1, nr2) {
    let soma = nr1 + nr2;

    return soma;
}

console.log(somarNumeros(10, 15));


//exemplo de um metodo que soma dois numeros (usando funcao arrow functions)
let somarNumeros = (nr1, nr2) => {
    let soma = nr1 + nr2;

    return soma;
}

console.log(somarNumeros(10, 15));

//exemplo de um metodo que soma dois numeros (usando funcao arrow function simplificado)
let somarNumeros = (nr1, nr2) => nr1 + nr2;

console.log(somarNumeros(10, 15));



//m-pesa
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
}

//exercicio 1
let quant = Number( prompt("digite a quantidade das das idades desejadas "));
let idade,soma=0,media=0;
for(let i = 0; i <quant; i++) {
   idade= Number(prompt(i));
   soma += idade;
    
}
media=soma/quant
console.log(soma);
console.log(media);

//exercio 2
let nr1;
while(nr1>30 && nr1<90){
    if(nr1 %2==1){
        console.log(nr1);
    }

}
//exercio 3
let nr1;
while(nr1>30 && nr1<90){
    if(nr1 %2==0){
        console.log(nr1);
    }

}*/
//Em-pesa

/*
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

    if (opcaoEscolhida == 5) {
        break;
    }

    //encontrar a opcao escolhida
    switch (opcaoEscolhida) {
        case 1:
            let opcaoMegas = Number(
                prompt(`
                Saldo: ${saldo}
                Escolha a opcao: 
                1. 5MT-40 MB
                2. 10MT-80 MB
                3. 15MT-120 MB
                4. 20MT-160 MB
                0. voltar
                `)
            );
            if (opcaoMegas == 0) {
                break;
            }

            comprarMegas(opcaoMegas);
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

            if (opcaoJackpot == 0) {
                break;
            }

            comprarJackpot(opcaoJackpot);

            break;
        case 3:
            console.log(`O seu saldo e': ${saldo} MT. \nTudo bom na vodacom`);
            break;
        case 4:

        let opcaoTxuna = Number(
            prompt(`
            Saldo: ${saldo}
            Escolha a opcao: 
            1.Txuna credito de 50MT
            2. Txuna credito de 40MT
            3. Txuna credito de 30MT
            0. voltar
            `)
        );

        if (opcaoTxuna == 0) {
            break;
        }

        comprarTxuna(opcaoTxuna);

        break;
            
        default:
            console.log("Opcao invalida.");
            break;
    }
}
function comprarMegas(opcaoMegas) {

    switch (opcaoMegas) {
        case 1:
            if (saldo < 5) {
                alert("Saldo Insuficiente");
            } else {
                saldo = saldo - 5;
                alert(`Parabens! Acaba de comprar 8MT de megas. Saldo ${saldo}`);
            }
            break;
        case 2:
            if (saldo < 10) {
                alert("Saldo Insuficiente");
            } else {
                saldo = saldo - 10;
                alert(`Parabens! Acaba de comprar 12MT de megas. Saldo ${saldo}`);
            }
            break;
        case 3:
            if (saldo < 15) {
                alert("Saldo Insuficiente");
            } else {
                saldo = saldo - 15;
                alert(`Parabens! Acaba de comprar 30MT de megas. Saldo ${saldo}`);
            }
            break;
        case 4:
            if (saldo < 20) {
                alert("Saldo Insuficiente");
            } else {
                saldo = saldo - 20;
                alert(`Parabens! Acaba de comprar 80MT de megas. Saldo ${saldo}`);
            }
            break;
        default:
            alert("Opcao invalida. Tente de novo");
            break;
    }
}

    function comprarJackpot(opcaoJackpot) {

        switch (opcaoJackpot) {
            case 1:
                if (saldo < 2) {
                    alert("Saldo Insuficiente");
                } else {
                    saldo = saldo - 2;
                    alert(`Parabens! Acaba de comprar 8MT de Jackpot. Saldo ${saldo}`);
                }
                break;
            case 2:
                if (saldo < 4) {
                    alert("Saldo Insuficiente");
                } else {
                    saldo = saldo - 4;
                    alert(`Parabens! Acaba de comprar 12MT de Jackpot. Saldo ${saldo}`);
                }
                break;
            case 3:
                if (saldo < 10) {
                    alert("Saldo Insuficiente");
                } else {
                    saldo = saldo - 10;
                    alert(`Parabens! Acaba de comprar 30MT de Jackpot. Saldo ${saldo}`);
                }
                break;
            case 4:
                if (saldo < 20) {
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
    function comprarTxuna(opcaoTxuna){
        alert("parabens recebeste txuna credito")
    }
*/

