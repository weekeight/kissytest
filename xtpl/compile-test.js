var fs = require("fs");

var xtemplateCompile = require('kissy/lib/xtemplate');
var xtpl = fs.readFileSync('test.xtpl');

console.log(xtemplateCompile(xtpl));