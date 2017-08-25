# Stroke

Create Phaser Sprite with stroke

#### `craft.$stroke(key, frame, options)`


- `key` Phaser sprite key
- `frame` <Object> | <String> Phaser sprite frame Can be used as object to pass options
- `options` <Object> | <String> Can be used as string to pass a frame
  - `size` <Number> Stroke size
  - `cache` <Boolean> Cache stroke
  - `pixel` <Number> Gap size between the stroke drawing (smaller more resource will be used, recommended bigger than 3) Default=`1`
  - `inside` <Boolean> If set `false` the middle part become a flat colored shape
  - `x` <Number> Position x
  - `y` <Number> Position y
  - `frame` <Number> Phaser sprite frame
  - `group` <Number> Phaser group

<!-- protosTpl -->

#### Example:

```javascript
//simple
var stroke = craft.$stroke('phaserDude',{
	size:2,
	color:'#FF00FF',
});

//full default values
craft.$stoke('main',{
	frame:'banana',
	x:0,
	y:0,
	group:undefined,
	cache:true,
	size:1,
	pixel:1,
	inside:true,
	color:'#FF0000'
)

// second parameter can be used as string to call a frame
craft.$shape('atlas','banana',{
	size:2,
	color:'#FF00FF',
});
```
