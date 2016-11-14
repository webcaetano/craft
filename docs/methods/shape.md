# Shape

Create Phaser Sprite flat colored

#### `craft.$shape(key, frame, options)`


- `key` Phaser sprite key
- `frame` <Object> | <String> Phaser sprite frame Can be used as object to pass options
- `options` <Object> | <String> Can be used as string to pass a frame
  - `cache` <Boolean> Cache shape
  - `color` <String> Fill color in '#FFFFFF' or '0xFFFFFF' format.
  - `x` <Number> Position x
  - `y` <Number> Position y
  - `frame` <Number> Phaser sprite frame
  - `group` <Number> Phaser group

<!-- protosTpl -->

#### Example:

```javascript
//simple
craft.$shape('phaserDude',{
	color:'#FF00FF',
});

//full default values
craft.$shape('main',{
	frame:'banana',
	x:0,
	y:0,
	group:undefined,
	cache:true,
	color:'#FF0000'
)

// second parameter can be used as string to call a frame
craft.$shape('atlas','banana',{
	color:'#FF00FF',
});
```
