<template>
<div class="gridlist-demo-container">
  <mu-grid-list class="gridlist-demo" style="margin-top:56px;margin-bottom:56px;">
    <mu-grid-tile v-for="tile in list">
      <a :href="'#/detail/'+tile.id" class="mu-grid-tile">
       <img :src="'http://cdn.tgp.qq.com/pallas/images/champions_id/'+tile.id+'.png'"/>
      </a>
      <span slot="title">{{tile.title}}</span>
      <span slot="subTitle"><b>{{tile.ename}}</b></span>
      <mu-icon-button icon="star_border" slot="action"/>
    </mu-grid-tile>
  </mu-grid-list>
</div>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  methods:{
    getChampion:function(){
        this.$http.get('http://lolapi.games-cube.com/champion',{
            headers:{
               'DAIWAN-API-TOKEN':'78710-B0810-777C7-C9A85'
            }
        }).then(function(data){
            console.log(data);
            this.list = data.data.data;
        })
    }
  },
  mounted:function(){
    this.getChampion()
  }
}
</script>

<style>
.gridlist-demo-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.gridlist-demo{
  width: 500px;
  height: 100%;
  overflow-y: auto;
}
</style>