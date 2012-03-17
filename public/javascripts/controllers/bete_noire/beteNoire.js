jQuery.fn.compare = function (i) {
    if (this.length != i.length) {
        return false;
    }
    var l = this.sort(),
        m = i.sort();
    for (var k = 0; i[k]; k++) {
        if (l[k] !== m[k]) {
            return false;
        }
    }
    return true;
};

function game1(g) {
    switch (g) {
    case "1":
        game1Bigdrop = "Mon-morning";
        break;
    case "2":
        game1Lildrop = "Mon-afternoon";
        break;
    case "3":
        game1Bigdrop = "Tues-morning";
        break;
    case "4":
        game1Lildrop = "Tues-afternoon";
        break;
    case "5":
        game1Lildrop = "Tues-evening";
        break;
    case "6":
        game1Bigdrop = "Wed-morning";
        break;
    case "7":
        game1Lildrop = "Wed-afternoon";
        break;
    case "8":
        game1Lildrop = "Mon-evening";
        break;
    case "9":
        game1Lildrop = "Wed-evening";
        break;
    default:
        $("#J").css("background-color", "#0E2A21");
    }
}
function game3(g) {
    switch (g) {
    case "1":
        game1Lildrop2 = "floor 1";
        break;
    case "2":
        game1Lildrop2 = "floor 2";
        break;
    case "3":
        game1Lildrop2 = "floor 3";
        break;
    default:
        $("#J").css("background-color", "#0E2A21");
    }
}

function sudotiku(h, i) {
    a = $(".x1 input").attr("value");
    b = $(".x3 input").attr("value");
    c = $(".x4 input").attr("value");
    d = $(".x5 input").attr("value");
    e = $(".x7 input").attr("value");
    if (a == "2" && b == "5" && c == "7" && d == "4" && e == "1") {
        nextGame(h, i);
        timeTaken2 = (300 - (timeTaken + count));
        user_data.push(timeTaken2);
    } else {
        alert("Incorrect, Please try again");
        ++attempt;
    }
}
function nextGame(h, i) {
    $(h).load(i);
}
function resetGameSudotiku(h, i) {
    ++reset;
    $(h).load(i);
}
function goBack() {
    $("#demo_frame").reset();
}
$(function () {
    count = 300;
    countdown = setInterval(function () {
        $("#score_right_timer p").html(count + "  seconds remaining");
        if (count == 0) {
            showForm("#demo_frame", "#timesUp_form");
            return false;
        }
        count--;
    }, 1000);
});

function arrayLength(h, i) {
    while (h.length <= i) {
        return true;
    }
}
function boxColors2(g) {
    switch (g) {
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
    case "I":
        $("#I").css("background-color", "white");
        $("#I").css("color", "black");
        break;
    default:
        $("#J").css("background-color", "#0E2A21");
    }
}
function showForm(h, i) {
    $(h).replaceWith($(i));
    $(i).removeClass("hidden");
}
function resetGame(a, b, c, d) {
    ++reset;
    $(a).load(b);
    $(c).empty();
    d.length = 0;
}
function compareAnswers(a, b, c, d, e, f) {
    if ($(a).compare(b) == true) {
        nextGame(c, d);
        timeTaken = (300 - count);
        user_data.push(timeTaken);
    } else {
        alert("Incorrect, please try again");
        resetGame(c, f, e, a);
        ++attempt;
    }
}
function compareAnswers2(a, b, c, d, e, f) {
    if ($(a).compare(b) == true) {
        $(c).replaceWith($(d));
        $(d).removeClass("hidden");
        timeTaken3 = (300 - (timeTaken + timeTaken2 + count));
        user_data.push(timeTaken3);
        attempts.push(attempt);
        resets.push(reset);
        d3_charts(".user_barchart", ".user_y_axis", ".prepcloud_barchart", ".prepcloud_y_axis", data, y_time_data, user_data);
        d3_charts(".user_barchart2", ".user_y_axis2", ".prepcloud_barchart2", ".prepcloud_y_axis2", ave_attempts, y_attempt_data, attempts);
        d3_charts(".user_barchart3", ".user_y_axis3", ".prepcloud_barchart3", ".prepcloud_y_axis3", ave_resets, y_reset_data, resets);
        clearInterval(countdown);
    } else {
        alert("Incorrect, please try again");
        resetGame(c, f, e, a);
        ++attempt;
    }
}
var allboxes1 = ["LMon-morning", "MTues-afternoon", "KTues-evening", "JWed-morning", "NWed-afternoon"];
var allboxes3 = ["Mfloor 3", "Jfloor 3", "Ifloor 2", "Kfloor 1", "Nfloor 1", "Lfloor 1"];
var boxes = [];
var boxes2 = [];
$(function () {
    $(".draggable").draggable({
        start: function (i, h) {
            $(this);
            littlebox = $(this).attr("id");
        }
    });
    $(".droppable").droppable({
        drop: function (i, h) {
            $(this).css("background-color", "blue");
            game1Lildrop = $(this).attr("id");
            game1(game1Lildrop);
            if (arrayLength(boxes, 4) == true) {
                $("#score_right").append("<p>" + (littlebox) + "-" + (game1Lildrop) + "</p>");
                boxes.push((littlebox) + (game1Lildrop));
            }
            boxColors2(littlebox);
        }
    });
    $(".droppable2").droppable({
        drop: function (i, h) {
            $(this).css("background-color", "#D3D9E9");
            game1Bigdrop = $(this).attr("id");
            game1(game1Bigdrop);
            if (arrayLength(boxes, 4) == true) {
                $("#score_right").append("<p>" + (littlebox) + "-" + (game1Bigdrop) + "</p>");
                boxes.push((littlebox) + (game1Bigdrop));
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
    $(".boxgrid.slideright p").html("N was the very last block to arrive");
});
