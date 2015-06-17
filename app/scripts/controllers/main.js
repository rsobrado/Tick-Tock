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
    
    $scope.clock = ''; // initialise the time variable
    $scope.tickInterval = 1000; //ms
    $scope.alarm = false;
    $scope.alarmTime = '';
    $scope.crono = false;

    var tick = function () {
        $scope.clock = Date.now(); // get the current time
        $timeout(tick, $scope.tickInterval); // reset the timer
    };

    
    $scope.showAlarm = function() {
        $scope.alarm = !$scope.alarm;
        if($scope.crono){
        	$scope.crono = false;
        }
    };
    $scope.showCrono = function() {
        $scope.crono = !$scope.crono;
        if($scope.alarm){
        	$scope.alarm = false;
        }
    };

    // Start the timer
    $timeout(tick, $scope.tickInterval);


  });
