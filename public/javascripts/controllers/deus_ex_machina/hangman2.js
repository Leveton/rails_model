gallows = 0;
successfulClicks = 0;
promptStatements = ["foo", "If T shows before N, then P and W don't go", "If T comes before N, then P comes before W", "If no N, then either H comes before Z or P doesn't come before W", "Z doesn't come before N", "If N doesn't come before W, then Z comes", "If W shows, then N doesn't show", "If N shows and W doesn't show, then Z doesn't show", "If H comes before W, then P doesn't come before N"];
guessChoices = ["hm11", "hm15", "hm12", "hm17", "hm9", "hm13", "hm10", "hm14", "hm16"];

function choiceChosen(g, f, i, h) {
    if (i !== guessChoices[successfulClicks]) {
        ++gallows;
        g = document.getElementById("hm" + (gallows));
        $(g).show(1700);
    } else {
        ++successfulClicks;
        $("#score_right p").empty();
        $("#score_right p").append(promptStatements[successfulClicks]);
    }
    if (gallows == 9) {
        $(".hangman2").replaceWith($(".hangman1"));
        $(".hangman1").show();
    }
    if (successfulClicks == 9) {
        timeTaken3 = (130 - count);
        ++attempt
        user_data.push(timeTaken3);
        attempts.push(attempt);
        resets.push(reset);
        d3_charts(".user_barchart", ".user_y_axis", ".prepcloud_barchart", ".prepcloud_y_axis", data, y_time_data, user_data);
        d3_charts(".user_barchart2", ".user_y_axis2", ".prepcloud_barchart2", ".prepcloud_y_axis2", ave_attempts, y_attempt_data, attempts);
        d3_charts(".user_barchart3", ".user_y_axis3", ".prepcloud_barchart3", ".prepcloud_y_axis3", ave_resets, y_reset_data, resets);
        $("#demo_frame").replaceWith($("#exercise_form"));
        $("#exercise_form").removeClass("hidden");
        clearInterval(countdown);
    }
    e = $(f).clone();
    appendAlbum(f);
    appendChoices(e, h);
}
function appendAlbum(a) {
    $(".hangman_album").append(a);
}
function appendChoices(b, a) {
    $(a).append(b);
}
function otraVez(a) {
    alert(a);
}
function temptemp() {
    $("#demo_frame").replaceWith($("#exercise_form"));
    $("#exercise_form").removeClass("hidden");
    clearInterval(countdown);
}
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
    $(".boxgrid.slideright p").html("key 3 is played after key 6");
});
