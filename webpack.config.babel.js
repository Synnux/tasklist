import fs from 'fs';
import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const PROJECT_DIR = path.resolve(__dirname);
const app = path.join(PROJECT_DIR, './src');
const dist = path.join(PROJECT_DIR, './dist');
const assets = path.join(PROJECT_DIR, './assets');
const nodeModules = path.join(PROJECT_DIR, './node_modules');

try {
	fs.mkdirSync('./dist');
} catch (e) {
	/* Fail Silently */
}

export default {
	entry: path.join(app, 'index.js'),
	mode: 'development',
	output: {
		path: dist,
		publicPath: '/',
		filename: 'bundle.js'
	},
	resolve: {
		modules: [app, nodeModules]
	},
	plugins: [
		new CopyWebpackPlugin([
			{
				from: path.join(app, 'index.html'),
				to: dist
			},
			{
				from: path.join(assets, './**/*'),
				to: dist
			}
		])
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},
	devServer: {
		contentBase: './dist'
	}
};
