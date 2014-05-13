'use strict';


function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getThreeNumbers(){
    var ret=[0,0,0];
    for (var i=0; i<3; i++){
	ret[i] = getRandomInt(i*20, 666);
    };
    return ret;
};


function setChartData(){
    return {
	series: ['Sales', 'Income', 'Expense', 'Laptops', 'Keyboards'],
	data: [{
	    x: "Laptops",
	    y: getThreeNumbers()
	}, {
	    x: "Desktops",
	    y: getThreeNumbers()
	}, {
	    x: "Mobiles",
	    y: getThreeNumbers()
	}, {
	    x: "Tablets",
	    y: getThreeNumbers()
	}]
    };
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
    
    $scope.chartData = setChartData();
    
    setInterval(function(){
	$scope.chartData = setChartData();	
    }, 5000);
    
    /*
    $scope.chartData = {
	series: ['Sales', 'Income', 'Expense', 'Laptops', 'Keyboards'],
	data: [{
	    x: "Laptops",
	    y: [100, 500, 0],
	    tooltip: "this is tooltip"
	}, {
	    x: "Desktops",
	    y: [300, 100, 100]
	}, {
	    x: "Mobiles",
	    y: [351]
	}, {
	    x: "Tablets",
	    y: [54, 0, 879]
	}]
    };
    */
    
});
