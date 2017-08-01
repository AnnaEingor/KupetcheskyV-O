orderApp.controller("tableCtrl", function($scope){
  $scope.mytime = new Date();
   $scope.hstep = 1;
   $scope.mstep = 1;
   $scope.clientName = "Name";
   $scope.quantity = "";

   $scope.clear = function() {
    $scope.mytime = null;
    $scope.dt = null;
  };

  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

   $scope.popup1 = {
    opened: false
  };

  $scope.setDate = function(year, month, day) {
    $scope.dt = new Date(year, month, day);
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
  $scope.altInputFormats = ['M!/d!/yyyy'];

  

 $scope.dateOptions = {
    dateDisabled: disabled,
    formatYear: 'yy',
    maxDate: new Date(2025, 7, 09),
    minDate: new Date(),
    startingDay: 1
  };

});