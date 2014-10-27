var RedpointSet = require("../util/RedpointSet.js");
 
describe("RedpointSet", function () {	
	var redpointSet;
	
	beforeEach(function() {
		redpointSet = new RedpointSet();
	});
	
	it("should say hello", function () {
		expect(redpointSet.sayHello()).toEqual("hello");
	}); 
});  