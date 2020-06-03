<template>
  <div class="cartList">
    <scroll class="cartContent" ref="scroll">
      <cart-list-item v-for="(item, index) in cartList" :product='item' :key="index"></cart-list-item>
    </scroll>
  </div>
</template>

<script>
import scroll from 'components/common/scroll/scroll'
import cartListItem from './cartListItem'

import { mapGetters } from 'vuex' 

export default {
  name: 'cartList',
  components: {
    scroll,
    cartListItem
  },
  computed: {
    ...mapGetters(['cartList'])
  },
  activated(){
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
  .cartList{
    position: absolute;
    top: 44px;
    bottom: 86px;
    left: 0;
    right: 0;
  }
  .cartContent{
    height: 100%;
    overflow: hidden;
  }
  
</style>