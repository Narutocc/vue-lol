<template>
  <mu-list>
    <mu-list-item :title="list.title" v-for="list in lists" :key="list.id" :href="list.article_url">
      <mu-avatar :src="list.image_url_small" slot="leftAvatar"/>
      <span slot="describe">
        <span style="color: rgba(0, 0, 0, .87)">{{list.summary}}</span>
      </span>
    </mu-list-item>
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
            lists:[]
         }
    },
    methods:{
        getNews:function(){
            this.$http.jsonp('http://localhost:88/php/list.php',{
                params:{
                    callback:'JSON_CALLBACK'
                }
            }).then(function(data){
                console.log(data);
                this.lists = data.data.list
            },function(err){

            })
        }
    },
    mounted:function(){
        this.getNews()
    }
}
</script>