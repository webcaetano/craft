![File Size][filesize-url]
![Bower version][bower-url]


<p align="center">
	<img alt="phaser craft logo" src="http://i.imgur.com/qQTPPu7.png">
</p>

<h1 align="center"> Craft </h1>

<p align="center">
	<strong>
		<sub>
		Phaser Library with utility chainable functions<br>
		Exported as a UMD module. (accept global, es6, webpack, browserify)
		</sub>
	</strong>
</p>


## Installation

```
bower install phaser-craft --save
```

## Examples 

#### Example1 

```javascript
var craft = require('$craft')(game); // you also can call craft via global var

var group = craft.$g(); //create group

var sprite = craft.$sprite('phaserDude') //create sprite with key
.$set({ // change attributes
	x:100,
	y:100
})
.$mid() // change anchor to center
.$tint('#FF0000') // change color
.$into(group); // insert into group

//You can keep using Phaser
sprite.x = 150;

//You can use the prototypes without a chain
sprite.$set({
	y:150
});
```

#### Example2

```javascript
// var craft = $craft(game); // global
// import $craft from '$craft'; var craft = $craft(game); // ES6
var craft = require('$craft')(game); // browserify , webpack

var group = craft.$g(); //create group

var rect = craft.$rect({ //create rectangle
	width:200,
	height:150,
	fill:'#9517C5', //setup retancle fill color
})
.$align('center','center') // align it to center 
.$into(group) // insert into group 


var ball = craft.$circle({ //create circle
	fill:'#ffffff',
	size:100 // radius
}).$set({ // change attributes
	x:150,
	y:150,
})
.$into(group) // insert into group 

var d = craft.$d().$copyPos(ball); // create a dot and copy position of ball
```

## Documentation 

[http://webcaetano.github.io/craft](http://webcaetano.github.io/craft)

## Development 

Clone the repo `https://github.com/webcaetano/craft-examples`<br>
On craft-examples `npm instal` and `gulp`<br>
On craft `npm install` and `npm run start` <br>

To create a production version `npm run build`

> Important: Ensure that both repos live at the same depth in your directory structure. For example: /usr/home/web/craft-examples and /usr/home/web/craft. This is so the dev build scripts in the Craft repo can safely copy files to ../craft-examples, and they end up in the correct place.


#### See Also
- [**phaser-utils**](https://github.com/webcaetano/phaser-utils)
- [**phaser-boilerplate**](https://github.com/webcaetano/phaser-boilerplate)
- [**phaser-electron**](https://github.com/webcaetano/phaser-electron)
- [**craft-website**](https://github.com/webcaetano/craft-website)
- [**craft-examples**](https://github.com/webcaetano/craft-examples)

[filesize-url]: https://badge-size.herokuapp.com/webcaetano/craft/master/build/craft.min.js.svg?style=flat-square&color=green
[bower-url]: https://img.shields.io/bower/v/phaser-craft.svg?style=flat-square


