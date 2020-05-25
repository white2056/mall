<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommendItem">
      <a href="item.link">
        <img :src="item.image" alt="" @load="imageLoad3">
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'recommendView',
  props: {
    recommends: {
      type: Array,
      default(){
        return [] 
      }
    }
  },
  methods: {
    imageLoad3(){
      this.$emit('viewImageLoad')
    }
  }
}
</script>

<style scoped>
  .recommend {
    display: flex;
    margin-left: 10px;
    margin-top: 10px;

    border-bottom: 1px solid rgb(171, 171, 172);
  }
  .recommendItem img{
    width: 90%
  }
</style>