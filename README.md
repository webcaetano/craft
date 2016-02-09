![filesize](https://badge-size.herokuapp.com/webcaetano/craft/master/build/index.min.js.svg?style=flat-square)

# Craft
Phaser Library with utility chainable functions<br>
Exported as a UMD module.

## Installation

```
bower install phaser-craft --save
```

## Examples 

#### Example1 

[Link](http://webcaetano.github.io/craft/index.html?example=1)

```javascript
var craft = require('$craft')(game); // you also can call craft via global var

var group = craft.$g(); //create group

var sprite = craft.$sprite('phaserDude') //create sprite with key
.$set({ // change attributes
	x:100,
	y:100
})
.$mid() // change anchor to center
.$tint('#FF0000') // change color
.$into(group); // insert into group

//You can keep using Phaser
sprite.x = 150;

//You can use the prototypes without a chain
sprite.$set({
	y:150
});
```

#### Example2

[Link](http://webcaetano.github.io/craft/index.html?example=2)

```javascript
var craft = require('$craft')(game); // you also can call craft via global var

var group = craft.$g(); //create group

var rect = craft.$rect({ //create rectangle
	width:200,
	height:150,
	fill:'#9517C5', //setup retancle fill color
})
.$align('center','center') // align it to center 
.$into(group) // insert into group 


var ball = craft.$circle({ //create circle
	fill:'#ffffff',
	size:100 // radius
}).$set({ // change attributes
	x:150,
	y:150,
})
.$into(group) // insert into group 

var d = craft.$d().$copyPos(ball); // create a dot and copy position of ball
```

## Documentation


### Objects List

- [`craft.$sprite`](#craftspritekeyoptions)
- [`craft.$group`](#craftgroupkeyoptions)
- [`craft.$graphic`](#craftgraphicoptions)
- [`craft.$rect`](#craftrectoptions)
- [`craft.$cirlce`](#craftcircleoptions)
- [`craft.$dot`](#craftdotsizecoloroptions)


#### `craft.$sprite(key,options)`

Create Phaser Sprite

**Usage**

```javascript
//simple
craft.$sprite('banana')

//full default values
craft.$sprite('banana',{
	x:0,
	y:0,
	frame:undefined, // phaser sprite frame
	group:unefined // phaser group to be insert
})
```

#### `craft.$group(key,options)`

Create Phaser Group

**Usage**

```javascript
//simple
craft.$group();

//alias 
craft.$g();

//full default values
craft.$group({
	parent:undefined,
	name:undefined,
	addToStage:undefined,
	enableBody:undefined,
	physicsBodyType:undefined
})
```

#### `craft.$graphic(options)`

Create Phaser Graphic Object 

**Usage**

```javascript
//simple
craft.$graphic();

//full default values
craft.$graphic({
	x:0,
	y:0,
	group:undefined,
})
```

#### `craft.$rect(options)`

Create Phaser Retangle Shape Graphic 

**Usage**

```javascript
//simple
craft.$rect({
	width:100,
	height:50,
});

// alias 
craft.$box({
	size:100
});

//full default values
craft.$rect({
	x:0,
	y:0,
	group:undefined,
	fill:'#ff0000',
	alpha:1,
	width:100,
	height:100,
	size:0, // alias when width and height are the same
	round:0, // radius size for rounded rectangle
	stroke:{
		size:0, // leave 0 for disable stroke
		color:'#000000',
		alpha:1
	}
})
```

#### `craft.$circle(options)`

Create Phaser Circle Shape Graphic 

**Usage**

```javascript
//simple
craft.$circle({
	size:10,
});

//alias 
craft.$c({size:10});

//full default values
craft.$circle({
	x:0,
	y:0,
	group:undefined,
	fill:'#ff0000',
	size:10,
	stroke:{
		size:0, // leave 0 for disable stroke
		color:'#000000',
		alpha:1
	}
})
```

#### `craft.$dot(size,color,options)`

Create Phaser Small-Circle Shape Graphic (useful for add location indications and debugging)

**Usage**

```javascript
//simple
craft.$dot();

//alias 
craft.$d();

//full default values
craft.$dot(5,'#ff0000',{
	x:0,
	y:0,
	group:undefined,
	fill:'#ff0000',
	size:10,
	stroke:{
		size:0, // leave 0 for disable stroke
		color:'#000000',
		alpha:1
	}
})
```

