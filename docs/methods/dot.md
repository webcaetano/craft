# Dot

Create a dot (useful for add location indications and debugging)

#### `craft.$dot(size,color,options)`

- `size` <Number> Dot radius size
- `color` <String> Fill color in '#FFFFFF' or '0xFFFFFF' format.
- `options` <Object>

#### Example:

```javascript
//simple
craft.$dot();

craft.$dot(10);

craft.$dot(10,'#FF0000');

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
});
```
