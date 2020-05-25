<template>
    <tab-Bar>
      <tab-Bar-Item path='/home'>
        <img slot="itemicon" src="~assets/img/tabbar/shouye2.svg" alt="">
        <img slot="itemiconActive" src="~assets/img/tabbar/shouye.svg" alt="">
        <div slot="itemtext">首页</div>
      </tab-Bar-Item>
      <tab-Bar-Item path='/category'>
        <img slot="itemicon" src="~assets/img/tabbar/fenlei2.svg" alt="">
        <img slot="itemiconActive" src="~assets/img/tabbar/fenlei.svg" alt="">
        <div slot="itemtext">分类</div>
      </tab-Bar-Item>
      <tab-Bar-Item path='/cart'>
        <img slot="itemicon" src="~assets/img/tabbar/gouwu2.svg" alt="">
        <img slot="itemiconActive" src="~assets/img/tabbar/gouwu.svg" alt="">
        <div slot="itemtext">购物车</div>
      </tab-Bar-Item>
      <tab-Bar-Item path='/profile'>
        <img slot="itemicon" src="~assets/img/tabbar/wode2.svg" alt="">
        <img slot="itemiconActive" src="~assets/img/tabbar/wode.svg" alt="">
        <div slot="itemtext">我的</div>
      </tab-Bar-Item>
    </tab-Bar>
</template>

<script>
import tabBar from 'components/common/tabbar/tabBar';
import tabBarItem from 'components/common/tabbar/tabBarItem'

export default {
  name: 'maintabbar',
  components: {
    tabBar,
    tabBarItem
  }
}
</script>

<style>

</style>
