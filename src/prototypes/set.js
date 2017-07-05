module.exports = function $set(prop,val){
	if(typeof prop==='string' && !!val){
		this[prop]=val;
	} else {
		for(var i in prop){
			if(i.indexOf('.')==-1){
				this[i]=prop[i];
			} else {
				var pathObj = i.split(".");
				var c = this;
				for(var k=0;k<pathObj.length-1;k++) c=c[pathObj[k]];
				c[pathObj[pathObj.length-1]]=prop[i];
			}
		}
	}
	return this;
}
