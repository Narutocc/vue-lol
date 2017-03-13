<template>
      <swiper :options="swiperOption" style="margin-top:56px">
        <swiper-slide v-for="swiper in swipers">
            <a :href="swiper.article_url">
                <img :src="swiper.image_url_big" height="20%" width="100%"/>
            </a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
</template>
<script>
    module.exports = {
        data:function(){
            return {
                swipers:[],
                swiperOption: {
                    pagination: '.swiper-pagination',
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                    paginationClickable: true,
                    spaceBetween: 30,
                    centeredSlides: true,
                    autoplay: 2500,
                    autoplayDisableOnInteraction: false
                }
            }
        },
        methods:{
            getBanner:function(){
                this.$http.jsonp('http://localhost:88/php/banner.php',{
                    params:{
                        callback:'JSON_CALLBACK'
                    }
                }).then(function(data){
                    console.log(data);
                    this.swipers = data.data.list
                },function(err){

                })
            }
        },
        mounted:function(){
            this.getBanner()
        }
    }
</script>