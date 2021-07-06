<template>
<div id="app">
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <headerView></headerView>
  <mainView></mainView>
  <!-- <contentView></contentView> -->
  <contentViewTwo></contentViewTwo>
  
</div>
  
</template>

<script>
import headerView from './components/headerView.vue'
// import contentView from './components/contentView.vue'
import contentViewTwo from './components/contentViewTwo.vue'
import mainView from './components/mainView.vue'
export default {
  name: 'app',
  components: {
    headerView,
    // contentView,
    contentViewTwo,
    mainView
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0; 
}
body{
  /* background-image: url(../src/assets/imgs/bodyBG5.jpg);
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat; */
  background-color: rgb(26,28,51);
}
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
