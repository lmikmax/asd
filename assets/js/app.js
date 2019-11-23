$( ".inner_button" ).on( "click", function( event ) {
    var a=$(".container-fluid-inner").height()
    $('html, body').animate({
      scrollTop: a
  }, 1000);
});
