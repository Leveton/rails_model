user_data = [];
reset = 0;
resets = [];
attempt = 0;
attempts = [];
data = [134, 80, 145];
ave_attempts = [3];
ave_resets = [3];
y_time_data = [1, 2, 3];
y_reset_data = [1];
y_attempt_data = [1];

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
