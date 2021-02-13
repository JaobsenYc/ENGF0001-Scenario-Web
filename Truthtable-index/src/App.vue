<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  },
  components:{
  }
}
</script>
<head>

</head>
<style>
body,html{
  width:100%;
  height:100%;
}
#app{
  width: 100%;

  height: 100%;
}
* {
    padding: 0;
    margin: 0;
    list-style: none;
    box-sizing: border-box !important;
}
</style>
