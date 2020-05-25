<template>
  <div class="goods">
    <goodsListItem v-for="(item, index) in goods" :goodsItem = 'item' :key="index"></goodsListItem>
  </div>
</template>

<script>

import goodsListItem from './goodsListItem'

export default {
  name: 'goodsList',
  components: {
    goodsListItem
  },
  props: {
    goods: {
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    padding: 2px;
  }
</style>