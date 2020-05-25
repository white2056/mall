<template>
  <div class="tabcontrol">
    <div v-for="(item, index) in titles" class="tabItem" 
    :class="{active: index === currentIndex}"
    @click = 'itemClick(index)'
    :key="index">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabControl',
  props: {
    titles: {
      type: Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index){
      this.currentIndex = index
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style scoped>
  .tabcontrol{
    display: flex;
    text-align: center;
    font-size: 15px;
    background-color: #fff;
    z-index: 9;
  }

  .tabItem{
    flex: 1;
    height: 40px;
    line-height: 40px;
  }

  .active{
    color: var(--color-high-text);
  }

  .active span{
    border-bottom: 2px solid var(--color-tint);
    padding: 5px;
  }
</style>