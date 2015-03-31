testModule = angular.module('testModule',[])

testModule.service 'testService',['$http',($http)->

  _commonHttpPost = (_url,_params) ->
    csrf_token = $('meta[name=csrf-token]').attr('content')
    csrf_param = $('meta[name=csrf-param]').attr('content')
    if csrf_token && csrf_param
      _params[csrf_param]=csrf_token
    _promise =
      $http.post(_url,_params).then (_successData)->
        return _successData
      ,(_errData)->
        return _errData
    return _promise

  _commonHttpGet = (_url) ->
    _promise =
      $http.get(_url).then (_successData) ->
        return _successData
      ,(_errData) ->
        return _errData
    return _promise

  _mapDataList = (_list) ->
    _promise =
      _.map _list,(item,index)->
        item['_id'] = index
        return item
    return _promise

  return {
    commonHttpPost: _commonHttpPost
    commonHttpGet: _commonHttpGet
    modifyList: _mapDataList
  }

]

testModule.controller 'testController',['$scope','testService',($scope,testService)->

  $scope.testList = [{username:"user1"}, {username:"admin1"}]

  $scope.changeList = ()->
    $scope.testList = testService.modifyList($scope.testList)

  $scope.getTestDataList =() ->
    testService.commonHttpGet("/getTestData.json").then (_successData)->
      $scope.testList = _successData.data
    ,(_errData)->
      console.log _errData
      return []

  $scope.updateData = (_id)->
    _data = {}
    _data['_id'] = _id
    testService.commonHttpPost("/updateTestData.json",_data).then (_successData)->
      $scope.testList = _successData.data
    ,(_errData)->
      console.log _errData
      return []

]