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
        ++attempt;
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
var allboxes1 = ["L1", "M2", "J3", "N4", "K5"];
var boxes = [];
$(function () {
    $(".draggable").draggable({
        start: function (a, b) {
            $(this);
            littlebox = $(this).attr("id");
        }
    });
    $(".droppable").droppable({
        drop: function (a, b) {
            $(this).css("background-color", "#273677");
            bigbox = $(this).attr("id");
            if (arrayLength(boxes) == true) {
                $("#score_right").append("<p>" + (littlebox) + (bigbox) + "</p>");
                boxes.push((littlebox) + (bigbox));
            }
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
    $(".boxgrid.slideright p").html("L and M are next to each other");
});
$(function () {
    $("#dialog-message").dialog({
        modal: true
    });
});
$(function () {
    $("#progressbar").progressbar({
        value: 5
    });
});
user_data = [];
reset = 0;
resets = [];
attempt = 0;
attempts = [];
data = [83];
ave_attempts = [3];
ave_resets = [3];
y_data = [1];

function d3_charts(l, w, v, k, i, j, u) {
    var t = d3.scale.linear().domain([0, d3.max(i)]).range([0, 420]);
    var s = d3.scale.linear().domain([0, d3.max(u)]).range([0, 420]);
    var m = d3.scale.ordinal().domain(i).rangeBands([0, 120]);
    var p = d3.scale.ordinal().domain(u).rangeBands([0, 120]);
    var n = d3.select(l).append("svg:svg").attr("class", "chart").attr("width", 440).attr("height", 140).append("svg:g").attr("transform", "translate(10,15)");
    var o = d3.select(w).append("svg:svg").attr("class", "chart2").attr("width", 440).attr("height", 140).append("svg:g").attr("transform", "translate(10,15)");
    var q = d3.select(v).append("svg:svg").attr("class", "chart2").attr("width", 440).attr("height", 140).append("svg:g").attr("transform", "translate(10,15)");
    var r = d3.select(k).append("svg:svg").attr("class", "chart2").attr("width", 440).attr("height", 140).append("svg:g").attr("transform", "translate(10,15)");
    n.selectAll("line").data(t.ticks(10)).enter().append("svg:line").attr("x1", t).attr("x2", t).attr("y1", 0).attr("y2", 120).attr("stroke", "#ccc");
    n.selectAll("text.rule").data(t.ticks(10)).enter().append("svg:text").attr("x", t).attr("y", 0).attr("dy", -3).attr("text-anchor", "middle").text(String);
    n.selectAll("rect").data(i).enter().append("svg:rect").attr("y", m).attr("width", t).attr("height", m.rangeBand());
    q.selectAll("line").data(s.ticks(10)).enter().append("svg:line").attr("x1", s).attr("x2", s).attr("y1", 0).attr("y2", 120).attr("stroke", "#ccc");
    q.selectAll("text.rule").data(s.ticks(10)).enter().append("svg:text").attr("x", s).attr("y", 0).attr("dy", -3).attr("text-anchor", "middle").text(String);
    q.selectAll("rect").data(u).enter().append("svg:rect").attr("y", p).attr("width", s).attr("height", p.rangeBand());
    n.selectAll("text.bar").data(i).enter().append("svg:text").attr("class", "bar").attr("x", t).attr("y", function (a) {
        return m(a) + m.rangeBand() / 2;
    }).attr("dx", -3).attr("dy", ".35em").attr("font-size", "2.0em").attr("text-anchor", "end").text(String);
    o.selectAll("text.bar").data(j).enter().append("svg:text").attr("class", "bar").attr("x", 0).attr("y", function (a) {
        return p(a) + p.rangeBand() / 2;
    }).attr("dx", -3).attr("dy", ".35em").attr("font-size", "1.5em").attr("text-anchor", "end").text(String);
    q.selectAll("text.bar").data(u).enter().append("svg:text").attr("class", "bar").attr("x", s).attr("y", function (a) {
        return p(a) + p.rangeBand() / 2;
    }).attr("dx", -3).attr("dy", ".35em").attr("font-size", "2.0em").attr("text-anchor", "end").text(String);
    r.selectAll("text.bar").data(j).enter().append("svg:text").attr("class", "bar").attr("x", 0).attr("y", function (a) {
        return p(a) + p.rangeBand() / 2;
    }).attr("dx", -3).attr("dy", ".35em").attr("font-size", "1.5em").attr("text-anchor", "end").text(String);
    n.append("line").attr("y1", 0).attr("y2", 120).style("stroke", "#000");
    q.append("line").attr("y1", 0).attr("y2", 120).style("stroke", "#000");
}
