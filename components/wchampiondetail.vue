<template>
	<div>
		<img :src="'http://cdn.tgp.qq.com/pallas/images/skins/original/'+key+'-'+id+'.jpg'"/>
	</div>
</template>
<script>
	export default {
		data:function(){
			return {
				list:[],
				key:'',
				id:''
			}
		},
		methods:{
			getChampionDetail:function(){
				this.$http.get('http://lolapi.games-cube.com/GetChampionDetail?champion_id=' + this.$route.params.id,{
					headers:{
						'DAIWAN-API-TOKEN':'78710-B0810-777C7-C9A85'
					}
				}).then(function(data){
					console.log(data);
					this.list = data.data.data[0];
					this.key = this.list.key;
					this.id = this.list.skins[0].id;
				})
			}
		},
		mounted:function(){
			this.getChampionDetail();
		}
	}
</script>