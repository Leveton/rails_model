jQuery.ajax({
     type: "GET",
     url: "http://localhost:3000/date_hour.xml",
     dataType: "xml",
     success: function(xml) {
          jQuery(xml).find('CompanyName').each(function(){
               mike = jQuery(this).find('value').text();
               var output  = '<div id="mike">'+mike+'</div>';
               jQuery('body').append(jQuery(output));
          });
     }
     
});

var disabledDays = ["11-21-2011"];

/* utility functions */
function nationalDays(date) {
  var m = date.getMonth(), d = date.getDate(), y = date.getFullYear();
  //console.log('Checking (raw): ' + m + '-' + d + '-' + y);
  for (i = 0; i < disabledDays.length; i++) {
    if($.inArray((m+1) + '-' + d + '-' + y,disabledDays) != -1 || new Date() > date) {
      //console.log('bad:  ' + (m+1) + '-' + d + '-' + y + ' / ' + disabledDays[i]);
      return [false];
    }
  }
  //console.log('good:  ' + (m+1) + '-' + d + '-' + y);
  return [true];
}
function noWeekendsOrHolidays(date) {
  var noWeekend = jQuery.datepicker.noWeekends(date);
  return noWeekend[0] ? nationalDays(date) : noWeekend;
}
	
	
	
	//main month calendar
	$(function() {
		$( "#datepicker" ).datepicker({ 
		minDate: new Date(2011, 0, 1),
    maxDate: new Date(2015, 11, 31),
    constrainInput: true,
    //beforeShowDay: noWeekendsOrHolidays
		
		
		});
		document.getElementById('middle').style.display = 'none'
	});

  var setFinalDate;
	var setFinalHour;
	var pageNo = '1'
	var curDate;
	var date;
	
	var eventData = {
		events : []
	};

	 //pick by hour calendar  
	//$(document).ready(function() {
	function pick_by_hour(curDate){
		var curDate = curDate.split('/');
		curDate[1]	=	parseInt(curDate[1]) + 1;
		curDate.join('/')
		curDate = curDate[0]+'/'+curDate[1]+'/'+curDate[2]
		pageNo = '2';
		document.getElementById('middle').style.display = 'block'
		var  date = new Date(curDate);
		$("#datepicker").css("display","none");
		$("#calendar").css("display","block");
		// $('#calendar').weekCalendar({clear:"clear"});
		$('#calendar').weekCalendar({
			timeslotsPerHour: 1,
			date : date,
			height: function($calendar){
				return $(window).height() - $("h1").outerHeight();
			},
			eventRender : function(calEvent, $event) {
				if(calEvent.end.getTime() < new Date().getTime()) {
					$event.css("backgroundColor", "#aaa");
					$event.find(".time").css({"backgroundColor": "#999", "border":"1px solid #888"});
				}
			},
			eventNew : function(calEvent, $event) {
			
			var year = calEvent.start.getFullYear(); 
			
				var date = calEvent.start.getDate();
			
			
				var month = calEvent.start.getMonth()+1;
			
			
			if(calEvent.start.getHours() < 10)
				var hour = '0'+calEvent.start.getHours();
			else
				var hour = calEvent.start.getHours();
			
			if(calEvent.start.getMinutes() < 10)
				var minute = '0'+calEvent.start.getMinutes();
			else
				var minute = calEvent.start.getMinutes();
			
			if(calEvent.start.getSeconds() < 10)
				var second = '0'+calEvent.start.getSeconds();
			else
				var second = calEvent.start.getSeconds();
				
			setFinalDate = year+'/'+month+'/'+date ;
			setFinalHour = hour+':'+minute+':'+second;
			
			},
			data:eventData
		});
		

	}

	
	function nextPage()
	{
		if(setFinalHour == null || setFinalHour == "" )
			return false;
		else
		{
			$("#calendar").css("display","none");
			$("#form").css("display","block");
			document.getElementById('schedules_date').value = setFinalDate;
			document.getElementById('schedules_hour').value = setFinalHour;
			
			document.getElementById('next').style.display = 'none'
			document.getElementById('back').style.display = 'block'
			document.getElementById('middle').style.display = 'none'
			document.getElementById('subData').style.display = 'block'
			pageNo = '3';
			return true;
		}
		
		
	}
	function prevPage()
	{
		if(pageNo == '1')
		{
			
		}
		if(pageNo == '2')
		{
		  
			//	$("#calendar").weekCalendar({date:'2011/8/14'});
			//window.location = 'cal_month.html'
			$("#calendar").css("display","none");
			$("#datepicker").css("display","block");
			document.getElementById('middle').style.display = 'none'
      pageNo = '1'
			$("#calendar").weekCalendar("refresh");
			

		}
		if(pageNo == '3')
		{
			$("#calendar").css("display","block");
			$("#form").css("display","none");
			var curDate	=	document.getElementById('date').value;
			setFinalHour = "";
			pick_by_hour(curDate);
			document.getElementById('next').style.display = 'block'
			document.getElementById('back').style.display = 'block'
			document.getElementById('middle').style.display = 'block'
			document.getElementById('subData').style.display = 'none'
		}
		
	}
