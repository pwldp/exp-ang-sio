'use strict';

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getChartRandType(){
    var chartTypes = ['area','bar','line','pie'];
    return chartTypes[getRandomInt(0, chartTypes.length-1)];
};

easApp.controller('mainCtrl', function($scope, mySocket) {
    
    $scope.ang_ctrl_status = 'working';
    
    mySocket.on('send:time', function (data) {
	$scope.dt_from_server = data.time;
    });
    //
    // charts handle below
    // based on: Angular-charts example (http://plnkr.co/edit/T9J7bz?p=preview)
    $scope.chartConfig = {
	title: 'Products',
	tooltips: true,
	labels: false,
	mouseover: function() {},
	mouseout: function() {},
	click: function() {},
	legend: {
	display: true,
	//could be 'left, right'
	position: 'right'
	}
    };
    //
    $scope.chartType = 'bar';
    mySocket.on('send:chartdata', function (data) {
	// change chart type
	$scope.chartType = getChartRandType();
	// set chart data
	$scope.chartData = data.data;
    });
    
});
