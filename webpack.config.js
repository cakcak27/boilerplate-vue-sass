const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
	entry: './src/index.js',
	module: {
		rules:[
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use:{
					loader: 'babel-loader'
				}

			},

			{
				test: /\.sass$/,
				use: [
					'vue-style-loader',
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							indentedSyntax: true,
							// sass-loader version >= 8
							sassOptions: {
								indentedSyntax: true
							}
						}
					}
				]
			}

		]
	},
	plugins: [
		new VueLoaderPlugin()
	],
	resolve: {
		alias: {
			vue$: "vue/dist/vue.runtime.esm.js",
		},
		extensions: ["*", ".js", ".vue", ".json"]
	},
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	}
}