
//Exemplo da animacao togle

$("#toggle-click").click(function () { 
    $("#toggle").toggle();
    
});

//Exemplo slideToggle
$("#slide-toggle-click").click(function () { 
    $("#slide-toggle").slideToggle(2000);
    
});

//Exemplo fadeToggle
$("#slide-toggle-click").click(function () { 
    $("#slide-toggle").fadeToggle(2000);
    
});


$("#slide-toggle-click").click(function () { 
    $("#fade-toggle-click").fadeToggle();
   
});




//Exemplo da animacao animate
$("#mostrar").show();
$("#ocultar").hide();
$("main").hide();

$("#mostrar").click(function () { 
    $("#mostrar").toggle();
    $("#ocultar").toggle();

    $("aside").animate({
        left: '0'
    }, 3000, function() {
        $("main").show(1500);
    });
});

$("#ocultar").click(function () { 
    $("#mostrar").toggle();
    $("#ocultar").toggle();

    $("aside").animate({
        left: '-200px'
    }, 3000, function() {
        $("main").hide(1500);
    });
});