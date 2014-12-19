    angular.module('plunker', ['ui.bootstrap']);
var DatepickerDemoCtrl = function ($scope) {
  $scope.today = function() {
    $scope.dt = new Date(); //serve para já iniciar com a date do dia.
      $scope.toggleMin = function() {
          $scope.minDate = ( $scope.minDate );
      };

  };
  $scope.today();


  $scope.showWeeks = true;
  $scope.toggleWeeks = function () {
    $scope.showWeeks = ! $scope.showWeeks;
  };

  $scope.clear = function () {
    $scope.dt = null;
  };

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return ( mode === 'day' && ( date.getDay() === null) );
  };


  $scope.toggleMin();

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };


  $scope.dateOptions = {
    'year-format': "'yy'",
    'starting-day': 1
  };


  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd-MM-yyyy','shortDate'];
  $scope.format = $scope.formats[2];
};