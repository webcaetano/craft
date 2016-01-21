var utils = require('../utils');

module.exports = function $tint(color='ffffff'){
	this.tint = utils.colorCase(color);
	return this;
}
