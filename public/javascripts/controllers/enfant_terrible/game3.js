$(function() {
		$( "#progressbar" ).progressbar({
			value: 5
		});
	});

$(function(){
  $('#score_right').hide();
});

	$(function() {
		$( ".sortable2" ).sortable({
		connectWith:  ".sortable1"
		
		});
    $('.sortable1').sortable({ 
        update: function() {
            boxes3 = $('.sortable1').sortable('serialize');
        }                                         
    });
}); 
	
