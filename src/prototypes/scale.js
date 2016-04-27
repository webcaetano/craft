module.exports = function $scale(x=null,y=null){
	if(!this.scale) return this;
	var scale = this.scale.set ? this.scale.set : this.scale.setTo;

	if(x!==null && y!==null){
		this.scale.setTo(x,y);
	} else if(x!==null) {
		this.scale.setTo(x);
	}

	return this;
}
