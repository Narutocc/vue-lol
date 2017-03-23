<template>
	<mu-appbar title="资讯" style="position:fixed;top:0;width:100%;height:56px;">
		<mu-icon-button icon='menu' slot="left" @click="left()"/>
	</mu-appbar>
</template>
<script>
	module.exports = {
		methods:{
			left:function(){
				this.$store.commit('set_isLeftPopUp',true)
			}
		}
	}
</script>
