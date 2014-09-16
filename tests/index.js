var assert = require("assert");
var request = require("request");

var app = require("../");

describe("Fuzzy", function() {
    it("should respond ok", function(done) {
        request.get('http://localhost:3000/', function(err, res) {
            assert.ok(!err, "no errors");
            assert.equal(res.statusCode, 200, "ok status code");
            assert.ok(/hello/i.test(res.body), "contains text hello");
            done();
        });
    });
});