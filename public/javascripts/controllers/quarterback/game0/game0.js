$(function() {
		$( "#dialog-message" ).dialog({
			modal: true,
			buttons: {
				Ok: function() {
					$( this ).dialog( "close" );
				}
			}
		});
	});

	$(function() {
		$( "#progressbar" ).progressbar({
			value: 5
		});
	});

