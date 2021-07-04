<template>
    <div id="content">
        <contentLView id="contentL"></contentLView>
        <contentRView id="contentR"></contentRView>
    </div>
</template>

<script>
import contentLView from './contentLView.vue'
import contentRView from './contentRView.vue'
export default {
    components: {
    contentLView,
    contentRView
  }
}
</script>

<style scoped>
    #content{
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
    #contentL{
        width: 30%;
        transition: 0.3s;
    }
    #contentL:hover{
        width: 100%;
        transition: 0.6s;
    }
    
    #contentR{
        width: 100%;

    }
</style>