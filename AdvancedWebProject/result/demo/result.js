(function() {
  var logModule;

  logModule = angular.module('logModule', ['ngTable']);

  logModule.controller('logCtrl', [
    '$scope', 'ngTableParams', function($scope, ngTableParams) {
      var accounts;
      accounts = [
        {
          name: "super",
          password: "super123",
          code: "2273"
        }, {
          name: "trantect",
          password: "abc123_",
          code: "test"
        }
      ];
      $scope.onClickImages = function() {
        document.getElementById("btn").style.color = "red";
        return console.log("click image");
      };
      return $scope.onEnterClick = function() {
        var curAccount, isExist;
        curAccount = {
          name: $scope.name,
          password: $scope.password,
          code: $scope.code
        };
        isExist = _.where(accounts, curAccount);
        if (isExist.length !== 0) {
          return window.confirm("Congratulation! You have logined Success");
        } else {
          $(".form-login").addClass("has-error");
          return alert("Login Failed!");
        }
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=result.js.map
