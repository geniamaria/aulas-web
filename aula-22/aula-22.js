  //Exemplo de uma animacao 'click'

$(".div").mouseenter(function() {
  $(".div").text('Botao clicado com sucesso! ✌️')
}) 

$(".div").mouseleave(function() {
  $(".div").text('Clique-me')
}) 

//Exemplo de animacao 'load'
$(window).on( "load", function() {
  $("#load-div").hide();
  let name = prompt("Introduza o seu nome");
  $("#load-div").text(`Ola, ${name}. Bem-vindo ao meu site`);
  $("#load-div").fadeIn(3000);
});


//Exemplo de uma animacao 'dbclick' (TPC)
$("#db-div").dbclick(function() {
  $("#db-div").text("Voce clicou em mim duas vezes!");
})

$(".hover").click(function() {
  $(".hover").text('Botao clicado com sucesso! ✌️')
})

$("#resultado").click(function() {
  alert("oiii");
});