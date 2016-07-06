var path = require('path');

module.exports = {
	entry: './src/main.js',
	output: {
		filename: './build/bundle.js'
	},
	resolve: {
        root: [path.join(__dirname, 'src')]
    },    
	module: {
		loaders: [
			{
				test: /\.jsx$/,
  				exclude: /node_modules/,
  				loader: "babel-loader",
				query: {
					presets: ['react', 'es2015']
				}
			},
			{
				test: /\.js$/,
  				exclude: /node_modules/,
  				loader: "babel-loader",
				query: {
					presets: ['es2015']
				}
			}
		],
	}
};

