define([
    'underscore',
    'd3'
], function (_) {
    'use strict';

    var GraphController = function ($scope, VectorService) {
        this.$scope = $scope;
        this.vectorService = VectorService;

        this.initialize();
	};

    var prototype = GraphController.prototype;

    prototype.initialize = function(){
        var self = this;
        var vectorsPromise = this.vectorService.getVectors();

        vectorsPromise.$promise.then(function(result){
            self.vectors = result.vectors.points;
            self.links = result.vectors.links;
            self.drawLinks();
        });
    };

    prototype.getLinks = function(){
        var self = this;
        var links = [];
        for (var i = 0; i < self.links.length; i++){
            links[i]= {};
            links[i].source = _.findWhere(self.vectors, {id: self.links[i].source});
            links[i].target = _.findWhere(self.vectors, {id: self.links[i].target});
        }
        return links;
    };

    prototype.drawLinks = function(){
        var self = this;
        console.log(this.vectors);

        var width = 700,
            height = 400;

        var radius = 2;
        var numCircles = this.vectors.length;
        var d3LineLinear = d3.svg.line().interpolate("linear");
        var links = self.getLinks();

        console.log(links);

        //A LIST OF LINKS BETWEEN CIRCLES


        function createDefs(defs) {
            var dropShadowFilter = defs.append('svg:filter').attr('id', 'dropShadow');
            dropShadowFilter.append('svg:feGaussianBlur').attr('in', 'SourceAlpha').attr('stdDeviation', 1);
            dropShadowFilter.append('svg:feOffset').attr('dx', 0).attr('dy', 1).attr('result', 'offsetblur');
            var feMerge = dropShadowFilter.append('svg:feMerge');
            feMerge.append('svg:feMergeNode');
            feMerge.append('svg:feMergeNode').attr('in', "SourceGraphic");
        }

        var drag = d3.behavior.drag().origin(Object).on("drag", function() {
            //dragmove(this);
        });


        var circles = d3.range(numCircles).map(function(i, d) {
            if (self.vectors[i]){
                return [self.vectors[i].coords[0], self.vectors[i].coords[1]];
            }
        });

        //GLOBAL STRENGTH SCALE
        var strength_scale = d3.scale.linear().range([2, 10]) /* thickness range for flow lines */
            .domain([0, d3.max(links, function(d) {
                return d.strength*10;
            })]);

        var svg = d3.select(".field.gray-border").append("svg").attr("width", width).attr("height", height);

        var g_lines = svg.append("g").attr("class", "lines");
        var g_circles = svg.append("g").attr("class", "circles");

        //SHADOW DEFINITION
        createDefs(svg.append('svg:defs'));

        $.each(circles, function(i, d) {
            g_circles.append("circle")
                .attr('filter', 'url(#dropShadow)')
                .attr("class", "circle")
                .attr("id", "circle" + i)
                .attr("r", radius)
                .attr("cx", d[0])
                .attr("cy", d[1])
                .call(drag);
        });

        g_lines.selectAll(".link_line").data(links).enter()
            .append("path").attr("d", function(d) {
                return drawCurve(d);
            });

        function drawCurve(d) {
            console.log(d);
            var slope = Math.atan2((+d3.select('#circle' + d.target).attr("cy") - d3.select('#circle' + d.source).attr("cy")), (+d3.select('#circle' + d.target).attr("cx") - d3.select('#circle' + d.source).attr("cx")));
            var slopePlus90 = Math.atan2((+d3.select('#circle' + d.target).attr("cy") - d3.select('#circle' + d.source).attr("cy")), (+d3.select('#circle' + d.target).attr("cx") - d3.select('#circle' + d.source).attr("cx"))) + (Math.PI / 2);


            var sourceX = +d3.select('#circle' + d.source).attr("cx");
            var sourceY = +d3.select('#circle' + d.source).attr("cy");
            var targetX = +d3.select('#circle' + d.target).attr("cx");
            var targetY = +d3.select('#circle' + d.target).attr("cy");

            var arrowOffset = 15;
            var points = [];
            points.push([sourceX + radius * Math.cos(slope) - strength_scale(d.strength) * Math.cos(slopePlus90), sourceY + radius * Math.sin(slope) - strength_scale(d.strength) * Math.sin(slopePlus90)]);
            points.push([sourceX + radius * Math.cos(slope), sourceY + radius * Math.sin(slope)]);
            points.push([targetX - radius * Math.cos(slope), targetY - radius * Math.sin(slope)]);
            points.push([targetX - (radius + arrowOffset) * Math.cos(slope) - strength_scale(d.strength + (arrowOffset / 2)) * Math.cos(slopePlus90), targetY - (radius + arrowOffset) * Math.sin(slope) - strength_scale(d.strength + (arrowOffset / 2)) * Math.sin(slopePlus90)]);
            points.push([targetX - (radius + arrowOffset) * Math.cos(slope) - strength_scale(d.strength) * Math.cos(slopePlus90), targetY - (radius + arrowOffset) * Math.sin(slope) - strength_scale(d.strength) * Math.sin(slopePlus90)]);
            return d3LineLinear(points) + "Z";
        }

    };

	
    GraphController.$inject = ['$scope', 'VectorService'];

    return GraphController;
});