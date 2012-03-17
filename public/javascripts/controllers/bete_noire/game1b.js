$(function() {
		$( ".draggable" ).draggable({ 
		
		  start: function( event, ui ) {
		    $( this )
		       littlebox = $( this ).attr('id');
		       }
		        });
		    $( ".droppable" ).droppable({
			drop: function( event, ui ) {
				$( this )
					.css( "background-color", "blue" )
				  game1Lildrop = $( this ).attr('id')
				  game1(game1Lildrop)
				  if (arrayLength(boxes, 4) == true){
				    $('#score_right').append("<p>" + (littlebox) + "-" + (game1Lildrop) + "</p>");
			      boxes.push((littlebox) + (game1Lildrop));
			      }
			     boxColors2(littlebox)
				  }
		});
		  $( ".droppable2" ).droppable({
			drop: function( event, ui ) {
				$( this )
				  .css( "background-color", "#D3D9E9" )
				  game1Bigdrop = $( this ).attr('id')
				  game1(game1Bigdrop)
				  if (arrayLength(boxes, 4) == true){
				    $('#score_right').append("<p>" + (littlebox) + "-" + (game1Bigdrop) + "</p>");
			      boxes.push((littlebox) + (game1Bigdrop));
			      }
			    boxColors2(littlebox)
				  }
				});
		 });
