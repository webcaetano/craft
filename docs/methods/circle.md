# Circle

Create Phaser Circle Shape Graphic 

#### `craft.$circle(options)`

- `options` <Object> | <Number> Use as number to create a circle with that radius
  - `size` <Number> Radius size of the circle
  - `x` <Number> Position x
  - `y` <Number> Position y
  - `group` Phaser group
  - `fill` <String> Fill color in '#FFFFFF' or '0xFFFFFF' format. Set `null` for no fill
  - `alpha` <Number> Fill alpha
  - `stroke` <Object>
    - `size` <Number> Stoke size. Leave 0 to disable stroke. Default `0`
    - `color` <String> Stroke color in '#FFFFFF' or '0xFFFFFF' format
    - `alpha` <Alpha> Stroke alpha

#### Example:

```javascript
//simple
craft.$circle({
	size:10,
});

//alias 
craft.$c({size:10});

//only number 
craft.$c(10);

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
