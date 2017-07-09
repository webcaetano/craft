var path = require('path');
var webpack = require("webpack");

var dist = JSON.parse(process.env.PROD_ENV || '0');

var plugins = [];
var entry = {
	"craft": './src/index.js',
}

if(dist){
	plugins = plugins.concat([
		new webpack.optimize.UglifyJsPlugin({
			include: /\.min\.js$/,
			minimize: true,
			compress: false
		})
	])

	entry["craft.min"] = './src/index.js';
}

module.exports = {
	entry,
	plugins,
	output: {
		library:'craft',
		filename: 'build/[name].js',
		sourceMapFilename: '[file].map',
		umdNamedDefine: true,
		devtoolModuleFilenameTemplate: "webpack:///[resource-path]", // string
		devtoolFallbackModuleFilenameTemplate: "webpack:///[resource-path]?[hash]", // string
		libraryTarget:'umd'
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use:[
					{
						loader: 'babel-loader',
						// query: {
						//   babelrc:false,
						//   presets: [ path.join(__dirname,'node_modules/babel-preset-es2015') ]
						// }
					},
				]
			},
			{ test: /\.json\.js/, exclude: /node_modules/, loader: 'tojson-loader'}
		]
	},
	externals:{
		phaser: "Phaser",
		Phaser: "Phaser",
	},
};
