
//selecionando usando selector de tag
$('span').text("Texto adicionado usando selector de tag");

//selecionando usando selector de classe
$('.selector-classe').text("Texto adicionado usando selector de classe");

//selecionando usando selector de id
$('#selector-id').text("Texto adicionado usando selector de id");

//selecionando usando selector de descendencia
$('.example #selector-desc').text("Texto adicionado usando selector de descendencia");

//selecionando usando selector de descendencia
$('.example > span').text("Texto adicionado usando selector de descendencia");

//selecionando apenas os elementos pares dos elementos encontrados
$('.outro-selector-par:even').text('oiiii');

//selecionando apenas os elementos impares dos elementos encontrados
$('.outro-selector-impar:odd').text('oiiii');

//selecionando apenas o primeiro  elemento encontrado
$('.outro-selector-first:first').text('olo');

//selecionando apenas o ultimo  elemento encontrado
$('.outro-selector-last:last').text('olo');

//adicionando tags usando jQuery
$('#adicionar-tag').append('<h1>Meu titulo jQuery</h1>');

//adicionando texto
$('#adicionar-texto p').text("Paragrafo adicionado usando a funcao 'text' do jQuery");

//removendo elementos
$('#remover-elementp').remove();

//verificando estilos css de um elemento
console.log($('#modificar-css p:first').css('font-size'));

//colocando estilos css
$('#modificar-css p:last').css({
    'color' : '#e5e5e5',
    'background-color' : 'black',
    'border-radius' : '20px',
    'width' : '80%',
    'padding' : '5px',
});

//exemplo da animacao hide.
$('#hide').click(function () { 
    $('#hide').hide();
});

//exemplo da animacao show.
$('#show').hide();
$("#show-click").click(function () { 
    let aleatorio = Math.floor(Math.random() * 100);
    $('#show').show();
    $("#show").text(aleatorio);
});

//exemplo da animacao slideDown.
$('#slideDown').hide();
$("#slideDown-click").click(function () { 
    $('#slideDown').slideDown(3000);
});

//exemplo da animacao slideUp.
$('#slideUp').slideUp(1000);//quandofazemos o relode da pagina acotece o slideUp.

//exemplo da animacao fadeIn.
$('#fadeIn').hide();
$("#fadeIn-click").click(function () { 
    $('#fadeIn').fadeIn(3000);
});

//exemplo da animacao fadeOut.
$('#fadeOut').fadeOut(7000);



