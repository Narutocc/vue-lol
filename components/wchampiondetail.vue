<template>
	<div>
		<img :src="'http://cdn.tgp.qq.com/pallas/images/skins/original/'+key+'-'+id+'.jpg'"/>
		<div class="container">
			<a href="#">技能</a>
			<a href="#">出装</a>
			<a href="#">故事</a>
		</div>
		<ul>
			<li>
				<strong>操作技巧</strong>
				<p>{{data.op_skill}}</p>
			</li>
		</ul>
	</div>
</template>
<style>
	img{
		width:100%;
		height:240px;
	}
	.container{
		height:56px;
		line-height:56px;
		background-color:#ccc;
	}
	.container a{
		color:#000;
		font-size:18px;
		margin:40px;
	}
</style>
<script>
	export default {
		data:function(){
			return {
				list:[],
				key:'',
				id:'',
				data:''
			}
		},
		methods:{
			getChampionDetail:function(){
				this.$http.get('http://ossweb-img.qq.com/upload/qqtalk/lol_hero/hero_104.js').then(function(data){
					console.log(data)
					this.data = data.data;
				})


				/*this.$http.get('http://lolapi.games-cube.com/GetChampionDetail?champion_id=' + this.$route.params.id,{
					headers:{
						'DAIWAN-API-TOKEN':'78710-B0810-777C7-C9A85'
					}
				}).then(function(data){
					console.log(data);
					this.list = data.data.data[0];
					this.key = this.list.key;
					this.id = this.list.skins[0].id;
				})*/
			}
		},
		mounted:function(){
			this.getChampionDetail();
		}
	}
</script>