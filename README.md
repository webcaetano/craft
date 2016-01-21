![filesize](https://badge-size.herokuapp.com/webcaetano/craft/master/build/index.min.js.svg?style=flat-square)

# Craft
Phaser Library with utility chainable functions

## Installation

```
bower install phaser-craft --save
```

## Documentation


### Objects List

- [`craft.$sprite`](#craftspritekeyoptions)
- [`craft.$rect`](#craftrectoptions)


#### `craft.$sprite(key,options)`

Create Phaser Sprite

**Usage**

```javascript
craft.$sprite('banana')

//options default values
craft.$sprite('banana',{
	x:0,
	y:0,
	frame:undefined, // phaser sprite frame
	group:unefined // phaser group to be insert
})
```


#### `craft.$rect(options)`

Create Phaser Retangle Graphic 

**Usage**

```javascript
//options default values
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

