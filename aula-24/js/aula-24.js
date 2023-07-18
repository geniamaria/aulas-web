//componente tab
$( "#tabs" ).tabs();

//componente menu
$( "#menu" ).menu();

//efeito color Animation
var state = true;
    $( "#button" ).on( "click", function() {
      if ( state ) {
        $( "#effect" ).animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( "#effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 1000 );
      }
      state = !state;
    });

//interacao Resizable

$( "#resizable" ).resizable();

//interacao sortable
$( "#sortable" ).sortable();