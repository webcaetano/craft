![filesize](https://badge-size.herokuapp.com/webcaetano/craft/master/build/index.min.js.svg?style=flat-square)

# Craft
Phaser Library with utility chainable functions
Exported as a UMD module.

## Installation

```
bower install phaser-craft --save
```

## Documentation


### Objects List

- [`craft.$sprite`](#craftspritekeyoptions)
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

