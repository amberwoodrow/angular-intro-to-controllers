// The first line tells Angular to create a module named firstApp. "angular.module('firstApp', [])"" 
// returns a new module which we use on the next line when we call .controller() on app.
var app = angular.module("firstApp", []); 
app.controller("MyFirstController", function($scope){
  $scope.name = "Severus Snape";
});

// We're declaring a new controller named "MyFirstController". The first argument to .controller()
// is just the name of the new controller, and the second argument is a function that defines the
// functionality of the controller. Inside of "MyFirstController", we're adding a name property to
// the $scope with the value "Severus Snape".

// Note: This is just one way of writing a controller and adding properties to the $scope.


var appWee = angular.module("weeApp", []); 
app.controller("ExercisesController", function($scope){
  $scope.favColor = "Chicken";

  // Calculate Seconds in a century assuming no leap years
  var hoursInDay = 24;
  var daysInYear = 365;
  var secondsMinuites = 60;
  var hoursInYear = hoursInDay * daysInYear;
  var hoursIn100Years = hoursInYear * 100;
  var minutesInACentury = hoursIn100Years * secondsMinuites;
  $scope.secondsInACentury = minutesInACentury * secondsMinuites;

  $scope.time = new Date();
});
// secondsInDay = 