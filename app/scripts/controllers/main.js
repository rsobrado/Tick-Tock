'use strict';

/**
 * @ngdoc function
 * @name tickTockApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tickTockApp
 */
angular.module('tickTockApp')
  .controller('MainCtrl', function ($scope,$timeout) {
    
    $scope.date = new Date();
    $scope.clock = ''; // initialise the time variable
    $scope.tickInterval = 1000; //ms

    var tick = function () {
        $scope.clock = Date.now(); // get the current time
        $timeout(tick, $scope.tickInterval); // reset the timer
    };

    // Start the timer
    $timeout(tick, $scope.tickInterval);


  });
