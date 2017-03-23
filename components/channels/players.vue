<template>
	//组件中只能有一个根节点
	<div>
		<div class="all">
			<div class="demo" v-for="list in lists">
				<a :href="list.appurl">
					<div class="top">
						<!--添加播放标签-->
						<mu-icon value="pause"/>
						<img :src="list.appthumb"/>
						<span class="author">{{list.author}}</span>
						<span class="time">{{list.time}}</span>
					</div>
					<p class="title">{{list.title}}</p>
					<p class="last">
						<span class="minutes">47分钟前</span>
						<span class="play">{{list.play}}播放</span>
					</p>
				</a>
			</div>
		</div>
	</div>
</template>
<style>
	.all{
		margin-top:56px;
		background-color:#ddd;
		overflow:hidden;
		position:relative;
	}
	.demo{
		width:47%;
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
	.mu-icon.material-icons{
		color:#fff;
		position:absolute;
		top:25px;
		left:60px;
		border-radius:40%;
		background-color:rgba(0,0,0,0.7);
	}
</style>
<script>
	//ES6不能使用，会报错，改为ES5写法
	module.exports = {
		data:function(){
			return {
				lists:[],
				page:3
			}
		},
		methods:{
			getNewstVideos:function(){
				this.$http.jsonp('http://localhost:88/php/video.php',{
					params:{
						callback:'JSON_CALLBACK',
						page:this.page
					}
				}).then(function(data){
					console.log(data)
					this.lists = data.data.msg.result
				})
			}
		},
		mounted:function(){
			this.getNewstVideos()
		}
	}
</script>
