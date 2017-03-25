<template>
	<mu-appbar title="资讯" style="position:fixed;top:0;width:100%;height:56px;">
		<mu-icon-button icon='menu' slot="left" @click="left()"/>
	</mu-appbar>
</template>
<script>
	module.exports = {
		/*data:function(){
			return {
				title:''
			}
		},*/
		methods:{
			left:function(){
				this.$store.commit('set_isLeftPopUp',true)
			}
		},
		/*mounted:function(){
			var id = this.$route.params.id;
			console.log(id)
			switch(id){
				case '1':
					this.title = '资讯';
					break;
				case '2':
					this.title = '英雄';
					break;
				case '3':
					this.title = '视频';
					break;
			}
		}*/
	}
</script>
<style>
	.mu-appbar.mu-paper-1{
		background-color:#6058aa;
	}
	.mu-appbar-title span{
		font-size:18px;
	}
</style>
