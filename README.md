# Rising Tide Tap List

[![Build Status](https://travis-ci.org/tleen/rising-tide-tap-list.png?branch=master)](https://travis-ci.org/tleen/rising-tide-tap-list)

A JavaScript module (and command line utility) to obtain a list of beers on tap at the [Rising Tide Brewery](http://www.risingtidebrewing.com/). It is a simple web scraper.

## CLI

```shell
> bin/rising-tide
d'automne, daymark, ishmael, oktoberfest, waypoint
```
# Module

```javascript
require('rising-tide-tap-list')(function(err, results){
  console.log(results);
  // [ 'd\'automne', 'daymark', 'ishmael', 'oktoberfest', 'waypoint' ]
});
```
