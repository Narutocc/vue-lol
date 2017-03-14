<template>
	//组件中只能有一个根节点
	<div>
		<xheader></xheader>
		<router-view></router-view>
		<xfooter></xfooter>
	</div>
</template>
<script>
	//ES6不能使用，会报错，改为ES5写法
	var xheader = require('./xheader.vue');
	var xfooter = require('./xfooter.vue');
	module.exports = {
		components:{
			xheader:xheader,
			xfooter:xfooter,
		}
	}
</script>