var assert = require("assert");

before(function () {
  console.log("starting test suite...");
});

after(function () {
  console.log("ending test suite...");
});

describe("Array", function () {  
  describe("#indexOf()", function () {
    it("should return -1 when the value is not present", function () {
      assert.ok([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe("String", function () {  
  describe("#match()", function () {
    it("find a substring within a string", function () {
      assert.ok("start testing 123".match("testing"));
    });
  });
});

describe("boolean", function () {
  describe("===", function () {
    it("should consider true to be equal to true", function () {
      assert.ok(true === true);
    });
  });
});