<template>
<div id="mainView">
    
    <div id="mainViewCenter">
        <div class="mainSearch">
            <input type="text" class="mainInput" v-model="value" @keyup.enter="getSearchMessage">
            <a :href=searchValue class="searchIconBox" @click="getSearchMessage">
                <svg class="icon searchIcon" aria-hidden="true">
                    <use xlink:href="#icon-RectangleCopy1"></use>
                </svg>
            </a>
        </div>
        <span class="pageHomeTitle">QILIANG HOME PAGE</span> 
        <a href="">
            <svg class="icon downIcon" aria-hidden="true">
                <use xlink:href="#icon-RectangleCopy3"></use>
            </svg>
        </a>
  </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            getUrl:"https://www.google.com.hk/search?q=bilibili&oq=bilibili&aqs=chrome..69i57j0j0i12j69i60l5.4443j0j4&sourceid=chrome&ie=UTF-8",
            searchValue:null,
            value:""
        }
    },
    methods: {
        getSearchMessage: function() {
            this.searchValue = `https://www.google.com.hk/search?q=${this.value}`
            window.location.href=this.searchValue
        }
    },
}
</script>

<style scoped>
    *{
        padding: 0;
        margin: 0;
    }
    #mainView{
        background-image: url(../assets/imgs/mainBG.jpg);
        background-size: cover;
        background-attachment: fixed;
        background-repeat: no-repeat; 
    }
    #mainViewCenter{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: column;
        width: 100%;
        height: 740px;
        color: white;
        font-size: 5em;
    }
    #mainViewCenter a{
        cursor: pointer;
    }
    .downIcon{
        width: 80px;
        height: 80px;
        color: red;
        border-radius: 50%;
        border-bottom: 1px solid rgba(255, 0, 0, 0.603);
        box-shadow:
            0 2.8px 2.2px rgba(218, 4, 4, 0.046),
            0 6.7px 5.3px rgba(233, 12, 12, 0.064),
            0 12.5px 10px rgba(236, 19, 19, 0.077),
            0 22.3px 17.9px rgba(0, 0, 0, 0.088),
            0 41.8px 33.4px rgba(233, 16, 16, 0.103),
            0 100px 80px rgba(219, 15, 15, 0.14);
    }
    .mainSearch{
        display: flex;
        box-sizing: border-box;
        background-color: #fff;
        border-radius: 40px;
        padding: 10px;
    }
    .mainInput{
        outline: none;
        background: none;
        border: none;
        font-size: 25px;
        padding: 0 10px;
        margin: 10px 0;
        width: 0;
        transition: 0.5s;
    }
    .searchIcon{
        font-size: 30px;
        transition: 0.8s;
        color: red;
    }
    .searchIconBox{
        display: flex;
        background-color: rgb(37, 35, 35);
        align-items: center;
        margin: 0px 0px 0px -20px ;
        border-radius: 50%;
        padding: 10px;
        transition: 0.8s;
    }
    .mainSearch:hover .mainInput{
        width: 400px;
        transition: 0.5s;
    }
    .mainSearch:hover .searchIconBox .searchIcon{
        color: rgb(255, 255, 255);
        transition: 0.8s;
    }
    .mainSearch:hover .searchIconBox{
        background-color: red;
        transition: 0.8s;
    }
    
</style>