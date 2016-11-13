# Tile Sprite

Create Phaser Tile Sprite

#### `craft.$tileSpritre(key,options,width,height)`


- `key` Phaser sprite key
- `options` <Object> | <String> Can be used as string to pass a frame
  - `x` <Number> Position x
  - `y` <Number> Position y
  - `frame` <Number> Phaser sprite frame
  - `group` <Number> Phaser group
- `width` Width
- `height` Height


#### Example:

```javascript
//simple
craft.$tileSprite('banana',null,300,300)

//full default values
craft.$tileSprite('banana',{
		x:0,
		y:0,
		frame:undefined, // phaser sprite frame
		group:undefined // phaser group to be insert
	},
	300, // width
	300 // height
)

// second parameter can be used as string to call a frame
craft.$tileSprite('atlas','banana',300,300);
```
