'use strict';

var easApp = angular.module('easApp', [
  'btford.socket-io',
]).
factory('mySocket', function (socketFactory) {
    return socketFactory();
});
