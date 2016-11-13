# Rect

Create Phaser rectangle shape graphic

#### `craft.$rect(options)`

- `options` <Object> | <Number> Use as number to create a square with that size
  - `x` <Number> Position x
  - `y` <Number> Position y
  - `group` Phaser group
  - `fill` <String> Fill color in '#FFFFFF' or '0xFFFFFF' format. Set `null` for no fill
  - `alpha` <Number> Fill alpha
  - `width` <Number> Width
  - `height` <Number> Height
  - `size` <Number> Width and Height, alias for create square
  - `round` <Number> Radius size for rounded rectangle
  - `stroke` <Object>
    - `size` <Number> Stoke size. Leave 0 to disable stroke. Default `0`
    - `color` <String> Stroke color in '#FFFFFF' or '0xFFFFFF' format
    - `alpha` <Alpha> Stroke alpha

#### Example:

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
