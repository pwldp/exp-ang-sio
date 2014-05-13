'use strict';

var easApp = angular.module('easApp', [
  'btford.socket-io',
  'angularCharts'
]).
factory('mySocket', function (socketFactory) {
    return socketFactory();
});
