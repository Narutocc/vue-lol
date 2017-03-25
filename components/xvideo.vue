<template>
	<div>
		//组件中只能有一个根节点
		<div class="header">
		    <span class="arrow" @click="back"><</span>
		    <span>最新视频</span>
		 </div>
		<div class="all">
			<div class="demo" v-for="list in lists">
				<a :href="list.appurl">
					<div class="top">
						<!--添加播放标签-->
						<!--<mu-icon value="pause"/>-->
						<img :src="list.appthumb"/>
						<span class="author">{{list.author}}</span>
						<span class="time">{{list.time}}</span>
					</div>
					<p class="title">{{list.title}}</p>
					<p class="last">
						<span class="minutes">{{list.pubdate|time}}</span>
						<span class="play">{{list.play}}播放</span>
					</p>
				</a>
			</div>
		</div>
		<!--实现加载更多-->
    	<mu-infinite-scroll :loading="loading" @load="getNewstVideos()"/>
	</div>
</template>
<script>
	//ES6不能使用，会报错，改为ES5写法
	module.exports = {
		data:function(){
			return {
				lists:[],
				page:1,
				loading:false
			}
		},
		methods:{
			getNewstVideos:function(){
				this.loading = true;
				this.$http.jsonp('http://localhost:88/php/video.php',{
					params:{
						callback:'JSON_CALLBACK',
						page:this.page
					}
				}).then(function(data){
					console.log(data);
					this.lists = this.lists.concat(data.data.msg.result);
					this.loading = false;
					this.page++;
				})
			},
			back:function(){
		      window.history.go(-1);
		    }
		},
		filters:{
			time:function(input){
				var a;
				var d = new Date();
				var now = Date.parse(d);
				var past = Date.parse(input);
				var hour = (now - past)/1000/60/60;
				//console.log(hour)
				if(hour > 24){
					a =  Math.floor(hour/24) + '天前';
				}else if(hour < 24 && hour >=1){
					a =  Math.floor(hour) + '小时前';
				}else if(hour < 1){
					a =  Math.floor(hour*60) + '分前';
				}
				return a;
			}
		},
		mounted:function(){
			this.getNewstVideos();
		}
	}
</script>
<style>
	.all{
		margin-top:35px;
		background-color:#ddd;
		overflow:hidden;
		position:relative;
	}
	.demo{
		width:47%;
		height:166px;
		float:left;
		margin:5px;
		background-color:#fff;
		padding:10px;
	}
	.demo .top{
		position:relative;
	}
	.demo .top span{
		position:absolute;
		color:#fff;
	}
	.demo .top .author{
		left:0;
		bottom:10px;
		font-size:10px;
	}
	.demo .top .time{
		right:0;
		top:0;
	}
	.demo img{
		width:100%;
	}
	.demo p{
		margin:0;
		color:#000;
	}
	.demo .title{
		overflow:hidden;
		text-overflow:ellipsis;
		display:-webkit-box;
		-webkit-line-clamp:2;
		-webkit-box-orient:vertical;
	}
	.demo .last{
		overflow:hidden;
	}
	.demo .last span{
		font-size:10px;
		color:#ccc;
	}
	.demo .minutes{
		float:left;
	}
	.demo .last .play{
		float:right;
		color:orange;
	}
	/*.mu-icon.material-icons{
		color:#fff;
		position:absolute;
		top:25px;
		left:60px;
		border-radius:40%;
		background-color:rgba(0,0,0,0.7);
	}*/
</style>
