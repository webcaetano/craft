# .$add

Insert objects in a group.<br>
Similar to phaser .add, but accept array of objects

#### .$add(objects)

- `object` <Object> | <Array> Object to be in insert in the group. Use as array to pass multiple objects

#### Example:

```javascript
var sprite1 = craft.$sprite('main');
var sprite2 = craft.$sprite('main');

var group = craft.$g()
.$add(sprite1);

// or 
group.$add([sprite1,sprite2]); 
```
