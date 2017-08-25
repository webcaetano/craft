module.exports = function $set(prop,val){
	if(typeof prop==='string' && !!val){
		this[prop]=val;
	} else {
		for(var i in prop) this[i]=prop[i];
	}
	return this;
}
