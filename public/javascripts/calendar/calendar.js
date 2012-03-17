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
        //beforeShowDay: unavailableDays
});
    document.getElementById('middle').style.display = 'none'
});

var setFinalDate;
var setFinalHour;
var pageNo = '1'
var curDate;
var date;

var eventData = {
    events: []
};

function pick_by_hour(curDate) {
    var curDate = curDate.split('/');
    curDate[1] = parseInt(curDate[1]) + 1;
    curDate.join('-')
    curDate = curDate[0] + '-' + curDate[1] + '-' + curDate[2]
    pageNo = '2';
    document.getElementById('middle').style.display = 'block'
    var date = new Date(curDate);
    $("#datepicker").css("display", "none");
    $("#hour_picker").css("display", "block");
    $("#nextPrev").hide();
    //$("#temp_load").load('/../schedules/hour_picker');
    $("th.selected_date").append("Date Chosen:" + " " + (curDate));
    findHours(curDate);
    setFinalDate = curDate
    $('#steps_table1').css('background', '#FFFFFF');
    $('#steps_table2').css('background', '#00FFCC');
 
}

function nextPage2(hour){
  setFinalHour = hour;
  if (setFinalHour == null || setFinalHour == "") return false;
    else {
        $('#hour_picker').hide();
        $("#schedule_form2").removeClass("hidden");
        document.getElementById('schedules_date').value = setFinalDate;
        document.getElementById('schedules_hour').value = setFinalHour;
        pageNo = '3';
        $('#cal_previous2').removeClass('hidden');
        $('#steps_table2').css('background', '#FFFFFF');
        $('#steps_table3').css('background', '#00FFCC');
        document.getElementById('subData').style.display = 'block'
        $('#final_date h2').append(setFinalDate);
        $('#final_hour h2').append(setFinalHour);
        return true;
    }

}

function prevPage() {

    if (pageNo === '1') {
        setFinalDate = "";
        $('#cal_previous2').addClass('hidden');
    }
    if (pageNo === '2') {
        //$("#hour_picker").hide();
        $("#datepicker").css("display", "block");
        document.getElementById('middle').style.display = 'none'
        pageNo = '1'
        setFinalDate = "";
        $("#hour_picker").weekCalendar("refresh");
        $("#hour_picker").hide();
        $("th.selected_date").empty();
        $('#steps_table2').css('background', '#FFFFFF');
        $('#steps_table1').css('background', '#00FFCC');

    }
    if (pageNo === '3') {
        pageNo = '2'
        $("#schedule_form2").addClass('hidden');
        setFinalHour = "";
        $("#hour_picker").weekCalendar("refresh");
        $("#hour_picker").show();
        $('#cal_previous2').addClass('hidden');
        $('#steps_table3').css('background', '#FFFFFF');
        $('#steps_table2').css('background', '#00FFCC');
        $('#final_date h2').empty();
        $('#final_hour h2').empty();
        }
}
