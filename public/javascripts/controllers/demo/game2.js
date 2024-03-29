jQuery.fn.compare = function (a) {
    if (this.length != a.length) {
        return false;
    }
    var h = this.sort(),
        i = a.sort();
    for (var b = 0; a[b]; b++) {
        if (h[b] !== i[b]) {
            return false;
        }
    }
    return true;
};

function arrayLength(a) {
    while (a.length <= 4) {
        return true;
    }
}
function keyHighlight(b, c, a) {
    $(b).css("background-color", c);
    boxes.push(c);
    d = boxes.length;
    switch (d) {
    case 1:
        $("#key1").css("background-color", c);
        $("#key1").html(a);
        break;
    case 2:
        $("#key2").css("background-color", c);
        $("#key2").html(a);
        break;
    case 3:
        $("#key3").css("background-color", c);
        $("#key3").html(a);
        break;
    case 4:
        $("#key4").css("background-color", c);
        $("#key4").html(a);
        break;
    case 5:
        $("#key5").css("background-color", c);
        $("#key5").html(a);
        break;
    case 6:
        $("#key6").css("background-color", c);
        $("#key6").html(a);
        break;
    }
}
function nextGame(c, e) {
    $(c).load(e);
}
function resetGame(c, i, a, b) {
    $(c).load(i);
    $(a).empty();
    b.length = 0;
}
function otraVez(a) {
    alert(a);
}
function showForm(c, e) {
    $(c).replaceWith($(e));
    $(e).removeClass("hidden");
}
goodClicks = 0;
prompts = new Array("If no N, then no P", "If Z does't come before T, then G isn't 9th", "If no I, then P doesn't come before W", "If F, then Y", "If R3, then N isn't 9th", "If Q doesn't arrive befoe O, then J arrives");
goodChoices = new Array("c2", "c6", "c5", "c1", "c3", "c4");

function photoShoot(g, e) {
    if (e == goodChoices[goodClicks]) {
        ++goodClicks;
        $("#score_right p").empty();
        $("#score_right p").append(prompts[goodClicks]);
    }
    if (goodClicks == 6) {
        showForm("#demo_frame", "#exercise_form");
        timeTaken3 = (450 - (timeTaken + timeTaken2 + count));
        user_data.push(timeTaken3);
        attempts.push(attempt);
        resets.push(reset);
        d3_charts(".user_barchart", ".user_y_axis", ".prepcloud_barchart", ".prepcloud_y_axis", data, y_time_data, user_data);
        d3_charts(".user_barchart2", ".user_y_axis2", ".prepcloud_barchart2", ".prepcloud_y_axis2", ave_attempts, y_attempt_data, attempts);
        d3_charts(".user_barchart3", ".user_y_axis3", ".prepcloud_barchart3", ".prepcloud_y_axis3", ave_resets, y_reset_data, resets);
        clearInterval(countdown);
    }
    $("#demo_frame").css("background-color", "yellow");
    setTimeout(function () {
        $("#demo_frame").css("background-color", "#C6E2FF");
    }, 180);
    cloned = $(g).clone();
    wide = g.width;
    high = g.height;
    var f = $('<div class="shot">').width(wide).height(high);
    f.append(cloned);
    f.css("margin-right", -160).prependTo(".photoShoot_bottom").animate({
        marginRight: 0
    }, "slow");
    $(".shot").eq(8).remove();
}
function compareAnswers3(g, h, e, f) {
    if (g[0, 1, 2, 3, 4, 5] == h[0, 1, 2, 3, 4, 5]) {
        nextGame(e, f);
        count = 130;
    } else {
        alert("Incorrect, please try again");
    }
}
function compareAnswers4(c, i, a, b) {
    if ($(c).compare(i) == true) {
        $(a).replaceWith($(b));
        $(b).removeClass("hidden");
        clearInterval(countdown);
    } else {
        alert("Incorrect, please try again");
    }
}
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
    $(".boxgrid.slideright p").html("Your first click should be the second block on the top row");
});
$(function () {
    $("#progressbar").progressbar({
        value: 66
    });
});
$(function () {
    $("#score_right").show();
    $("#score_right").empty().css("background-color", "pink").css("color", "#000000");
    $("#score_right").append("PINK PROMPT").css("text-align", "center");
    $("#score_right").append("<p>If no N, then no P</p>");
});
