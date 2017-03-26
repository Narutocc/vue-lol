<template>
	<div>
		<div class="header">
		    <span class="arrow" @click="back"><</span>
		    <span style="margin-left:112px">{{list.name}}</span>
		 </div>
		<img :src="'http://cdn.tgp.qq.com/pallas/images/skins/original/'+key+'-'+id+'.jpg'" class="big"/>
		<div class="infoes">
			<p>{{list.name}}</p>
			<p>{{list.id}}</p>
			<p>属性：</p>
			<p><span>攻：{{list.info.attack}}</span><span>法：{{list.info.magic}}</span></p>
			<p><span>防：{{list.info.defense}}</span><span>操作：{{list.info.difficulty}}</span></p>
		</div>
		<div class="container">
			<span @click="show(1)" :class="{'active':page1}">技能说明</span>
			<span @click="show(2)" :class="{'active':page2}">皮肤欣赏</span>
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
			<p>点击皮肤可以观看介绍视频哦</p>
			<div v-for="skin in skins">
				<div style="text-align:center">
					<a :href="skin.displayUrl">
						<img :src="'http://cdn.tgp.qq.com/pallas/images/skins/original/'+key+'-'+skin.id+'.jpg'" />
					</a>
					<p class="name">{{skin.name}}</p>
				</div>
			</div>
		</div>
	</div>
</template>
<style>
	p{
		margin:0;
		padding:0;
	}
	.big{
		margin-top:56px;
		width:100%;
		height:200px;
	}
	.container{
		height:52px;
		line-height:52px;
		background-color:#6058aa;
		margin-top:-6px;
	}
	.container span{
		color:#fff;
		font-size:16px;
		display:inline-block;
		width:49%;
		text-align:center;
	}
	.detail{
		overflow:hidden;
		margin:15px 10px;
	}
	.detail img{
		width:100px;
		height:100px;
	}
	.left{
		float:left;
	}
	.right{
		float:right;
		width:250px;
	}
	.right p:first-child{
		font-weight:bold;
	}
	.container span.active{
		color:#000;
		font-weight:bold;
		border-bottom:1px solid red;
	}
	.skin p{
		margin:10px;
		font-size:16px;
		border-bottom:2px dotted #ccc;
	}
	.skin img{
		width:80%;
		height:100%;
	}
	.skin .name{
		font-size:16px;
		margin-bottom:20px;
		letter-spacing:2px;
		font-weight:bold;
	}
	.infoes{
		position:absolute;
		left:28px;
		top:95px;
		color:#fff;
		line-height:22px;
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
			},
			back:function(){
				window.history.go(-1);
			}
		},
		mounted:function(){
			this.getChampionDetail();
		}
	}
</script>