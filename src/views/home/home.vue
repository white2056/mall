<template>
  <div id="home">
    <nav-bar class="homeNav"><div slot="center">购物街</div></nav-bar>
    <tabControl   :titles="['流行', '新款', '精选']"
                  @tabClick="tabClick"
                  ref="topControl1"
                  class="tab-control"
                  v-show="isTabFixed"></tabControl>
    <scroll class="content" ref='scroll' :probe-type='3' @scroll="contentScroll" :pull-up-load='true' @pullingUp='loadMore'>
      <homeSwiper :banners="banners" @swiperImageLoad='swiperImageLoad'></homeSwiper>
      <recommendView :recommends="recommends" @viewImageLoad='viewImageLoad'></recommendView>
      <featureView @featureImageLoad='featureImageLoad'></featureView>
      <tabControl :titles="['流行', '新款', '精选']"
                  @tabClick="tabClick"
                  ref="topControl2"></tabControl>
      <goodsList :goods="showGoods"></goodsList>
    </scroll>

    <back-top @click.native='backClick' v-show="isShow"></back-top>
  </div>
</template>

<script>

  import homeSwiper from './childcomps/homeSwiper'
  import recommendView from './childcomps/recommendView'
  import featureView from './childcomps/featureView'

  import navBar from 'components/common/navbar/navBar';
  import tabControl from 'components/content/tabcontrol/tabControl'
  import goodsList from 'components/content/goods/goodsList'
  import scroll from 'components/common/scroll/scroll'
  // import backTop from 'components/content/backtop/backTop'

  import {getHomeMultidata, getHomeGoods} from 'network/home';
  import {debounce} from 'common/utils'
  import {itemListenerMixin, backTopMixin} from 'common/mixin'


export default {
  name: 'home',
  components: {
    homeSwiper,
    recommendView,
    featureView,
    navBar,
    tabControl,
    goodsList,
    scroll,
  
  },
  mixins: [itemListenerMixin, backTopMixin],
  data(){
    return{
      banners: [],
      recommends: [],
      goods: {
        'pop':{page: 0, list: []},
        'new':{page: 0, list: []},
        'sell':{page: 0, list: []},
      },
      currentType: 'pop',
      // isShow: false,
      tabOffsetTop: 0, 
      isTabFixed: false,
      load1: false,
      load2: false,
      load3: false,
      saveY: 0,
      
    }
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  created(){
    this.getHomeMultidata()

    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted(){
    
    // const refresh = debounce(this.$refs.scroll.refresh, 10)

    // this.itemImgListener = () => {
    //   refresh()
    // }
 
    // this.$bus.$on('itemImageLoad', this.itemImgListener)

  },
  activated(){
    this.$refs.scroll.refresh()
    this.$refs.scroll.scroll.scrollTo(0, this.saveY)
  },
  deactivated(){
    this.saveY = this.$refs.scroll.scroll.y

    this.$bus.$off('itemImageLoad', this.itemImgListener)
  },
  methods: {
    tabClick(index){
      switch(index){
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.topControl1.currentIndex = index
      this.$refs.topControl2.currentIndex = index
    },
    // backClick(){
    //   this.$refs.scroll.scrollTo(0, 0, 500)
    // },
    contentScroll(position){
      this.isShow = (-position.y) > 1000

      this.isTabFixed = (-position.y) > this.tabOffsetTop
    },

    getHomeMultidata(){
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        this.$refs.scroll.finishPullUp()
      })

    },
    loadMore(){
      this.getHomeGoods(this.currentType)
    },
    swiperImageLoad(){
      this.load1 = true
      if(this.load1 && this.load2 && this.load3)
        this.tabOffsetTop = this.$refs.topControl2.$el.offsetTop
    },
    featureImageLoad(){
      this.load2 = true
      if(this.load1 && this.load2 && this.load3)
        this.tabOffsetTop = this.$refs.topControl2.$el.offsetTop
    },
    viewImageLoad(){
      this.load3 = true
      if(this.load1 && this.load2 && this.load3)
        this.tabOffsetTop = this.$refs.topControl2.$el.offsetTop
    }
  }
}
</script>

<style scoped>
  #home{
    
    height: 100vh;
    position: relative;
  }
  .homeNav{
      background-color: var(--color-tint);
      
      /* position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 6; */
    }
    .content{
      
      overflow: hidden;
      position: absolute;
      top:44px;
      bottom: 49px;
      left: 0;
      right: 0;
    }
    .tab-control{
      position: relative;
      z-index: 20;
    }
    
</style>