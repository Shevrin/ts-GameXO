const path = require('path');


module.exports = {
	entry: './src/app.ts',
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	},
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		hot: true,
		static: {
			directory: './dist',
			watch: true
		}
	}
};