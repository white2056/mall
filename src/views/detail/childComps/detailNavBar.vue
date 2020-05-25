<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item, index) in titles" 
             class="titleItem" 
             :class="{active: index === currentIndex}" 
             @click="itemClick(index)"
             :key="index">{{ item }}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import navBar from 'components/common/navbar/navBar'

export default {
  name: 'detailNavBar',
  components: {
    navBar
  },
  data(){
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index){
      this.currentIndex = index
      this.$emit('titleClick', index)
    },
    backClick(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.title{
  display: flex;
}
.titleItem{
  flex: 1;
  font-size: 15px
}
.active{
  color: #1296db;
}
.back img{
  margin-top: 10px;
}
</style>