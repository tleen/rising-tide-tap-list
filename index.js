'use strict';
var $ = require('cheerio'),
    needle = require('needle');

module.exports = function(callback){

  needle.get('http://www.risingtidebrewing.com/', function(err, response){
    
    if(err) return callback(err);
    
    if(response.statusCode !== 200) return callback(new Error('Site unavailable'));
    
    var results = [];
    $.load(response.body)('h2').first().find('a').each(function(i, t){
      results.push($(t).text().toLowerCase().trim());
    });
    results.sort();
    
    if(results.length === 0) return callback(new Error('Unable to find listing on site'));

    return callback(null, results);
  });  
};
