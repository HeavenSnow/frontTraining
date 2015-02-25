logModule = angular.module('logModule',['ngTable'])

logModule.controller('logCtrl',['$scope','ngTableParams',($scope,ngTableParams)->

  $scope.clickFlag = false

  accounts = [
    {name:"super",password:"super123",code:"2273"}
    {name:"trantect",password:"abc123_",code:"test"}
  ]

  $scope.onClickImages = ()->
    console.log("click image");
    $scope.clickFlag = true;

  $scope.onEnterClick = ()->
    curAccount =
      name:$scope.name
      password:$scope.password
      code:$scope.code

    isExist = _.where accounts,curAccount

    if isExist.length != 0
      window.confirm("Congratulation! You have logined Success")
    else
      $(".form-login").addClass("has-error")
      alert("Login Failed!")
    
    $scope.clickFlag = false
])