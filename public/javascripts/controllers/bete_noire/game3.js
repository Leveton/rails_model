$(function() {
		$( "#progressbar" ).progressbar({
			value: 66
		});
	});

$(function(){
  $('#score_right').show();
  $('#score_right p').detach();
});

$(function() {
		$( ".draggable2" ).draggable({ 
		
		  start: function( event, ui ) {
		    $( this )
		       littlebox2 = $( this ).attr('id');
		       }
		        });
		    $( ".droppable3" ).droppable({
			drop: function( event, ui ) {
				$( this )
					.css( "background-color", "#311E66" )
				  game1Lildrop2 = $( this ).attr('id')
				  game3(game1Lildrop2)
				  if (arrayLength(boxes2, 5) == true){
				    $('#score_right').append("<p>" + (littlebox2) + "-" + (game1Lildrop2) + "</p>");
			      boxes2.push((littlebox2) + (game1Lildrop2));
			      }
			     boxColors2(littlebox2)
				  }
		});
 });
 
$('.boxgrid.slideright p').empty();
$('.boxgrid.slideright p').html('The 1st floor contains 3 blocks');
