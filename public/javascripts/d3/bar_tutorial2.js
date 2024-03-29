var t = 1297110663, // start time (seconds since epoch)
      v = 70, // start value (subscribers)
      data = d3.range(33).map(next); // starting dataset

  function next() {
    return {
      time: ++t,
      value: v = ~~Math.max(10, Math.min(90, v + 10 * (Math.random() - .5)))
    };
 }

setInterval(function() {
data.shift();
data.push(next());
redraw();
}, 1500);

var w = 20,
h = 80;

var x = d3.scale.linear()
.domain([0, 1])
.range([0, w]);

var y = d3.scale.linear()
.domain([0, 100])
.rangeRound([0, h]);

var chart = d3.select(".barchartdemo2").append("svg")
.attr("class", "chart")
.attr("width", w * data.length - 1)
.attr("height", h);

chart.selectAll("rect")
.data(data)
.enter().append("rect")
.attr("x", function(d, i) { return x(i) - .5; })
.attr("y", function(d) { return h - y(d.value) - .5; })
.attr("width", w)
.attr("height", function(d) { return y(d.value); });

chart.append("line")
.attr("x1", 0)
.attr("x2", w * data.length)
.attr("y1", h - .5)
.attr("y2", h - .5)
.style("stroke", "#000");


 function redraw() {

    // Update…
    chart.selectAll("rect")
        .data(data)
      .transition()
        .duration(1000)
        .attr("y", function(d) { return h - y(d.value) - .5; })
        .attr("height", function(d) { return y(d.value); });

 }
