<template>
  <dl class="dlc">
      <dt>
          <img :src="item.coverUrl" alt="">
      </dt>
      <dd>
         <div class="title">
             {{item.bookName}}
         </div>
         <div class="authorName">
             作者：{{item.authorName}}
         </div>
      </dd>
  </dl>
</template>

<script>
export default {
   name:'dlc',
   props:{
       item:{
           type:Object,
           required:true,
           default:()=>{
               return {}
           }
       }
   }
}
</script>

<style>
  .dlc{
      width:100%;
      height:240px;

  }
  .dlc dt{
      width:100%;
      height:180px;
  }
  .dlc dt img{
      display: block;
      width:100%;
      height:100%;
  }
</style>