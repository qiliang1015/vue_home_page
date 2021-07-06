
<template>
<div id="contentViewTwo">
    <div class="contentTF">
      <span class="carouselTitle">FEEL SHOW</span>
      <span class="carouselDeputyTitle">这是一个分享的乐园</span>
    </div>
    <div id="CarouselImgView">
    <el-carousel :interval="2000" type="card" height="400px" >
      <el-carousel-item v-for="item in imgList" :key="item" >
        <h3 class="medium"><img  class="carouselImg" :src="item" alt=""></h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</div>
  
</template>

<script>
  export default{
    data() {
      return {
        imgList:[
          require('../assets/imgs/bodyBG1.jpg'),
          require('../assets/imgs/bodyBG3.jpg'),
          require('../assets/imgs/bodyBG4.jpg'),
          require('../assets/imgs/bodyBG5.jpg')
        ]
      }
    },
  }
</script>

<style >
#contentViewTwo{
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 20px;
  background-image: url(../assets/imgs/contentView2BG.jpg);
  background-size: cover;
  background-repeat: no-repeat; 
  height: 900px;
}
.contentTF{
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: 50px 0px;
}
.carouselImgBox{
  height: 600px;
}
.carouselTitle{
  font-size: 4em;
  color: #eaebe5d2;
}
.carouselDeputyTitle{
  font-size: 20px;
  color: rgba(0, 255, 255, 0.795);
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .carouselImg{
    width: 100%;
    height: 100%;
  }
</style>
