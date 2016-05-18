'use strict';

/* global describe, it, should */
/* jshint expr: true */

describe('results', function(){
  it('should be an array with at least two string values', function(done){
    this.timeout(5000);
    require('..')(function(err, results){
      (err === null).should.be.true;
      results.should.be.an.Array;
      results.length.should.be.aboveOrEqual(2);
      results[0].should.be.a.String;
      return done();
    });
  });
});
