var Phaser = require('phaser');
var _ = require('lodash');

var self = {};

self.randInRange = function(range){
	var a = self.rand(0,360) * (Math.PI / 180);
	var d = self.rand(0,(range/2));
	return {
		x:Math.cos(a) * d,
		y:Math.sin(a) * d
	}
}

self.radPos = function(point,angle,range){
	var a = angle * (Math.PI / 180);
	var d = range;
	return {
		x:point.x + (Math.cos(a) * d),
		y:point.y + (Math.sin(a) * d)
	}
}

self.rand = function(min=0, max=100){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

self.getRangeIndexByValue = function(length,current,modes,ASC=true){
	if(current>=length) return modes;
	if(current<=0) return 1;
	if(ASC) {
		return Math.ceil(current/Math.floor(length/modes));
	} else {
		return Math.ceil((length-current)/Math.floor(length/modes));
	}
}

self.getModeByValue = function(length,current,modes,ASC=true){
	return modes[self.getRangeIndexByValue(length,current,modes.length,ASC)-1];
}

self.randPorRange = function(val,por){
	var part = Math.ceil(val*por/100);
	return self.rand(val-part,val+part);
}

self.toHHMMSS = function ($) {
	var sec_num = parseInt($, 10);
	var hours   = Math.floor(sec_num / 3600);
	var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
	var seconds = sec_num - (hours * 3600) - (minutes * 60);

	if (hours<10) hours="0"+hours;
	if (minutes<10) minutes="0"+minutes;
	if (seconds<10) seconds="0"+seconds;
	return hours+':'+minutes+':'+seconds;
}

self.renameAttr = function(obj,name,replace){
	obj[replace] = obj[name];
	delete obj[name];
	return obj;
}

self.frameAtlas = function(atlas){
	var add = {
		rotated:false,
		trimmed:true
	}

	var frames = [];
	_.forEach(atlas.sprites,function(sprite,spriteName){
		var c = 0;
		_.forEach(sprite.frames,function(frame,k){
			frame = _.extend(frame,add);
			frame = self.renameAttr(frame,'s','spriteSourceSize')
			frame = self.renameAttr(frame,'f','frame')

			frame.sourceSize = {
				w:frame.spriteSourceSize.w,
				h:frame.spriteSourceSize.h
			}

			if(frame.r){
				for(var i=0;i<frame.r;i++) {
					var clone = _.clone(frame);
					clone.filename = spriteName+_.padLeft(++c, 4, '0');
					frames.push(clone);
				}
			} else {
				frame.filename = spriteName+_.padLeft(++c, 4, '0');
				frames.push(frame);
			}
		});
	});

	atlas.frames = frames;
	return _.omit(atlas,['sprites']);
}

self.ifTrue = function($,def=null){
	return $ ? $ : def;
}

self.copyPos = function(obj1,obj2){
	obj1.x=obj2.x;
	obj1.y=obj2.y;
}

self.loadAssets = function(game,assets){
	var i;
	for(i in assets.atlas) {
		game.load.atlasJSONHash(i, assets.atlas[i].image, self.ifTrue(assets.atlas[i].jsonUrl), self.ifTrue(assets.atlas[i].json));
	}
	for(i in assets.images) game.load.image(i, assets.images[i]);
	for(i in assets.sprites) game.load.spritesheet(i, assets.sprites[i].image, assets.sprites[i].width, assets.sprites[i].height, assets.sprites[i].frames);
	for(i in assets.audio) game.load.audio(i, assets.audio[i]);
}

self.setAtlasFrame = function(objs,frame=0,name=''){
	if(!_.isArray(objs)) objs = [objs];
	_.map(objs,function(obj,k){
		if(!obj.name) console.error('object without name');
		obj.frameName = obj.name+_.padLeft(frame,4,'0');
	})
	return objs;
}

self.por = function(val,por,plus=true,fix=0){
	return Number(((val * por / 100)*(plus ? 1 : -1)+val).toFixed(fix));
}

self.dist = function(obj1,obj2){
	return Math.sqrt(Math.pow(obj1.x-obj2.x,2)+Math.pow(obj1.y-obj2.y,2));
}

self.setBtn = function(obj,callback=null){
	if(!obj) return;
	if(!obj.inputEnabled) obj.inputEnabled = true;
	if(!obj.input) return;
	// obj.input.pixelPerfectClick = true;
	// obj.input.pixelPerfectOver = true;
	obj.input.useHandCursor = true;
	if(callback){
		obj.events.onInputUp.add(function(e){
			callback.apply(this,[e]);
		});
	}
	return obj;
}

self.setHover = function(obj,callback=null,callback2=null){
	if(!obj) return;
	if(!obj.inputEnabled) obj.inputEnabled = true;
	if(!obj.input) return;
	obj.input.useHandCursor = true;
	if(callback){
		obj.events.onInputOver.add(function(e){
			callback.apply(this,[e]);
		});
	}
	if(callback2){
		obj.events.onInputOut.add(function(e){
			callback2.apply(this,[e]);
		});
	}
	return obj;
}

self.btnAudio = function(obj,audioHover=null,audioClick=null){
	if(!obj.inputEnabled) obj.inputEnabled = true;
	if(audioHover){
		obj.events.onInputOver.add(function(e){
			audioHover.play();
		});
	}
	if(audioClick){
		obj.events.onInputUp.add(function(e){
			audioClick.play();
		});
	}
	return obj;
}

module.exports = self;
