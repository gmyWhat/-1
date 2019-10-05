<template>
<div class="cont">
     <h4>本周特价</h4>
<div class="tejia">
     
      <dl>
          <dt>
             <img src="@/assets/images/prc_03.jpg" alt="">
          </dt>
          <dd>
              <div>北京古北水镇-古北之光温泉度假</div>
              <div>营养早餐/温泉体验/游泳</div>
              <div>
                  <span>自驾游</span><span><i>$1080</i>起/分</span>
              </div>
          </dd>
      </dl>
       <dl>
          <dt>
               <img src="@/assets/images/prc_05.jpg" alt="">
          </dt>
          <dd>
              <div class="tit">北京古北水镇-古北之光温泉度假</div>
              <div>营养早餐/温泉体验/游泳</div>
              <div>
                  <span>自驾游</span>
                  <span><i>$1080</i>起/分</span>
              </div>
          </dd>
      </dl>
  </div>
</div>
  
</template>

<script>
export default {

}
</script>

<style>

   h4{
       width: 100%;
       height:34px;
       border-left:3px solid orange;
       line-height: 34px;
   }
     .tejia{
         width:100%;
         height:200px;
         display: flex;
         justify-content: space-between;
     }
     .tejia dl{
         width:48%;
         height:200px;
     }
     .tejia dl dt{
         width:100%;
         height:140px;

     }
     .tejia dl dt img{
         display: block;
         width: 100%;
         height:100%;
     }
     .tejia dl dd div{
         font-size: 12px;

     }
     .tejia dl dd div.tit{
         color: #000;
     }
     .tejia dl dd div{
         display: flex;
         justify-content: space-between;
     }
     .tejia dl dd div span i{
         color: red;
     }
</style>