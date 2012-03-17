$(function() {
		$( "#progressbar" ).progressbar({
			value: 75
		});
	});

$(function(){
$('#score_right p').detach();
  $('#score_right').show();
});

$(function() {
		$( ".mens_room" ).draggable({ 
		
		  start: function( event, ui ) {
		    $( this )
		       littlebox = $( this ).attr('id');
		       }
		        });
		$( ".pool1" ).droppable({
			drop: function( event, ui ) {
				$( this )
				.css( "background-color", "#172047" )
				  bigbox = $( this ).attr('id')
				  if (arrayLength(boxes) == true){
				    $('#score_right').append("<p>" + (littlebox) + "-" + (bigbox) + "</p>");
			      boxes.push((littlebox) + (bigbox));
			      }
				  }
		});
	});

$('.boxgrid.slideright p').empty();
$('.boxgrid.slideright p').html('Pool 3 has one man');

