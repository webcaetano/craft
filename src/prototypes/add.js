module.exports = function $add(objs){
	var self = this;
	if(!Array.isArray(objs)) objs = [objs];
	objs.forEach(function(obj){
		self.add(obj);
	})
	return this;
}
