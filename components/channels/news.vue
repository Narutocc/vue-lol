<template>
	//组件中只能有一个根节点
	<div>
		<xswiper></xswiper>
		<xlist></xlist>
	</div>
</template>
<script>
	//ES6不能使用，会报错，改为ES5写法
	var xswiper = require('../xswiper.vue');
	var xlist = require('../xlist.vue');
	module.exports = {
		components:{
			xswiper:xswiper,
			xlist:xlist
		}
	}
</script>