<template>
  <div class="swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(el,index) in item" :key="index">
               <img :src='el.img' alt="">
          </div>
      </div>
  </div>
</template>

<script>
export default {
      name:'swiper-container',
      props:{
         item:{
              type:Array,
          required:true,
          default:()=>{
              return []
          }
         }
      }
}
</script>

<style>
    .swiper-container{
        width: 100%;
        height:200px;
    } 
    .swiper-container img{
        display: block;
        width:100%;
        height:100%;
    }
</style>