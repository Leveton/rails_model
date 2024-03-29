$(function () {
 $('#appointment_form').hide();
 $('#hour_picker').hide();
 $('#hidden_hour_div').hide();
 $('#cal_previous2').hide();
 });

var disabledDays = [];

$(function () {

    $('.schedules_dates').map(function () {
        disabledDays.push(this.id);
    }).get().join(',');

});

function unavailableDays(date) {
    var y = date.getFullYear(),
        m = date.getMonth(),
        d = date.getDate();
    if ($.inArray(y + '-' + (m + 1) + '-' + d, disabledDays) != -1 || new Date() > date) {
        return [false];
    }
    return [true];
}

$(function () {
    var currentTime = new Date()
    var month = currentTime.getMonth()
    var day = currentTime.getDate()
    var year = currentTime.getFullYear()

    $("#datepicker").datepicker({
        minDate: new Date(year, month, day),
        dateFormat: 'yy-mm-dd',
        onSelect: function(dateText) { 
          setFinalDate = dateText
          $('#hour_picker').show();
          $('#datepicker').hide();
          findHours(setFinalDate);
          $("th.selected_date").append("Date Chosen:" + " " + (setFinalDate));
          $('#steps_table2').css('background', '#00FFCC');
          $('#steps_table1').css('background', '#FFFFFF');
          pageNo = '2';
        }
        
});
});

function findHours(chosen_date){
 $.ajax({
      url: "/../appointments",
      cache: false,
      data: {matched_date:chosen_date},
      success: function(html){
        var hours_array = [];
        $("#hidden_hour_div").append(html);
        var hours_string = $("#hidden_hour_div").html()
        var one = hours_string.substring(2, 6);
        var two = hours_string.substring(10, 14);
        var three = hours_string.substring(18, 22);
        var four = hours_string.substring(26, 30);
        var five = hours_string.substring(34, 38);
        var six = hours_string.substring(42, 46);
        var seven = hours_string.substring(50, 54);
        var eight = hours_string.substring(58, 62);
        var nine = hours_string.substring(66, 70);
        var ten = hours_string.substring(74, 78);
        var eleven = hours_string.substring(82, 86);
        var twelve = hours_string.substring(90, 94);
        
        hours_array.push(one,two,three,four,five,six, seven, eight, nine, ten, eleven, twelve);
        for (var j in hours_array) {
          (final_array = '\.'+ hours_array[j]);
          $(final_array).hide();
     }
    }
  });
 }


      function nextPage(hour, id){
        $('#hour_picker').hide();
        $("#appointment_form").show();
        document.getElementById('appointments_date').value = setFinalDate;
        document.getElementById('appointments_hour').value = hour;
        $('#cal_previous2').show();
        //document.getElementById('subData').style.display = 'block'
        $('#final_date h4').append(setFinalDate);
        $('#final_hour h4').append(id);
        $('#steps_table2').css('background', '#FFFFFF');
        $('#steps_table3').css('background', '#00FFCC');
        pageNo = '3';
        return true;
     }

function prevPage() {
      
  if (pageNo === '3') {
        setFinalHour = "";
        $('#appointment_form').hide();
        $("#hour_picker").show();
        $('#cal_previous2').hide();
        $('#final_date h4').empty();
        $('#final_hour h4').empty();
        pageNo = '2'
        }
  }
