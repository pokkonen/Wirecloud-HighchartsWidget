"use strict";

var theChart;

function listen() {
    MashupPlatform.wiring.registerCallback('Data', function(graphData) {
		// data = [graphData, command to update graph]
        console.log(graphData)
		// Updates only the data on the graph
		if (graphData.update === true) {
			theChart.update({
				series: graphData.data,
		    });
		// Initializes the graph
		} else {
			theChart = Highcharts.chart('container', {
				title : {text: graphData.titles[0], x: -20},
				subtitle: {text: graphData.titles[1], x: -20},
				xAxis: {categories: graphData.categories},
				yAxis: {title: {text: graphData.titles[3]},
					plotLines: [{ value: 0, width: 2, color: "#808080" }]
				},
				tooltip: { valueSuffix: "" },
				legend: { layout: "vertical", align: "right", verticalAlign: "middle", borderWidth: 0 },
				series: graphData.data,
			});
		}
	});

	// $('#plain').click(function () {
    //     chart.update({
    //         chart: {
    //             inverted: false,
    //             polar: false
    //         },
    //         subtitle: {
    //             text: 'Plain'
    //         }
    //     });
    // });
	//
    // $('#inverted').click(function () {
    //     chart.update({
    //         chart: {
    //             inverted: true,
    //             polar: false
    //         },
    //         subtitle: {
    //             text: 'Inverted'
    //         }
    //     });
    // });
	//
    // $('#polar').click(function () {
    //     chart.update({
    //         chart: {
    //             inverted: false,
    //             polar: true
    //         },
    //         subtitle: {
    //             text: 'Polar'
    //         }
    //     });
    // });

	// <button id="plain">Plain</button>
	// <button id="inverted">Inverted</button>
	// <button id="polar">Polar</button>
}

document.addEventListener('DOMContentLoaded', function() {
    listen();
})
