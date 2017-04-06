/**
 * Created by ashu_dev on 04/04/17.
 */

var app = angular.module('mukeshapp');

app.controller('ctrl1' , function($scope,$rootScope,printService){
     console.log(printService,"dfsefdfdfdf");
    this.common = 'ashu' ;
    $scope.email = "fjgsdzhfgszhfsdzdsgfzdg";
    $scope.showbutton = true;
    printService.name = 'dhsh'
    //$scope.common = 'ashu'



    $scope.doso = function(){
        $scope.value1 = 'controller1';
        $rootScope.name = 'ashu';

    }
});

app.controller('ctrl2' , function($scope,$rootScope,printService){

    $scope.email = "fjgsdzhfgszhfsdzdsgfzdg";
   $scope.common = 'mukesh';



    $scope.xyz = function(){
        $scope.value2 = 'controller2';
       // $rootScope.name = 'mukesh'




    }
});




