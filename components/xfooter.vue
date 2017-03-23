<template>
<mu-paper style="position:fixed;bottom:0;width:100%">
  <mu-bottom-nav :value="bottomNav" @change="handleChange">
    <mu-bottom-nav-item value="recents" href="#/index/news/1" title="资讯" icon="restore"/>
    <mu-bottom-nav-item value="yiong" href="#/index/heroes/2" title="英雄" icon="favorite"/>
    <mu-bottom-nav-item value="nearby" href="#/index/players/3" title="视频" icon="tv"/>
  </mu-bottom-nav>
</mu-paper>
</template>

<script>
export default {
  data () {
    return {
      bottomNav: 'recents'
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    }
  },
  mounted:function(){
    console.log(this.$route.params.id);
    var id = this.$route.params.id;
    switch(id){
      case '1':
        this.bottomNav = 'recents';
        break;
      case '2':
        this.bottomNav = 'yiong';
        break;
      case '3':
        this.bottomNav = 'nearby';
        break;
    }
  }
}
</script>