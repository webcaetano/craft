# Sprite

Create Phaser Sprite

#### `craft.$sprite(key,options)`

- `key` Phaser sprite key
- `options` <Object> | <String> Can be used as string to pass a frame
  - `x` <Number> Position x
  - `y` <Number> Position y
  - `frame` <Number> Phaser sprite frame
  - `group` <Number> Phaser group

<!-- protosTpl -->

#### Example:

```javascript
//simple
craft.$sprite('banana')

//full default values
craft.$sprite('banana',{
	x:0,
	y:0,
	frame:undefined, // phaser sprite frame
	group:undefined // phaser group to be insert
})

// second parameter can be used as string to call a frame
craft.$sprite('atlas','banana');
```
