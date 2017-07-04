module.exports = function(a=null,b=null){
	if(a){
		if(a=='left'){
			this.x = 0;
		} else if(a=='center'){
			this.x = ~~(this.game.width*0.5)-(!this.anchor || this.anchor.x==0 ? this.width*0.5 : 0);
		} else if(a=='right'){
			this.x = this.game.width-this.width;
		}
	}
	if(b){
		if(a=='top'){
			this.y = 0;
		} else if(a=='center'){
			this.y = ~~(this.game.height*0.5)-(!this.anchor || this.anchor.y==0 ? this.height*0.5 : 0);
		} else if(a=='bot'){
			this.y = this.game.width-this.height;
		}
	}
	return this;
}
