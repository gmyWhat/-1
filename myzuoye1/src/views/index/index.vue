<template>
  <div class="index" >
     <div class="header">
       <span class="icon iconfont icon-fangdajing"></span>
       <h3>自假游</h3>
       <span>我的 导航 <i class="icon iconfont icon-xiala"></i></span>
     </div>
     <div class="main" @scroll="fn()" ref="index">
       <div class="swi-per">
          <Item  :item='swiperarr'></Item>
       </div>
       <div class="week">
          <Tejia></Tejia>
       </div>
       <div class="bourn">
         <h4>热门目的地</h4>
          <ul class="ul">
             <div v-for="(item,index) in addres" :key="index" class="li" @click="$router.push({path:'/detail',params:{item:item}})">
              <li>{{item.name}}</li>  
         </div>
          </ul>
      </div>
       <div class="fujin">
            <h4>周边服务</h4>
            <div class="dl">
              <dl>
                <dt>
                  <img src="@/assets/images/xue_12.jpg" alt="">
                </dt>
                <dd>酒店</dd>
              </dl>
               <dl>
                <dt>
                  <img src="@/assets/images/xue_03.jpg" alt="">
                </dt>
                <dd>门票</dd>
              </dl>
               <dl>
                <dt>
                  <img src="@/assets/images/xue_07.jpg" alt="">
                </dt>
                <dd>汽车票</dd>
              </dl>
               <dl>
                <dt>
                  <img src="@/assets/images/xue_09.jpg" alt="">
                </dt>
                <dd>租车接待</dd>
              </dl>
               <dl>
                <dt>
                  <img src="@/assets/images/xue_09.jpg" alt="">
                </dt>
                <dd>当地游玩</dd>
              </dl>
            </div>
       </div>
       <div class="content" :class="{activec:open}">
            <ul class="list">
              <router-link to='/index/hot' tag='li' @click.native="listFn(0)" :class="{active:ind==0}">热门推荐</router-link>
             <router-link to='/index/weekend' tag='li' @click.native="listFn(1)" :class="{active:ind==1}">周末去哪</router-link>
              <router-link to='/index/feature' tag='li' @click.native="listFn(2)" :class="{active:ind==2}">特色住宿</router-link>
               <router-link to='/index/theme' tag='li' @click.native="listFn(3)" :class="{active:ind==3}">热门主题</router-link>
            </ul>
            <div class="listC">
              <router-view></router-view>
            </div>
       </div>
     </div>
     <div class="top" @click="fn1()">
       返回顶部
     </div>
  </div>
  
</template>

<script>
import '@/fons/iconfont.css'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import '@/mock/index'
 import Item from '@/components/item.vue'
 import Tejia from '@/components/tejia.vue'
 
export default {
   name:'index',
   mounted(){
     this.$http.get('/swiper/data').then(res=>{
     this.swiperarr=res.data
     this.$nextTick(()=>{
       new Swiper('.swiper-container',{
         loop:true,
         autoplay:true
       })
     })
     })
     this.$http.get('/addres/data').then(res=>{
      this.addres=res.data
     })
   },
   components:{
   Item,
   Tejia,

   },
   data(){
     return{
       swiperarr:[],
       addres:[],
       ind:0,
       open:false,
       scrollTop:null,
       offsetTop:null
     }
   },
   methods:{
      listFn(n){
        this.ind=n
         if(this.scrollTop>this.offsetTop){
         this.open=true
       }else{
         this.open=false
       }
      },
      fn(){
      this.scrollTop=this.$refs.index.scrollTop;
      this.offsetTop=this.$refs.index.offsetTop;
      
      },
      fn1(){
        console.log(12)
        this.$refs.index.scrollTop=44
      }
   }
}
</script>

<style>

    .index{
      width:100%;
      height:100%;
      display: flex;;
      flex-direction: column;
      position: relative;
    }
    .header{
      width:100%;
      height:44px;
      background: orange;
      display: flex;
      align-items: center;
      justify-content: space-between;
    
    }
.header span{
  font-size: 12px;
    padding: 0 5px;
}
.header span i.iconfont{
  font-size: 12px;
}
    .main{
      flex:1;
      width:100%;
      background: #f4f4;
      overflow: auto;
    
    }
    .week{
      margin-top: 5px;
       background: #fff;
    }
    .bourn{
      width: 100%;
      height:130px;
      margin-top: 5px;
      background: #fff;
   
    }
    .bourn h4{
      border-left:3px solid #0f0;
    }
    .ul{
       width: 100%;
       height:90px;
       display: flex;
       flex-wrap: wrap;
    }
    .li{
      width: 24.2%;
      height:30px;
      text-align: center;
      font-size: 13px;
      border:1px solid #ccc;
      line-height: 30px;
    }
    .fujin{
      width:100%;
      height:90px;
      background: #fff;
      margin-top: 5px;
    }
    .fujin h4{
      border-left:3px solid skyblue
    }
    .dl{
      width:100%;
      height:60px;
      display: flex;
     justify-content:space-between;
    }
    .dl dl{
      width:18%;
      height:50px;
      background: #f4f4f4;
    }
    .dl dl dt{
      width:100%;
      height:35px;
    }
     .dl dl dt img{
       display: block;
       margin: 0 auto;
     }
      .dl dl dd{
        text-align: center;
        font-size: 13px;
      }
      .content{
        width:100%;
        height:auto;
        margin-top: 5px;
        background: #fff;
        overflow: hidden;
      
      }
      .content.activec{
           position: fixed;
           top: 44px;
           z-index: 1

      }
      .list{
        width:100%;
        height:44px;
        display: flex;
        align-items: center;
      }
      .list li{
         flex: 1;
         height:100%;
         text-align: center;
         font-size: 14px;
         line-height: 44px;
       }
       .list li.active{
         border-bottom: 1px solid limegreen;
         color: limegreen;
       }
       .listC{
         width:100%;
         height:auto;
         overflow: auto;
       }
      
</style>