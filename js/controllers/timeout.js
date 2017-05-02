(function(){

  var myApp = angular.module('myApp', []);

  myApp.controller('myController', function($scope, $timeout){

        //10 seconds delay
        $timeout( function(){
            $scope.test1 = "Hello World!";
        }, 5000 );

        //time
        $scope.time = 0;

        //timer callback
        var timer = function() {
            if( $scope.time < 5000 ) {
                $scope.time += 1000;
                $timeout(timer, 1000);
            }
        }

        //run!!
        $timeout(timer, 1000);

    });

})();
