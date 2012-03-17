jQuery.fn.compare = function (a) {
    if (this.length != a.length) {
        return false;
    }
    var g = this.sort(),
        h = a.sort();
    for (var b = 0; a[b]; b++) {
        if (g[b] !== h[b]) {
            return false;
        }
    }
    return true;
};
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

function arrayLength(a) {
    while (a.length <= 4) {
        return true;
    }
}
function boxColors2(a) {
    switch (a) {
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
function game4(a) {
    switch (a) {
    case "1":
        bigbox = "morning-first";
        break;
    case "2":
        bigbox = "morning-last";
        break;
    case "3":
        bigbox = "afternoon-first";
        break;
    case "4":
        bigbox = "afternoon-last";
        break;
    case "5":
        bigbox = "night-first";
        break;
    case "6":
        bigbox = "night-last";
        break;
    default:
        $("#J").css("background-color", "#0E2A21");
    }
}
function otraVez() {
    alert(boxes);
}
function showForm(a, b) {
    $(a).replaceWith($(b));
    $(b).removeClass("hidden");
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
        ++attempt
        user_data.push(timeTaken);
        attempts.push(attempt);
        resets.push(reset);
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
var allboxes3 = ["Jmorning-first", "Mmorning-last", "Lafternoon-first", "Knight-first", "Nafternoon-last"];
var boxes = [];
$(function () {
    $(".draggable").draggable({
        start: function (d, c) {
            $(this);
            littlebox = $(this).attr("id");
        }
    });
    $(".droppable4b").droppable({
        drop: function (d, c) {
            $(this).addClass("ui-state-highlight");
            bigbox = $(this).attr("id");
            game4(bigbox);
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
    $(".boxgrid.slideright p").html("Only one block raced during the night");
});
