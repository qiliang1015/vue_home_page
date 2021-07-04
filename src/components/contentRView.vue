<template>
  <div id="contentR">
      <div class="containerR">
          <div class="urlLink" v-for="index in urlMessage" :key="index">
              <div class="urlName">
                  {{index.urlName}}
              </div>
              <div class="urlView">
                  {{index.urlIn}}
              </div>
              <div class="urlCount">
                  已访问{{index.count}}次
              </div>
              <div class="urlGo">
                  <a :href=index.GoLink> GO </a>
              </div>
          </div>
          <div class="prNext">
              <div class="prve">
                  <button>
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-perv"></use>
                      </svg>
                  </button>
              </div>
              <div class="pageCount">
                  <span v-for="pC in pageCount" :key="pC">
                      {{pC}}
                  </span>
              </div>
              <div class="next">
                  <button>
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-next"></use>
                      </svg>
                  </button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            urlMessage:[
                {
                    urlName:'Youtube',
                    urlIn:'www.youtube.com',
                    count:23,
                    GoLink:'https://www.youtube.com'
                },
                {
                    urlName:'Baidu',
                    urlIn:'www.baidu.com',
                    count:10,
                    GoLink:'https://www.baidu.com'
                },
                {
                    urlName:'BiliBili',
                    urlIn:'www.bilibili.com/',
                    count:19,
                    GoLink:'https://www.bilibili.com/'
                },
                {
                    urlName:'AcFun',
                    urlIn:'www.acfun.cn/',
                    count:1,
                    GoLink:'https://www.acfun.cn/'
                }
            ],
            pageCount:6  
        }
    },
}
</script>

<style scoped>
    #contentR{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 700px;
    }
    .span{
        height: 40px;
        margin: 20px 0;
        font-size: 3em;
    }
    .containerR{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        background: rgba(255,255,255, 0.507);
        box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.046),
  0 6.7px 5.3px rgba(0, 0, 0, 0.064),
  0 12.5px 10px rgba(0, 0, 0, 0.077),
  0 22.3px 17.9px rgba(0, 0, 0, 0.088),
  0 41.8px 33.4px rgba(0, 0, 0, 0.103),
  0 100px 80px rgba(0, 0, 0, 0.14)
;

        align-items: center;
        width: 90%;
        height: 550px;
        margin: 10px 0 30px 0;
        border-radius: 10px;
    }
    .urlLink{
        display: flex;
        box-sizing: border-box;
        align-items: center;
        justify-content: space-around;
        width: 90%;
        background-color: #fff;
        height: 40px;
        margin: 20px 0;
        border-radius: 5px;
        padding: 0px 10px;
    }
    .urlName{
        width: 20%;
        text-align: left;
        color: rgb(117, 175, 238);
    }
    .urlView{
        width: 35%;
        padding: 5px;
        text-align: left;
        color: rgba(248, 9, 9, 0.616);
    }
    .urlCount{
        width: 25%;
        padding: 5px;
        text-align: left;
        color: rgba(9, 53, 250, 0.575);
    }
    .urlGo{
        width: 10%;
        padding: 5px;
        text-align: left;
    }
    .urlGo a{
        width: 100%;
        text-align: center;
        display: inline-block;
        text-decoration: none;
        color: rgb(64,158,255);
        background-color: rgb(236,245,255);
        border-radius: 5px;
        border: 1px solid rgb(179,216,255);
    }
    .urlGo a:hover{
        background-color: rgba(64,158,255);
        color: rgb(255, 255, 255);
        transition: 0.5s;
    }
    .prNext{
        display: flex;
        justify-content: space-around;
        margin: 15px 0px;
        width: 60%;
    }
    .prNext button{
        background-color: transparent;
        border: none;
    }
    .pageCount{
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 60%;
    }
    .pageCount span{
        padding: 0px 2px;
        margin: 0 1px;
        width: 12%;
        background-color: rgba(103,194,58);
        color: rgb(255, 255, 255);
        border-radius: 5px;
    }
</style>