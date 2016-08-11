var _ = require('../lodash');

module.exports = function $add(objs){
	var self = this;
	if(!_.isArray(objs)) objs = [objs];
	_.each(objs,function(obj){
		self.add(obj);
	})
	return this;
}
