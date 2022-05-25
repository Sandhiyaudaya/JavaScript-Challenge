//Filter the String and return non-string

function filter_list(l) {
    var newArray= l.filter(i => typeof(i) !== 'string' )
    return newArray
  }


//Test Case
  /*  const assert = require('chai').assert;
describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(filter_list([1,2,'a','b']),[1,2], 'For input [1,2,"a","b"]');
    assert.deepEqual(filter_list([1,'a','b',0,15]),[1,0,15], 'For input [1,"a","b",0,15]');
    assert.deepEqual(filter_list([1,2,'aasf','1','123',123]),[1,2,123], 'For input [1,2,"aasf","1","123",123]');
  });*/