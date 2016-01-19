var _ = require('lodash');
var Phaser = require('phaser');

var protoOptions = {
	sprite:{
		$set:true,
		$tint:true,
		$into:true,
		$mid:true,
		$atlasImg:true,
		$atlasAnims:true,
		$fixPos:true,
		$copyPos:true,
	},
	graphic:{
		$set:true,
		$tint:true,
		$into:true,
		$mid:true,
		$fixPos:true,
		$copyPos:true,
	},
	group:{
		$set:true,
		$into:true,
		$fixPos:true,
		$add:true,
		$copyPos:true,
	}
}

var protos = {
	$set:function(prop,val){
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
	},
	$tint:function(color='ffffff'){
		this.tint = convertColorStandard(color);
		return this;
	},
	$into:function(group){
		group.add(this);
		return this;
	},
	$mid:function(){
		this.anchor.setTo(0.5);
		return this;
	},
	$copyPos:function(target){
		this.x = target.x;
		this.y = target.y;
		return this;
	},
	$fixPos:function(){
		this.x = Math.floor(this.x);
		this.y = Math.floor(this.y);
		return this;
	},
	$atlasAnims:function(name,anims){
		_.each(anims,function(animation,k){
			this.animations.add(k, Phaser.Animation.generateFrameNames(name, animation.start, animation.end, '', 4), animation.rate, (repeat[k] ? true : false));
		})
		return this;
	},
	$atlasImg:function(name,frame=1){
		this.frameName = name+_.padLeft(frame,4,'0');
		return this;
	},
	$add:function(objs){
		var _me = this;
		if(!_.isArray(objs)) objs = [objs];
		_.each(objs,function(obj){
			_me.add(obj);
		})
		return this;
	}
}

var bindProto = function(obj,type='sprite'){
	_.each(protoOptions[type],function(val,funcName){
		if(!val || !protos[funcName]) return;
		obj[funcName] = protos[funcName];
	})
}


var convertColorStandard = function(color){
	return color.indexOf('#') != -1 ? '0x'+color.replace(/#/g,'') : color;
}


module.exports = function(game){
	var self = {};

	self.repeat = function(delay,count,callback,onComplete=null,playAtStart=false){
		var timer = game.time.create(false);
		if(playAtStart) callback();
		timer.repeat(delay,playAtStart ? count-1 : count,callback)
		timer.start();
		timer.onComplete.addOnce(function(){
			if(onComplete) onComplete();
			timer.destroy();
		});
	}

	self.loopUntil = function(delay,until,callback,onComplete=null){
		var timer = game.time.create(false);
		timer.loop(delay,callback)
		timer.start();
		timer.add(until,function(){
			if(onComplete) onComplete();
			timer.destroy();
		})
	}

	self.ninePatch = function(options){
		options = _.extend({},{width:100,key:"9window_",height:100},options);
		var group = game.add.group();
		var i = 1;
		var slices = [];
		var cSlot = 0;

		_.each([-1,0,1],function(cVal,c){ // cols
			var rSlot = 0;
			_.each([-1,0,1],function(rVal,r){ // rows
				var slicez = game.make.sprite(0,0,'gui');
				slicez.frameName = options.key+i+_.padLeft(1,4,'0');
				var slice = group.add(game.add.tileSprite(0,0,slicez.width,slicez.height,'gui',options.key+i+_.padLeft(1,4,'0')));
				slicez.destroy();

				slice.x = Math.ceil(rSlot+(rVal==-1 ? -slice.width : 0)+(rVal==1 ? options.width : 0))-r;
				slice.y = Math.ceil(cSlot+(cVal==-1 ? -slice.height : 0)+(cVal==1 ? options.height : 0))-c;
				if(rVal===0) slice.width = options.width;
				if(cVal===0) slice.height = options.height;
				slices.push(slice);
				i++;
			});
		});
		return group;
	}

	self.$sprite = function(key,options){
		var defaults = {
			x:0,
			y:0,
			frame:undefined,
			group:undefined
		};
		options = _.defaultsDeep({},options,defaults);
		var tmpObj = game.add.sprite(options.x,options.y,key,options.frame,options.group);
		// prototypes
		bindProto(tmpObj,'sprite')

		return tmpObj;
	}

	self.$circle = function(options){
		var defaults = {
			x:0,
			y:0,
			group:undefined,
			fill:'#ff0000',
			size:10,
			stroke:{
				size:0,
				color:'#000',
				alpha:1,
			},
		};
		options = _.defaultsDeep({},options,defaults);
		var tmpG = game.add.graphics(options.x,options.y,options.group);

		bindProto(tmpG,'graphic')

		if(options.fill) tmpG.beginFill(convertColorStandard(options.fill));
		if(options.stroke.size>0) tmpG.lineStyle(options.stroke.size,options.stroke.color,options.stroke.alpha);

		return tmpG.drawCircle(0,0,options.size)
	}

	self.$graphic = function(options){
		var defaults = {
			x:0,
			y:0,
			group:undefined,
		};
		options = _.defaultsDeep({},options,defaults);
		var tmpG = game.add.graphics(options.x,options.y,options.group);
		bindProto(tmpG,'graphic')
		return tmpG;
	}

	self.$dot = self.$d = function(fill='#ff0000',size=3,options){
		var defaults = {
			fill,
			size,
		};
		options = _.defaultsDeep({},options,defaults);
		return self.$circle(options)
	}

	self.$rect = self.$box = function(options){
		var defaults = {
			x:0,
			y:0,
			group:undefined,
			fill:'#ff0000',
			width:100,
			height:100,
			size:0,
			round:0,
			stroke:{
				size:0,
				color:'#000000',
				alpha:1,
			},
		};
		options = _.defaultsDeep({},options,defaults);
		var tmpG = game.add.graphics(options.x,options.y,options.group);

		if(options.size) options.height = options.width = options.size;

		bindProto(tmpG,'graphic')

		if(options.fill) tmpG.beginFill(convertColorStandard(options.fill));
		if(options.stroke.size>0) tmpG.lineStyle(options.stroke.size,options.stroke.color,options.stroke.alpha);

		if(options.round==0){
			return tmpG.drawRect(0,0,options.width,options.height)
		} else {
			return tmpG.drawRoundRect(0,0,options.width,options.height,options.round)
		}
	}

	self.$group = self.$g = function(options){
		var defaults = {
			parent:undefined,
			name:undefined,
			addToStage:undefined,
			enableBody:undefined,
			physicsBodyType:undefined
		};
		options = _.defaultsDeep({},options,defaults);
		var tmpG = game.add.group(options.parent, options.name, options.addToStage, options.enableBody, options.physicsBodyType);

		bindProto(tmpG,'group')

		return tmpG;
	}

	return self;
}
