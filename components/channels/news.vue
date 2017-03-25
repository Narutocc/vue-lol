<template>
	//组件中只能有一个根节点
	<div>
		<xheader></xheader>
		<xswiper></xswiper>
		<xlist></xlist>
	</div>
</template>
<script>
	//ES6不能使用，会报错，改为ES5写法
	var xheader = require('../xheader.vue');
	var xswiper = require('../xswiper.vue');
	var xlist = require('../xlist.vue');
	module.exports = {
		components:{
			xheader:xheader,
			xswiper:xswiper,
			xlist:xlist
		}
	}
</script>