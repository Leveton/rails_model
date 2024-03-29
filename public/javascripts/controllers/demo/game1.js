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
function game2(a) {
    switch (a) {
    case "1":
        bigbox = "big doll";
        break;
    case "2":
        bigbox = "middle doll";
        break;
    case "3":
        bigbox = "little doll";
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
function compareAnswers(h, g, f, e, n, l) {
    if ($(h).compare(g) == true) {
        $(f).load(e);
        timeTaken2 = (450 - (timeTaken + count));
        user_data.push(timeTaken2);
    } else {
        alert("Incorrect, please try again");
        resetGame(f, n, l, h);
        ++attempt;
    }
}

var allboxes2 = ["pinklittle doll", "yellowbig doll", "purplemiddle doll", "redmiddle doll"];
var boxes = new Array();
$(function () {
    $(".doll_circle").draggable({
        start: function (d, c) {
            $(this);
            littlebox = $(this).attr("id");
        }
    });
    $(".droppable_lilDoll").droppable({
        drop: function (d, c) {
            $(this);
            bigbox = $(this).attr("id");
            game2(bigbox);
            if (arrayLength(boxes) == true) {
                $("#score_right").append("<p>" + (littlebox) + "-" + (bigbox) + "</p>");
                boxes.push((littlebox) + (bigbox));
            }
            $("#demo_frame").css("background-color", "yellow");
            setTimeout(function () {
                $("#demo_frame").css("background-color", "#fff");
            }, 180);
        }
    });
    $(".droppable_midDoll").droppable({
        drop: function (d, c) {
            $(this);
            bigbox = $(this).attr("id");
            game2(bigbox);
            if (arrayLength(boxes) == true) {
                $("#score_right").append("<p>" + (littlebox) + "-" + (bigbox) + "</p>");
                boxes.push((littlebox) + (bigbox));
            }
            $("#demo_frame").css("background-color", "yellow");
            setTimeout(function () {
                $("#demo_frame").css("background-color", "#fff");
            }, 180);
        }
    });
    $(".droppable0").droppable({
        drop: function (d, c) {
            $(this).css("background-color", "#0D2424");
            bigbox = $(this).attr("id");
            game2(bigbox);
            if (arrayLength(boxes) == true) {
                $("#score_right").append("<p>" + (littlebox) + "-" + (bigbox) + "</p>");
                boxes.push((littlebox) + (bigbox));
            }
            $("#demo_frame").css("background-color", "yellow");
            setTimeout(function () {
                $("#demo_frame").css("background-color", "#FFF");
            }, 180);
        }
    });
});
$(function () {
    $("#progressbar").progressbar({
        value: 33
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
    $(".boxgrid.slideright p").html("The little doll has only one block");
});
