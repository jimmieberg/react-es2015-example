var path = require('path');
var webpack = require('webpack');

module.exports = {
  	devtool: 'eval',
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
  		'webpack/hot/only-dev-server',
		'./src/main.js',
	],
	output: {
		path: path.join(__dirname, 'build'),
    	filename: 'bundle.js',
	},
	resolve: {
        root: [path.join(__dirname, 'src')]
    },    
	module: {
		loaders: [
			{
				test: /\.jsx$/,
  				exclude: /node_modules/,
  				loaders: ["react-hot", "babel-loader?presets[]=react,presets[]=es2015"]
			},
			{
				test: /\.js$/,
  				exclude: /node_modules/,
  				loaders: ["react-hot", "babel-loader?presets[]=es2015"]
			}
		],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};

