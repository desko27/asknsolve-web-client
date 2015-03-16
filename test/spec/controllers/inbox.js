'use strict';

describe('Controller: InboxCtrl', function () {

  // load the controller's module
  beforeEach(module('asknsolveApp'));

  var InboxCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InboxCtrl = $controller('InboxCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
