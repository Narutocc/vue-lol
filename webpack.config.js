// 引入webpack模块
// npm install webpack
var webpack = require('webpack');
module.exports = {
	// 用于调试代码,项目中会多一个文件bundle.js.map
	devtool:'source-map',
	// 入口文件 __dirname当前脚本的路径
	entry:__dirname + '/main.js',
	output:{
		// 输出文件所在的文件夹
		path:__dirname + '/public',
		// webpack处理后文件输出的名字
		filename:'bundle.js'
	},
	module:{
		loaders:[{
			test:/\.css$/,
			loader:'style-loader!css-loader'
		},{
			test:/\.html$/,
			loader:'html-loader'
		},{
			test:/\.vue$/,
			// npm install vue-loader vue-template-compiler
			loader:'vue-loader'
		}]
	},
	// vue2.0加上此句
	resolve:{
		alias:{
			vue:'vue/dist/vue.js'
		}
	},
	// 配置webpack-dev-server
	// npm install webpack-dev-server --save-dev
	devServer:{
		// 本地服务器的文件夹
		contentBase:'./public',
		// 自动刷新
		inline:true,
		// 0~65535 iis:80 http-server:8080
		port:888
	}
}