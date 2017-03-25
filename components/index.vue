<template>
	//组件中只能有一个根节点
	<div>
		<router-view></router-view>
		<popup></popup>
		<xfooter></xfooter>
	</div>
</template>
<script>
	//ES6不能使用，会报错，改为ES5写法
	var xfooter = require('./xfooter.vue');
	var popup = require('./popup.vue');
	module.exports = {
		components:{
			xfooter:xfooter,
			popup:popup
		}
	}
</script>
<style>
	.header{
		z-index:2;
		position:fixed;
		top:0;
		width:100%;
		height:56px;
		line-height:56px;
		background-color:#6058aa;
	}
	.header span{
		font-size:18px;
		color:#fff;
		margin:10px;
	}
	.header .arrow{
		font-size:24px;
	}
</style>