;(function() {
	var self = require('./craft');

	if(typeof exports!=='undefined'){
		module.exports=self;
	} else {
		this['$craft']=self;
	}
}.call(this));
