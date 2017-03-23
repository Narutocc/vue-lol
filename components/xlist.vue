<template>
  <mu-list :style="{height:listHeight-306+'px'}">
    <mu-list-item :title="list.title" v-for="list in lists" :key="list.id" :href="list.article_url">
      <mu-avatar :src="list.image_url_small" slot="leftAvatar"/>
      <span slot="describe">
        <span style="color: rgba(0, 0, 0, .87)">{{list.summary}}</span>
      </span>
    </mu-list-item>
    <!--实现加载更多-->
    <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="getNews"/>
  </mu-list>
</template>
<style>
    .mu-avatar,.mu-avatar img{
        border-radius:0;
        width:50px;
        height:50px;
    }
    .mu-item-title{
        font-weight:bold;
    }
    .mu-item-text{
        color:#ccc;
    }
</style>
<script>
module.exports = {
    data:function() {
         return {
            lists:[],
            listHeight:'',
            scroller:null,
            loading:false
         }
    },
    methods:{
        getNews:function(){
            this.loading = true;
            this.$http.jsonp('http://localhost:88/php/list.php',{
                params:{
                    callback:'JSON_CALLBACK'
                }
            }).then(function(data){
                console.log(data);
                this.lists = this.lists.concat(data.data.list);
                this.loading = false;
            })
        },
        getClientHeight:function(){
            var self = this;
            //获取屏幕的高度
            console.log(window.screen);
            this.listHeight = window.screen.height;
            //监听手机类型改变时屏幕高度的改变
            window.addEventListener('revise',function(){
                console.log(window.screen);
                self.listHeight = window.screen.height;
            })
        }
    },
    mounted:function(){
        this.getNews();
        this.getClientHeight();
        this.scroller = this.$el;
        console.log(this.scroller)
    }
}
</script>
<style lang="css">
    .demo-infinite-container {
        width: 100%;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
    }
</style>