<template>
<mu-paper style="position:fixed;bottom:0;width:100%">
  <mu-bottom-nav :value="bottomNav" @change="handleChange">
    <mu-bottom-nav-item value="recents" href="#/index/news" title="资讯" icon="restore"/>
    <mu-bottom-nav-item value="yiong" href="#/index/heroes" title="英雄" icon="favorite"/>
    <mu-bottom-nav-item value="nearby" href="#/index/players" title="附近" icon="location_on"/>
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
  }
}
</script>