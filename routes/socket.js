/*
* Serve content over a socket
*/


function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getThreeNumbers(){
    var ret=[0,0,0];
    var d = new Date();
    var n = d.getSeconds();
    for (var i=0; i<3; i++){
	ret[i] = getRandomInt(0, 1+n*10);
    };
    return ret;
};


module.exports = function (socket) {
    
    setInterval(function () {
	socket.emit('send:time', {
	    time: (new Date()).toString()
	});
    }, 1000);
    //
    setInterval(function () {
	
	console.log(getThreeNumbers());
	
	socket.emit('send:chartdata', {
	    data: {
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
	    }
	});
    }, 5000);
    //
};