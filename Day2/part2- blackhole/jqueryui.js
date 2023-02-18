$(".container").hover(function(){
    $(".bunny").effect("shake");
});


$( function() {
    $( ".bunny" ).draggable();
    $( ".hole" ).droppable({
      drop: function( event, ui ) {
        $(".bunny").addClass("hide")
      }
    });
  } );
