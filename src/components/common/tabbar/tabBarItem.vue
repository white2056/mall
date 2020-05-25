<template>
  <div id="tabbaritem" @click="itemclick">
    <slot v-if='!isActive' name='itemicon'></slot>
    <div v-else><slot name="itemiconActive"></slot></div>
    <div :class="{active: isActive}"><slot name="itemtext"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'tabBarItem',
  props: {
    path: String
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    }
  },
  methods: {
    itemclick(){
     this.$router.replace(this.path).catch(err=>{})//捕获异常（双击报错的问题）
    }
  }
}
</script>

<style scoped>
  #tabbaritem{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 13px;
  }

  #tabbaritem img{
    width: 26px;
    height: 26px;
    vertical-align: middle;
    margin-top: 3px;
    margin-bottom: 2px;
  }

  .active{
    color:#1296db
  }
</style>