var Stats = require('stats');
var _ = require('lodash');

var defaults = {

}

module.exports = function(options){
	options = _.extend({},defaults,options);

	var stats = new Stats();

	stats.setMode(0);

	stats.domElement.style.position = 'absolute';
	stats.domElement.style.right = '0px';
	stats.domElement.style.bottom = '0px';

	document.body.appendChild(stats.domElement);

	setInterval(function () {
		stats.begin();
		stats.end();
	}, 1000 / 60);
}
