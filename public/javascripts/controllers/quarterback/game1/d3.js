data = [83];
user_data = [];
y_data = [1];

function d3_charts(left, left_inner, right, right_inner, ave_score, y_axis) {
    var a = d3.scale.linear().domain([0, d3.max(data)]).range([0, 420]);
    var b = d3.scale.linear().domain([0, d3.max(user_data)]).range([0, 420]);
    var h = d3.scale.ordinal().domain(data).rangeBands([0, 120]);
    var e = d3.scale.ordinal().domain(user_data).rangeBands([0, 120]);
    var g = d3.select(left).append("svg:svg").attr("class", "chart").attr("width", 440).attr("height", 140).append("svg:g").attr("transform", "translate(10,15)");
    var f = d3.select(left-inner).append("svg:svg").attr("class", "chart2").attr("width", 440).attr("height", 140).append("svg:g").attr("transform", "translate(10,15)");
    var d = d3.select(".prepcloud_barchart").append("svg:svg").attr("class", "chart2").attr("width", 440).attr("height", 140).append("svg:g").attr("transform", "translate(10,15)");
    var c = d3.select(".prepcloud_y_axis").append("svg:svg").attr("class", "chart2").attr("width", 440).attr("height", 140).append("svg:g").attr("transform", "translate(10,15)");
    g.selectAll("line").data(a.ticks(10)).enter().append("svg:line").attr("x1", a).attr("x2", a).attr("y1", 0).attr("y2", 120).attr("stroke", "#ccc");
    g.selectAll("text.rule").data(a.ticks(10)).enter().append("svg:text").attr("x", a).attr("y", 0).attr("dy", -3).attr("text-anchor", "middle").text(String);
    g.selectAll("rect").data(data).enter().append("svg:rect").attr("y", h).attr("width", a).attr("height", h.rangeBand());
    d.selectAll("line").data(b.ticks(10)).enter().append("svg:line").attr("x1", b).attr("x2", b).attr("y1", 0).attr("y2", 120).attr("stroke", "#ccc");
    d.selectAll("text.rule").data(b.ticks(10)).enter().append("svg:text").attr("x", b).attr("y", 0).attr("dy", -3).attr("text-anchor", "middle").text(String);
    d.selectAll("rect").data(user_data).enter().append("svg:rect").attr("y", e).attr("width", b).attr("height", e.rangeBand());
    g.selectAll("text.bar").data(data).enter().append("svg:text").attr("class", "bar").attr("x", a).attr("y", function (i) {
        return h(i) + h.rangeBand() / 2;
    }).attr("dx", -3).attr("dy", ".35em").attr("font-size", "2.0em").attr("text-anchor", "end").text(String);
    f.selectAll("text.bar").data(y_data).enter().append("svg:text").attr("class", "bar").attr("x", 0).attr("y", function (i) {
        return e(i) + e.rangeBand() / 2;
    }).attr("dx", -3).attr("dy", ".35em").attr("font-size", "1.5em").attr("text-anchor", "end").text(String);
    d.selectAll("text.bar").data(user_data).enter().append("svg:text").attr("class", "bar").attr("x", b).attr("y", function (i) {
        return e(i) + e.rangeBand() / 2;
    }).attr("dx", -3).attr("dy", ".35em").attr("font-size", "2.0em").attr("text-anchor", "end").text(String);
    c.selectAll("text.bar").data(y_data).enter().append("svg:text").attr("class", "bar").attr("x", 0).attr("y", function (i) {
        return e(i) + e.rangeBand() / 2;
    }).attr("dx", -3).attr("dy", ".35em").attr("font-size", "1.5em").attr("text-anchor", "end").text(String);
    g.append("line").attr("y1", 0).attr("y2", 120).style("stroke", "#000");
    d.append("line").attr("y1", 0).attr("y2", 120).style("stroke", "#000");
}
$(function () {
    $("#dialog-message").dialog({
        modal: true,
        buttons: {
            Ok: function () {
                $(this).dialog("close");
            }
        }
    });
});
$(function () {
    $("#progressbar").progressbar({
        value: 5
    });
});
