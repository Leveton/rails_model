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
    count = 130;
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
function nextGame(a, b) {
    $(a).load(b);
}
function game3(a) {
    switch (a) {
    case "1":
        game1Lildrop2 = "Yellow Bus";
        break;
    case "2":
        game1Lildrop2 = "Yellow Bus";
        break;
    case "3":
        game1Lildrop2 = "White Bus";
        break;
    default:
        $("#J").css("background-color", "#0E2A21");
    }
}
function boxColors2(a) {
    switch (a) {
    case "Man":
        $("#1").css("background-color", "pink");
        break;
    case "Man":
        $("#Man").css("background-color", "black");
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
function game1(a) {
    switch (a) {
    case "1":
        littlebox = "Man";
        break;
    case "2":
        littlebox = "Man";
        break;
    case "3":
        littlebox = "Woman";
        break;
    case "4":
        littlebox = "Woman";
        break;
    case "5":
        littlebox = "Woman";
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
function compareAnswers(a, b, c, d, e, f) {
    if ($(a).compare(b) == true) {
        nextGame(c, d);
        timeTaken2 = (130 - count);
        user_data.push(timeTaken2);
        count = 130;
    } else {
        alert("Incorrect, please try again");
        resetGame(c, f, e, a);
        ++attempt;
    }
}
function compareAnswers3(a, b, c, d, e, f) {
    if (a == b) {
        nextGame(c, d);
        timeTaken = (130 - count);
        user_data.push(timeTaken);
        count = 130;
    } else {
        alert("Incorrect, please try again");
        resetGame(c, f, e, a);
        ++attempt;
    }
}
function compareAnswers4(a, b, c, d, e, f) {
    if ($(a).compare(b) == true) {
        $(c).replaceWith($(d));
        $(d).removeClass("hidden");
        timeTaken4 = (130 - count);
        user_data.push(timeTaken4);
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
var allboxes1 = ["Manpool3", "Manpool2", "Womanpool2", "Womanpool2", "Womanpool1"];
var allboxes2 = ["BlueYellow Bus", "RedWhite Bus", "Pink HatYellow Bus", "CowboyYellow Bus", "CapWhite Bus"];
var allboxes3 = ["foo[]=1&foo[]=5&foo[]=2&foo[]=6&foo[]=3&foo[]=4"];
var allboxes4 = ["foo[]=5&foo[]=4&foo[]=2&foo[]=1&foo[]=3&foo[]=6"];
var boxes = [];
var boxes2 = [];
$(function () {
    $("#score_right").hide();
});
$(function () {
    $(".sortable2").sortable({
        connectWith: ".sortable1"
    });
    $(".sortable1").sortable({
        update: function () {
            boxes3 = $(".sortable1").sortable("serialize");
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
    $(".boxgrid.slideright p").html("blue is at the very top");
});
