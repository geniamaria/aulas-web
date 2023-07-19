<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aula 25</title>
    <style>
        body {
            padding-bottom: 100px;
        }
        .exercicios {
            background-color: rgba(0, 0, 255, 0.4);
            border: solid 1px blue;
            margin: 10px 2px;
        }

        .exercicios p,
        .exercicios code {
            font-weight: bold;
        }

        .example {
            width: fit-content;
            padding: 10px 20px;
            margin: 5px;
            background-color: lightgray;
        }

        .notes {
            width: fit-content;
            padding: 10px 20px;
            margin: 5px;
            background-color: burlywood;
        }
    </style>
</head>
<body>
    <!--
        1. Sintaxe
        2. Impressao de textos
        3. Variaveis
        4. Expressoes
        5. Variaveis dentro de textos e escape
        6. Arrays
            - Arrays associativos
            - Ordenacao de arrays
            - Loops em arrays
        7. Estruturas de decisao
        8. Estruturas de repeticao
        9. Funcoes
        10. Enviar e receber dados de formularios *
    -->

    <h1>Bases do PHP</h1>

    <p>
        PHP e' uma linguagem de scrip do lado de servidor (server-side). Isto e, o PHP nao e' processado 
        pelo lado cliente (browser). O PHP e' processado no servidor e apenas o resultado
        desse processamento e' mandado para o lado cliente (client-side).
    </p>

    <h2>Sintaxe do PHP</h2>

    <p>
        O condigo PHP deve estar entre os comandos <b>&#60;?php</b> e <b>?&#62;</b> e todas as instrucoes 
        PHP devem terminar com ponto e virgula (;).
    </p>

    <div class="example">
        <p><b>Exemplo:</b></p>
        <code>
            <b>&#60;?php</b><br>
                echo "Ola, Mundo!";<br>
            <b>?&#62;</b><br><br>
        </code>

        <p><b>Resultado</b>: Ola, Mundo!</p>
    </div>


    <h2>Impressao de Texto</h2>

    <p>
        Para imprimir textos em PHP usamos o compando <code>echo</code>. O exemplo acima mostra
        o uso do comando <code>echo</code> para imprimir o texto "Ola, Mundo!".
    </p>

    <h2>Variaveis</h2>
    <p>
        As variaveis em PHP devem sempre iniciar com o simbolo <code><b>$</b></code> seguido de uma
        lentra ou underscore (_).
    </p>
    
    <div class="example">
        <p><b>Exemplo:</b></p>
        <code>
            $ano // correcto <br>
            $_ano2 //correco <br>
            $3ano // incorrecto <br>
        </code>
    </div>
    <div class="notes">
        Em PHP nao precisamos de instrucpes como "const", "let", "int" para declarar as variaveis.
    </div>

    <h2>Expressoes</h2>
    <p>
        As expressoes em PHP sao basicamente as mesmas que as do JavaScript.
    </p>
    <ul>
        <li>Adicao (+)</li>
        <li>Subtracao (-)</li>
        <li>Multiplicacao (*)</li>
        <li>Divisao (/)</li>
        <li>Modulo (%)</li>
        <li>Potencia (**)</li>
        <li>Incremento (++)</li>
        <li>Decremento (--)</li>
        <li>OR (||)</li>
        <li>AND (&&)</li>
    </ul>

    <div class="exercicios">
        <h2>Exercicio 1:</h2>
        <p>
            Escreva um programa em PHP que calcule e imprima o IMC.
        </p>
    </div>

    <h2>Variaveis dentro de textos</h2>
    <p>
        Para colocar variaveis dentro de um texto, basta inserir o nome da veriavei no texto.
    </p>
    <div class="example">
        <p><b>Exemplo:</b></p>
        <code>
            $idade = 12; <br>
            echo "O Joao tem $idade anos de idade"; <br><br>
            
            <p><b>Resultado</b>:O Joaqo tem 12 anos de idade</p>
        </code>
    </div>
    <div class="notes">
        <p>O metodo acima so funciona do caso em que o texto esta inserido dentro de aspas duplas</p>;
        <p>Se quisermos inserir variaveis em textos contidos em aspas simples, devemos usar a concatenacao.</p>
    </div>

    <h3>concatenacao</h3>
    <p>
        Em PHP usamos o ponto (.) para fazer a concatenacao.
    </p>

    <div class="example">
        <p><b>Exemplo:</b></p>
        <code>
            $idade = 12; <br>
            echo 'O Joao tem ' . $idade . ' anos de idade'; <br><br>
            
            <p><b>Resultado</b>:O Joaqo tem 12 anos de idade</p>
        </code>
    </div>

    <h2>Arrays</h2>
    <p>
        Em PHP definimos arays da seguinte forma:
    </p>

    <div class="example">
            <code>
                $nome_do_array = array(valor1, valor2, valor3, ..., valorN);
            </code>
    </div>
    <div class="example">
        <p><b>Exemplo:</b></p>
        <code>
            $meuArray = array("um", "dois", "tres"); <br>
            echo $meuArray[1]; <br><br>
            
            <p><b>Resultado</b>: dois</p>
        </code>
    </div>

    <h3>Arrays associativos</h3>
    <p>
        Nos arrays associativos, inves de usar indices para referenciar um elemento do array,
        usamos pares <code>chave => valor.</code>
    </p>
    <div class="example">
        <p><b>Exemplo:</b></p>
        <code>
        $meuArray = array('nome' => "Joaquim", "idade" => 12, "profissao" => "Estudante", "Ocupacao" => "Programador"); <br>
            echo $meuArray['idade']; <br><br>
            
            <p><b>Resultado</b>: 12</p>
        </code>
    </div>


    <h3>Loops em array</h3>
    <p>
        Para percorrer um array em PHP podemos usar a estrutura de repeticao <code>foreach</code>.
    </p>
    <p>
        A estrutura de repeticao <code>foreach</code> tem a seguinte sintaxe:
    </p>
    <div class="example">
        <code>
            foreach ($nome_do_array as $key => $value) { <br>
                # codigo... <br>
            } <br>
        </code>
    </div>
    <div class="example">
        <p><b>Exemplo:</b></p>
        <code>
            $meuArray = array('nome' => "Joaquim", "idade" => 12, "profissao" => "Estudante", "Ocupacao" => "Programador"); <br>
            foreach ($nome_do_array as $key => $value) { <br>
                echo "$chave : $valor<br>"; <br>
            } <br><br>
        </code>

        <p><b>Resultado:</b></p>
        <p>
            Nome : Joaquim <br>
            idade : 12 <br>
            profissao : estudante <br>
            ocupacao : programador
        </p>
    </div>
    <div class="exercicios">
        <h2>Exercicio 1:</h2>
        <p>
            Crie uma lista telefonica usando um array associativo. O array deve ter os pares
            <b>Nome - Contacto</b>.
        </p>
        <p>
            Coloque 5 contactos.
        </p>
    </div>

    <h2>Funcoes</h2>

    <p>
        Sintaxe de funcoes em PHP
    </p>
    <div class="example">
        <code>
            function nomeDaFuncao($argumento1, $argumento2, ...., $argumentoN) { <br>
                # codigo... <br>
            } <br>
        </code>
    </div>
    <p>
        As funcoes em PHP tambem podem possuir o <code>return</code>
    </p>
    <div class="example">
        <code>
            function nomeDaFuncao($argumento1, $argumento2, ...., $argumentoN) { <br>
                # codigo... <br>
                return valor <br>
            } <br>
        </code>
    </div>
    <div class="example">
        <p><b>Exemplo:</b> Uma funcao que calcula a soma de dois numeros.</p>
        <code>
            function soma($nr1, $nr2) { <br>
                return $nr1 + nr2 <br>
            } <br>
            echo soma(4, 8); <br><br>
        </code>
        <p>
            <b>Resultado: </b> 12
        </p>
    </div>
</body>
</html>