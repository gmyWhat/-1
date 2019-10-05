<template>
  <div class="hot">
    <ol class="ol">
      <li v-for="(item,index) in listarr" :key="index" @click="liFn(index)" :class="{tag:isc===index}">
        {{item}}
      </li>
    </ol>
    <div>
       <dlC v-for="(item,index) in newlist" :key="index" :item="item" @click.native="dlFn(item,'detail')"></dlC>
    </div>
  </div>
</template>

<script>
import '@/mock/index'
import dlC from '@/components/dlc.vue'
export default {
  name:'hot',
  components:{
     dlC
  },
  mounted(){
    this.$http.get('/add/data').then(res=>{
     this.newarr=res.data[0]
     this.newlist=this.newarr['ranklist'+this.isc]
     
    })
  },
    data(){
      return {
        listarr:['古北冰镇',"北戴河",'青岛',"天津"],
        isc:0,
        newarr:{},
        newlist:[]
      }
    },
    methods:{
      liFn(n){
        this.isc=n
        this.newlist=this.newarr['ranklist'+n]
       
      },
      dlFn(item,Url){
        this.$router.push({
          name:Url,
          params:{
            item:item
          }
        }).catch(el=>{})
      }
    }
}
</script>

<style>
  .hot{
    width:100%;
    height:auto;
  }
  .ol{
    width:100%;
    height:34px;
    display: flex;
    justify-content: space-between;
    
    
  }
  .ol li{
    width:23%;
    height:30px;
    border-radius: 30px;
    background: #f4f4f4;
    text-align: center;
  }
  .ol li.tag{
    color:green;
  }
</style>