<template>
  <div id="header">
      <div class="headerLeft">
          <ul>
              <li>
                  QiLiang
              </li>
          </ul>
      </div>
      <div class="headerRight">
          <ul>
            <li>
                <a href="">H-PAGE</a>
            </li>
            <li>
                <a href="">分类</a>
            </li>
            <li>
                <a href="">TIME</a>
            </li>
            <li>
                <a href="">关于</a>
            </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    *{
        padding: 0;
        margin: 0;
    }
    a,li{
        list-style: none;
        text-decoration: none;
        color: inherit;
    }
    #header{
        box-sizing: border-box;
        display:flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 60px;
        background-color: rgba(8, 0, 0, 0.575);
        padding: 10px;
        box-shadow:
            0 2.8px 2.2px rgba(218, 4, 4, 0.046),
            0 6.7px 5.3px rgba(233, 12, 12, 0.064),
            0 12.5px 10px rgba(236, 19, 19, 0.077),
            0 22.3px 17.9px rgba(0, 0, 0, 0.088),
            0 41.8px 33.4px rgba(233, 16, 16, 0.103),
            0 100px 80px rgba(219, 15, 15, 0.14);
        
    }
    .headerLeft{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 100%;
        width: 300px;
        font-size: 2em;
        color: rgb(255, 255, 255);
    }
    .headerRight{
        width: 400px;
        height: 100%;
        color: rgb(255, 255, 255);
    }
    .headerRight ul{
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 1.2em;
    }
    .headerRight ul li{
        box-sizing: border-box;
        display: flex;
        align-items: center;
        border: rgb(226, 226, 212,0) 2px solid;
    }
    .headerRight ul li a{
        display: inline-block;
        margin: 4px;
    }
    .headerRight ul li:hover{
        /* background: rgb(245, 7, 7); */
       border-bottom: rgb(233, 6, 6) 2px solid;
       transition: 0.6s;
       color: rgb(255, 0, 0);
    }
</style>
