'use strict';

/**
 * @ngdoc function
 * @name tickTockApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tickTockApp
 */
angular.module('tickTockApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
