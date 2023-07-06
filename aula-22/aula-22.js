  //Exemplo de uma animacao 'click'

$(".div").click(function() {
  $(".div").text('Botao clicado com sucesso! ✌️')
}) 


//Exemplo de animacao 'load'
/*
$(window).on( "load", function() {
  $("#load-div").hide();
  let name = prompt("Introduza o seu nome");
  $("#load-div").text(`Ola, ${name}. Bem-vindo ao meu site`);
  $("#load-div").fadeIn(3000);
});
*/

//Exemplo do evento MouseEnter
$("#enter-div").mouseenter(function() {
  $("#enter-div").text('O mouse ja passou por cima deste elemento.');
});


//Exemplo do Evento MouseLeave
$("#leave-div").mouseleave(function() {
  $("#leave-div").text('O mouse ja saiu por cima deste elemento.');
});


//Exemplo do Evento MouseEnter e MouseLeave no mesmo elemento
$("#enter-leave-div").mouseenter(function() {
  $("#enter-leave-div").text('Mouse Enter.');
});

$("#enter-leave-div").mouseleave(function() {
  $("#enter-leave-div").text('Mouse Leave.');
});

//Exemplo do evento keypress
$("#texto-keypress").keypress(function() { 
  $("#resultado-keypress").text($("#texto-keypress").val());
});

//Exemplo do evento keypress
$("#texto-keyup").keyup(function () { 
  $("#resultado-keyup").text($("#texto-keyup").val());
});

//Exemplo do preventDefault()
$("#link").click(function (e) { 
  e.preventDefault();
  alert('Este link me leva para: ' + e.target.href);
});

//Exemplo de eventos em formularios
$('form').submit(function (e) { 
  e.preventDefault();

  //obter os valores dos campos preenchidos (inputs)
  let nome = $("#nome-input").val();
  let mensagem = $("#mensagem-input").val();

  //mostrar os valores inseridos nos respectivos campos
  $("#nome").text(nome);
  $("#mensagem").text(mensagem);
});