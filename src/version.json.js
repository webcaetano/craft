// tojson file
// information about : https://github.com/timoxley/tojson-loader

var fs = require('fs');
var path = require('path');
var pkg = JSON.parse(fs.readFileSync(path.join(__dirname,'../package.json')));
var version = pkg.version;
module.exports = version;
