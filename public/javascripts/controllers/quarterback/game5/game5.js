jQuery.fn.compare = function (d) {
    if (this.length != d.length) {
        return false;
    }
    var f = this.sort(),
        e = d.sort();
    for (var c = 0; d[c]; c++) {
        if (f[c] !== e[c]) {
            return false;
        }
    }
    return true;
};

function goBack() {
    $("#demo_frame").reset();
}
$(function () {
    count = 150;
    countdown = setInterval(function () {
        $("#score_right_timer p").html(count + "  seconds remaining");
        if (count == 0) {
            showForm("#demo_frame", "#timesUp_form");
            return false;
        }
        count--;
    }, 1000);
});

function arrayLength(b) {
    while (b.length <= 4) {
        return true;
    }
}
function boxColors2(b) {
    switch (b) {
    case "J":
        $("#J").css("background-color", "green");
        break;
    case "K":
        $("#K").css("background-color", "orange");
        break;
    case "L":
        $("#L").css("background-color", "purple");
        break;
    case "M":
        $("#M").css("background-color", "pink");
        break;
    case "N":
        $("#N").css("background-color", "black");
        break;
    default:
        $("#J").css("background-color", "#0E2A21");
    }
}
function otraVez() {
    alert(boxes);
}
function showForm(d, c) {
    $(d).replaceWith($(c));
    $(c).removeClass("hidden");
}
function resetGame(a, b, c, d) {
    ++reset;
    $(a).load(b);
    $(c).empty();
    d.length = 0;
}
function compareAnswers(a, b, c, d, e) {
    if ($(a).compare(b) == true) {
        clearInterval(countdown);
        timeTaken = (150 - count);
        user_data.push(timeTaken);
        resets.push(reset);
        attempts.push(attempt);
        showForm("#demo_frame", "#exercise_form");
        d3_charts(".user_barchart", ".user_y_axis", ".prepcloud_barchart", ".prepcloud_y_axis", data, y_data, user_data);
        d3_charts(".user_barchart2", ".user_y_axis2", ".prepcloud_barchart2", ".prepcloud_y_axis2", ave_attempts, y_data, attempts);
        d3_charts(".user_barchart3", ".user_y_axis3", ".prepcloud_barchart3", ".prepcloud_y_axis3", ave_resets, y_data, resets);
    } else {
        alert("Incorrect, please try again");
        resetGame(c, d, e, a);
        ++attempt;
    }
}
var allboxes4 = ["NR2, C1", "MR1, C2", "LR1, C1", "JR3, C1", "KR3, C2"];
var boxes = [];
$(function () {
    $(".draggable").draggable({
        start: function (a, b) {
            $(this);
            littlebox = $(this).attr("id");
        }
    });
    $(".c10").droppable({
        drop: function (a, b) {
            $(this).css("background-color", "#ffffff");
            bigbox = $(this).attr("id");
            if (arrayLength(boxes) == true) {
                $("#score_right").append("<p>" + (littlebox) + "-" + (bigbox) + "</p>");
                boxes.push((littlebox) + (bigbox));
            }
            boxColors2(littlebox);
        }
    });
});
$(document).ready(function () {
    $(".boxgrid.slideright").hover(function () {
        $(".cover", this).stop().animate({
            left: "325px"
        }, {
            queue: false,
            duration: 700
        });
    }, function () {
        $(".cover", this).stop().animate({
            left: "0px"
        }, {
            queue: false,
            duration: 700
        });
    });
    $(".boxgrid.slideright p").empty();
    $(".boxgrid.slideright p").html("N could share a column with L but not with M");
});
