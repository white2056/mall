<template>
  <div id="app">
    <keep-alive exclude="detail"><router-view></router-view></keep-alive>
    <main-Tabbar></main-Tabbar>
  </div>
</template>

<script>

import mainTabbar from 'components/content/maintabbar'

export default {
  name: 'App',
  components: {
    mainTabbar
  }
}
</script>

<style scoped>
  @import "assets/css/base.css"
</style>
