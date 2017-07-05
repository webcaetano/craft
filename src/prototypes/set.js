module.exports = function $set(prop,val){
	if(typeof prop==='string' && !!val){
		this[prop]=val;
	} else {
		Object.assign(this,prop);
	}
	return this;
}
