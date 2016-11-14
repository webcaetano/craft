# Text

Create Phaser Text

#### `craft.$text(text,options)`

- `text` <String> String to be used on the text
- `options` <Object>
  - `x` <Number> Position x
  - `y` <Number> Position y
  - `align` <String> Text align
  - `bold` <Boolean> Text bold
  - `Size` <Number> Text Size
  - `font` <String> Text font
  - `color` <String> Text color in '#FFFFFF' format.
  - `stroke` <Object>
    - `size` <Number> Stoke size. Leave 0 to disable stroke. Default `0`
    - `color` <String> Stroke color in '#FFFFFF' or '0xFFFFFF' format

<!-- protosTpl -->

#### Example:

```javascript
//simple
craft.$text('teemo');

//full default values
craft.$text('teemo',{
	x:0,
	y:0,
	bold:false,
	size:15,
	font:"'Helvetica Neue', Helvetica, Arial, sans-serif",
	stroke:{
		size:0,
		color:'#000000'
	},
	align:'center',
	color:'#000000'
})
```
