logModule = angular.module('logModule',['ngTable'])

logModule.controller('logCtrl',['$scope','ngTableParams',($scope,ngTableParams)->

  accounts = [
    {name:"super",password:"super123",code:"2273"}
    {name:"trantect",password:"abc123_",code:"test"}
  ]

  $scope.onClickImages = ()->
    document.getElementById("btn").style.color = "red";
    console.log("click image");

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

])