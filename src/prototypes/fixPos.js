module.exports = function $fixPos(){
	this.x = Math.floor(this.x);
	this.y = Math.floor(this.y);
	return this;
}
