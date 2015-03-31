'use strict';

describe('Test result.js file', function() {
  beforeEach(function () {
    module('testModule');
  });

  // Test functions in service named `testService`
  describe('Test `testService` of module `testModule`', function() {
    var testService, httpBackend;

    beforeEach(function () {
      inject(function ($injector) {
        testService = $injector.get('testService');
        httpBackend = $injector.get('$httpBackend');
      });
    });

    it('should contain a `testService`', function () {
      expect(testService).not.toBe(null);
    });

    it('accountService should contain several(7) methods', function() {
      expect(Object.keys(testService).length).toBe(3);
      expect(testService.commonHttpPost).not.toBe(null);
      expect(typeof testService.commonHttpPost).toBe('function');

      expect(testService.commonHttpGet).not.toBe(null);
      expect(typeof testService.commonHttpGet).toBe('function');

      expect(testService.modifyList).not.toBe(null);
      expect(typeof testService.modifyList).toBe('function');
    });

    describe('test commonHttpPost()', function() {
      it('with `null` _data', function () {
        expect(typeof testService.commonHttpPost).toBe('function');
      });

      it('with normal _data', function () {
        expect(typeof testService.commonHttpPost).toBe('function');
      });
    });

    describe('test commonHttpGet()', function() {
      it('with `null` _data', function () {
        expect(typeof testService.commonHttpPost).toBe('function');
      });

      it('with normal _data', function () {
        expect(typeof testService.commonHttpPost).toBe('function');
      });
    });

    describe('test modifyList()', function() {
      it('with `null` _data', function () {
        expect(typeof testService.commonHttpPost).toBe('function');
      });

      it('with normal _data', function () {
        expect(typeof testService.commonHttpPost).toBe('function');
      });
    });
  });

  //  mock `testService` to test `testController`
  describe('Test `testController` of module `testModule`', function() {
    var testService;
    var testServiceDeferred;
    var testController;
    var scope = {};
    beforeEach(function () {
      inject(function($injector, $controller, $rootScope, $q) {

        testService = jasmine.createSpyObj('testService', ['commonHttpPost', 'commonHttpGet','modifyList']);
        scope = $rootScope.$new();
        testServiceDeferred = $q.defer();

        testService.commonHttpPost.andReturn(testServiceDeferred.promise);
        testService.commonHttpGet.andReturn(testServiceDeferred.promise);
        testService.modifyList = function(_list) {
          _list.push({username:"lily"});
          return _list
        };

        testController = $controller('testController', {$scope: scope, testService:testService});
      });
    });

    it('Test function `changeList`', inject(function($rootScope) {
      var _list = [{username:"user1"}, {username:"admin1"}];
      expect(scope.testList).toEqual(_list);
      scope.changeList();
      $rootScope.$apply();
      var _listResult = [{username:"user1"}, {username:"admin1"},{username:"lily"}];
      expect(scope.testList).toEqual(_listResult);
    }));

    describe('Test function `getTestDataList`', function() {
      it(', when get data success', inject(function ($rootScope) {
        var _list = [{username: "user"}, {username: "admin"}];
        scope.getTestDataList();
        testServiceDeferred.resolve(_list);
        $rootScope.$apply();
        expect(scope.testList).toEqual(undefined);
      }));

      it(', when get data failed', inject(function ($rootScope) {
        var _list = [{username:"user1"}, {username:"admin1"}];
        scope.getTestDataList();
        testServiceDeferred.reject();
        $rootScope.$apply();
        expect(scope.testList).toEqual(_list);
      }));
    });

    describe('Test function `updateData`', function() {
      it('When `_id` is null and update failed', inject(function($rootScope) {
        scope.updateData(null);
        testServiceDeferred.resolve([]);
        $rootScope.$apply();
        expect(scope.testList).toEqual(undefined);
      }));

      it('When `_id` is not null and update success', inject(function($rootScope) {
        var _list = [{id:1, username: "user"}, {id: 2, username: "admin"}];
        scope.updateData(1);
        testServiceDeferred.resolve(_list);
        $rootScope.$apply();
        expect(scope.testList).toEqual(undefined);
      }));

      it('When `_id` is not null and update failed', inject(function($rootScope) {
        scope.updateData(2);
        var _list = [{username:"user1"}, {username:"admin1"}];
        testServiceDeferred.reject();
        $rootScope.$apply();
        expect(scope.testList).toEqual(_list);
      }));
    });
  });

});


