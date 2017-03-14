<template>
	//组件中只能有一个根节点
	<div>
		<p>{{name}}</p>
	</div>
</template>
<script>
	//ES6不能使用，会报错，改为ES5写法
	module.exports = {
		data:function(){
			return {
				name:'abc'
			}
		}
	}
</script>
<style>
	p{
		margin-top:56px;
	}
</style>