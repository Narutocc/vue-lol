<template>
	<div>
		<img :src="'http://cdn.tgp.qq.com/pallas/images/skins/original/'+key+'-'+id+'.jpg'"/>
		<div class="container">
			<span @click="show(1)" :class="{'active':page1}">技能</span>
			<span @click="show(2)" :class="{'active':page2}">皮肤</span>
		</div>
		<div class="spell" v-if="page1">
			<div v-for="spell in spells" class="detail">
				<div class="left">
					<img :src="'http://ossweb-img.qq.com/images/lol/img/spell/'+spell.image.full" />
				</div>
				<div class="right">
					<p>{{spell.name}}</p>
					<p>{{spell.tooltip}}</p>
				</div>
			</div>
		</div>
		<div class="skin" v-if="page2">
			<div v-for="skin in skins">
				<a :href="skin.displayUrl">
					<img :src="'http://cdn.tgp.qq.com/pallas/images/skins/original/'+key+'-'+skin.id+'.jpg'" />
				</a>
				<p>{{skin.name}}</p>
			</div>
		</div>
	</div>
</template>
<style>
	p{
		margin:0;
		padding:0;
	}
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
	.detail{
		overflow:hidden;
	}
	.detail img{
		width:50px;
		height:50px;
	}
	.left{
		float:left;
	}
	.right{
		float:right;
	}
	.active{
		color:red;
	}
</style>
<script>
	export default {
		data:function(){
			return {
				list:[],
				key:'',
				id:'',
				data:'',
				spells:[],
				skins:[],
				page1:true,
				page2:false
			}
		},
		methods:{
			getChampionDetail:function(){
				/*this.$http.get('http://ossweb-img.qq.com/upload/qqtalk/lol_hero/hero_104.js').then(function(data){
					console.log(data)
					this.data = data.data;
				})*/
				this.$http.get('http://lolapi.games-cube.com/GetChampionDetail?champion_id=' + this.$route.params.id,{
					headers:{
						'DAIWAN-API-TOKEN':'78710-B0810-777C7-C9A85'
					}
				}).then(function(data){
					console.log(data);
					this.list = data.data.data[0];
					console.log(this.list)
					this.key = this.list.key;
					this.id = this.list.skins[0].id;
					this.spells = data.data.data[0].spells;
					this.skins = data.data.data[0].skins;
				})
			},
			show:function(page){
				if(page == 1){
					this.page1 = true;
					this.page2 = false;
				}else if(page == 2){
					this.page1 = false;
					this.page2 = true;
				}
			}
		},
		mounted:function(){
			this.getChampionDetail();
		}
	}
</script>