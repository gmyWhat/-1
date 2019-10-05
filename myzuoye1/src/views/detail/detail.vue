<template>
  <div>
    <div class="titc">
     <span @click="$router.back()"><返回</span>
     <span>详情页</span>
     <span></span>
    </div>
    <dlC :item='obj'></dlC>
  </div>
</template>

<script>
import dlC from '@/components/dlc.vue'
export default {
   mounted(){
     this.obj=this.$route.params.item
     console.log(this.obj)
   },
   components:{
     dlC
   },
   data(){
     return {
        obj:{}
     }
   }
}
</script>

<style>
    .titc{
      width:100%;
      height:44px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
</style>