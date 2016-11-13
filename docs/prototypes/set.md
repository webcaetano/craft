# .$set

Change object attributes based on object

#### .$set(values)

`values` <Object> Object of attributes to be changed

#### Example:

```javascript
sprite.$set({
	x:10,
	y:10,
	tint:'0xFF0000',
	name:'ball'
});

// same as 
// sprite.x = 10;
// sprite.y = 10;
// sprite.tint = '0xFF0000';
// sprite.name = 'ball';

// or single value using 2 parameters
sprite.$set('x',10);
```
