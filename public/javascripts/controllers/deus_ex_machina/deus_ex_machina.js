jQuery.fn.compare = function (g) {
    if (this.length != g.length) {
        return false;
    }
    var e = this.sort(),
        c = g.sort();
    for (var f = 0; g[f]; f++) {
        if (e[f] !== c[f]) {
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

function arrayLength(b) {
    while (b.length <= 4) {
        return true;
    }
}
function keyHighlight(f, e, g) {
    $(f).css("background-color", e);
    boxes.push(e);
    d = boxes.length;
    switch (d) {
    case 1:
        $("#key1").css("background-color", e);
        $("#key1").html(g);
        break;
    case 2:
        $("#key2").css("background-color", e);
        $("#key2").html(g);
        break;
    case 3:
        $("#key3").css("background-color", e);
        $("#key3").html(g);
        break;
    case 4:
        $("#key4").css("background-color", e);
        $("#key4").html(g);
        break;
    case 5:
        $("#key5").css("background-color", e);
        $("#key5").html(g);
        break;
    case 6:
        $("#key6").css("background-color", e);
        $("#key6").html(g);
        break;
    }
}
function nextGame(b, a) {
    $(b).load(a);
}
function otraVez(b) {
    alert(b);
}
function showForm(b, a) {
    $(b).replaceWith($(a));
    $(a).removeClass("hidden");
}
goodClicks = 0;
prompts = ["B will leave if and only if C leaves", "If X isn&#39;t 3rd, then L isn&#39;t 2nd", "If E is 5th, then K cannot come after M", "If G isn&#39;t 4th, then Y isn&#39;t after U", "If P isn&#39;t before N, then J is 2nd", "V won’t go to the zoo only if T goes", "If W shows, then Z won’t show", "If F comes after A, then O isn’t 8th", "If R is 9th, then U is third"];
goodChoices = ["c4", "c3", "c2", "c6", "c5", "c9", "c7", "c1", "c8"];

function photoShoot(c, b) {
    if (b === goodChoices[goodClicks]) {
        ++goodClicks;
        $("#score_right p").empty();
        $("#score_right p").append(prompts[goodClicks]);
    }
    if (goodClicks === 9) {
        timeTaken = (130 - count);
        user_data.push(timeTaken);
        nextGame("#demo_frame", "/puzzles/deus_ex_machina/game2");
        count = 130;
    }
    $("#demo_frame").css("background-color", "yellow");
    setTimeout(function () {
        $("#demo_frame").css("background-color", "#FFF");
    }, 180);
    cloned = $(c).clone();
    wide = c.width;
    high = c.height;
    var a = $('<div class="shot">').width(wide).height(high);
    a.append(cloned);
    a.css("margin-right", -160).prependTo(".photoShoot_bottom").animate({
        marginRight: 0
    }, "slow");
    $(".shot").eq(8).remove();
}
function resetGame(a, b, c, d) {
    ++reset;
    $(a).load(b);
    $(c).empty();
    d.length = 0;
}
function compareAnswers3(a, b, c, d, e, f) {
    if (a[0, 1, 2, 3, 4, 5] === b[0, 1, 2, 3, 4, 5]) {
        timeTaken2 = (130 - count);
        user_data.push(timeTaken2);
        nextGame(c, d);
        ++attempt;
        count = 130;
    } else {
        alert("Incorrect, please try again");
        resetGame(c, f, e, a);
        ++attempt;
    }
}
function compareAnswers4(f, e, h, g) {
    if ($(f).compare(e) == true) {
        $(h).replaceWith($(g));
        $(g).removeClass("hidden");
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
var boxes = [];
var boxes2 = [];
var allboxes1 = ["yellow", "red", "blue", "pink", "green", "purple"];
var allboxes3 = ["foo[]=1&foo[]=5&foo[]=2&foo[]=6&foo[]=3&foo[]=4"];
var allboxes4 = ["foo[]=5&foo[]=4&foo[]=2&foo[]=1&foo[]=3&foo[]=6"];
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
    $(".boxgrid.slideright p").html('In logic, "only if" means "then"');
});
