function Graph(data){
    this.links = data;
};

Graph.prototype.initialize = function(){
    var links = this.links ;

    var nodes = {};

// Compute the distinct nodes from the links.
    links.forEach(function(link) {
        link.source = nodes[link.source] || (nodes[link.source] = {name: link.source});
        link.source.x = link.coords.source[0];
        link.source.y = link.coords.source[1];
        link.target = nodes[link.target] || (nodes[link.target] = {name: link.target});
        link.target.x = link.coords.target[0];
        link.target.y = link.coords.target[1];
    });

    var width = 960,
        height = 500;

    var drag = d3.behavior.drag()
        .origin(function(d) { return d; })
        .on("drag", function(){
            return false;
        });

    var force = d3.layout.force()
        .nodes(d3.values(nodes))
        .links(links)
        .size([width, height])
        //.linkDistance(60)
        .charge(-300)
        .on("tick", tick)
        .start();

    var svg = d3.select(".field").append("svg")
        .attr("width", width)
        .attr("height", height);

// Per-type markers, as they don't inherit styles.
    svg.append("defs").selectAll("marker")
        .data(["arrow"])
        .enter().append("marker")
        .attr("id", function(d) { return d; })
        .attr("viewBox", "0 -5 10 10")
        .attr("refX", 15)
        .attr("refY", 0)
        .attr("markerWidth", 6)
        .attr("markerHeight", 6)
        .attr("orient", "auto")
        .append("path")
        .attr("d", "M0,-5L10,0L0,5");

    var path = svg.append("g").selectAll("path")
        .data(force.links())
        .enter().append("path")
        .attr("class", function(d) { return "link " + d.type; })
        .attr("marker-end", function(d) { return "url(#" + d.type + ")"; });

    var circle = svg.append("g").selectAll("circle")
        .data(force.nodes())
        .enter().append("circle")
        .attr("r", 3)
        .call(drag);

    // Use elliptical arc path segments to doubly-encode directionality.
    function tick() {
        path
            .attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; })
            .attr("d", linkArc)
            .on('drag', function(d){
                return false;
            });

        circle.attr("transform", transform);
    }

    function linkArc(d) {
        var dx = d.target.x - d.source.x,
            dy = d.target.y - d.source.y,
            dr = 0; //Math.sqrt(dx * dx + dy * dy);
        return "M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y;
    }

    function transform(d) {
        return "translate(" + d.x + "," + d.y + ")";
    }

}