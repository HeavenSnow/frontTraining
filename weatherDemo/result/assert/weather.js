var weatherModel = angular.module('weather', []);

weatherModel.directive('validDate',function(){
  return{
    require:"ngModel",
    link:function(scope,elm,attrs,ctl){

      ctl.$parsers.push(function(viewValue){
        var pattern = /^[1-2][0-9][0-9][0-9]-[0-1]{0,1}[0-9]-[0-3]{0,1}[0-9]$/;
        var isDate = pattern.test(viewValue);
        ctl.$setValidity("isDate",isDate);
      })
    }
  }
})


weatherModel.service("weather",['$http',function($http){

  var codeWeather = function(temperature){
    var high = temperature.split("~")[0];
    var low = 0;
    if(temperature.split("~")[1]){
      low = temperature.split("~")[1].split("℃")[0];
    }else{
      low = high;
    }
    return [high,low]
  }

  this.getWeather = function(city){
    var weatherData = []
    var url = "http://api.map.baidu.com/telematics/v3/weatherDemo?location="+city+"&output=json&ak=bgbdGULrvIB58P0floQ49a2G&callback=JSON_CALLBACK"
    $http.jsonp(url).success(function(data){
      if(data.error=='0'){
        var weather = data.results[0].weather_data;
        for(d in weather){
          var _weatherData={};
          _weatherData['date'] = weather[d].date;
          _weatherData['weather'] = weather[d].weather;
          _weatherData['high'] = codeWeather(weather[d].temperature)[0];
          _weatherData['low'] = codeWeather(weather[d].temperature)[1];
          weatherData.push(_weatherData);
        }
      }
    })
    return weatherData;
  }

  return {
    getWeather:this.getWeather
  }
}]);

weatherModel.controller('weatherCtl', ['$scope','weather', function($scope,weather) {
  $scope.time = '';
  $scope.city = '';
  $scope.weatherData = [];
  $scope.getWeather = function(){
    $scope.weatherData = weather.getWeather($scope.city);
  }

}]);