'use strict';

describe('Controller: QuarantineCtrl', function () {

  // load the controller's module
  beforeEach(module('asknsolveApp'));

  var QuarantineCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QuarantineCtrl = $controller('QuarantineCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
