<template>
  <div class="feature">
    <a href="https://act.mogujie.com/zzlx67">
      <img src="~assets/img/home/recommend_bg.jpg" alt="" @load="imageLoad2">
    </a>
  </div>
</template>

<script>
export default {
  name: 'featureView',
  methods: {
    imageLoad2(){
      this.$emit('featureImageLoad')
    }
  }
}
</script>

<style>
  .feature img{
    width: 100%
  }
</style>