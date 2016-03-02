var tape = require("tape"),
    jsdom = require("jsdom"),
    d3_selection = require("d3-selection");

require("../../");

tape("transition.tween(name, value) throws an error if value is not a function", function(test) {
  var root = jsdom.jsdom().documentElement,
      transition = d3_selection.select(root).transition();
  test.throws(function() { transition.tween("foo", 42); }, /Error/);
  test.end();
});
