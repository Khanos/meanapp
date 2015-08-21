'use strict';

describe('Controller: AutoCtrl', function () {

  // load the controller's module
  beforeEach(module('clientTestApp'));

  var AutoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AutoCtrl = $controller('AutoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AutoCtrl.awesomeThings.length).toBe(3);
  });
});
