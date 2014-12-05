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

        var width = 700,
            height = 400;

        var radius = 2;
        var numCircles = this.vectors.length;
        var links = self.getLinks();

        function createDefs(defs) {
            var dropShadowFilter = defs.append('svg:filter').attr('id', 'dropShadow');
            dropShadowFilter.append('svg:feGaussianBlur').attr('in', 'SourceAlpha').attr('stdDeviation', 1);
            dropShadowFilter.append('svg:feOffset').attr('dx', 0).attr('dy', 1).attr('result', 'offsetblur');
            var feMerge = dropShadowFilter.append('svg:feMerge');
            feMerge.append('svg:feMergeNode');
            feMerge.append('svg:feMergeNode').attr('in', "SourceGraphic");
            defs.append('svg:marker')
                .attr('id', 'markerArrow')
                .attr("viewBox", "0 -5 10 10")
                .attr("refX", 15)
                .attr("refY", 0)
                .attr('markerWidth', '6')
                .attr('markerHeight', '6')
                .attr('orient', 'auto')
                .append('svg:path')
                .attr('d', 'M0,-5L10,0L0,5')
                .attr('style', 'fill: #000000;')
        }

        var drag = d3.behavior.drag().origin(Object).on("drag", function() {
            //dragmove(this);
        });


        var circles = d3.range(numCircles).map(function(i, d) {
            if (self.vectors[i]){
                return [self.vectors[i].coords[0], self.vectors[i].coords[1], self.vectors[i].id];
            }
        });

        var svg = d3.select(".field.gray-border").append("svg").attr("width", width).attr("height", height);

        var g_lines = svg.append("g").attr("class", "lines");
        var g_circles = svg.append("g").attr("class", "circles");

        //SHADOW DEFINITION
        createDefs(svg.append('svg:defs'));

        $.each(circles, function(i, d) {
            g_circles.append("circle")
                .attr('filter', 'url(#dropShadow)')
                .attr("class", "circle")
                .attr("id", "circle" + d[2])
                .attr("r", radius)
                .attr("cx", d[0])
                .attr("cy", d[1])
                .call(drag);
        });

        g_lines.selectAll(".link_line").data(links).enter()
            .append("line")
            .attr("x1", function(d) {
                return d.source.coords[0] || 0;
            })
            .attr("x2", function(d) {
                return d.target.coords[0]|| 0;
            })
            .attr("y1", function(d) {
                return d.source.coords[1] || 0;
            })
            .attr("y2", function(d) {
                return d.target.coords[1] || 0;
            })
            .attr("stroke", "black")
            .attr("stroke-width", "1")
            .attr("marker-end", "url(#markerArrow)");

    };

	
    GraphController.$inject = ['$scope', 'VectorService'];

    return GraphController;
});