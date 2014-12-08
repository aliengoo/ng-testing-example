describe("Customer controller", function() {

  beforeEach(module('app'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  it('message has been set', function(){
    var controller = $controller('Customer');

    expect(controller.message).toEqual('hello, world');
  });

});