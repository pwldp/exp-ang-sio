'use strict';

easApp.controller('mainCtrl', function($scope, mySocket) {
    
    $scope.ang_ctrl_status = 'working';
    
    mySocket.on('send:time', function (data) {
	$scope.dt_from_server = data.time;
    });
    
    
});
