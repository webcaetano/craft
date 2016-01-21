var utils = require('../utils');

module.exports = function $add(objs){
	var self = this;
	if(!utils.isArray(objs)) objs = [objs];
	utils.each(objs,function(obj){
		self.add(obj);
	})
	return this;
}
