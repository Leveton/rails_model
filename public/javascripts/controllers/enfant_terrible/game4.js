$(function() {
		$( "#progressbar" ).progressbar({
			value: 50
		});
	});

$(function(){
  $('#score_right').hide();
});
	
	$(function() {
		$('#sortable').sortable({ 
        update: function() {
            boxes4 = $('#sortable').sortable('serialize');
           
        }                                         
    });
}); 
	
	$('.boxgrid.slideright p').empty();
	$('.boxgrid.slideright p').html('black is in the top-right corner');

