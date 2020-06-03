<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav-bar" @titleClick='titleClick' ref="nav"></detail-nav-bar>
    <scroll class="detailContent" ref="scroll" @scroll="contentScroll" :probe-type='3'>
      <detail-swiper :topImages='topImages'></detail-swiper>
      <detail-base-info :goods='goods'></detail-base-info>
      <detail-shop-info :shop='shop'></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info :paramInfo='paramInfo' ref="params"></detail-param-info>
      <detail-dis :discuss='discuss' ref="comment"></detail-dis>
      <goods-list :goods='recommends' ref="recommend"></goods-list>
    </scroll>
    <back-top @click.native='backClick' v-show="isShow"></back-top>
    <detailBottomBar @addToCart='addToCart'></detailBottomBar>
  </div>
</template>

<script>
import detailNavBar from './childComps/detailNavBar'
import detailSwiper from  './childComps/detailSwiper'
import detailBaseInfo from './childComps/detailBaseInfo'
import detailShopInfo from './childComps/detailShopInfo'
import detailGoodsInfo from './childComps/detailGoodsInfo'
import detailParamInfo from './childComps/detailParamInfo'
import detailDis from './childComps/detailDis'
import goodsList from 'components/content/goods/goodsList' 
import detailBottomBar from './childComps/detailBottomBar'

import scroll from 'components/common/scroll/scroll'

import {debounce} from 'common/utils'
import {itemListenerMixin, backTopMixin} from 'common/mixin'

import {getDetail, Goods, Shop, goodsParam, discuss, getRecommend} from 'network/detail'

export default {
  name: 'detail',
  components: { 
    detailNavBar,
    detailSwiper,
    detailBaseInfo,
    detailShopInfo,
    detailGoodsInfo,
    detailParamInfo,
    detailDis,
    scroll,
    goodsList,
    detailBottomBar
  },
  mixins: [itemListenerMixin, backTopMixin],
  data(){
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      discuss: {},
      recommends: [],
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0
    }
  },
  created(){
    this.iid = this.$route.params.iid

    getDetail(this.iid).then(res => {
      const data = res.result
      console.log(res);
      
      
      this.topImages = data.itemInfo.topImages

      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

      this.shop = new Shop(data.shopInfo)

      this.detailInfo = data.detailInfo;

      this.paramInfo = new goodsParam(data.itemParams.info, data.itemParams.rule)

      this.discuss = new discuss(data.rate)
    })

    getRecommend().then(res => {
      this.recommends = res.data.list
    })

    this.getThemeTopY = debounce(() => {
      this.themeTopYs = []
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.params.$el.offsetTop)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
    },300)
  },
  methods: {
    imageLoad(){
      this.$refs.scroll.refresh()
      this.getThemeTopY()
    },
    titleClick(index){
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 100)
    },
    contentScroll(position){
      
      
      const positionY = -position.y
      
      let length = this.themeTopYs.length
      for(let i=0; i<length; i++){
        if(this.currentIndex != i && i<length-1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1] || 
                                  (i === length - 1) && positionY >= this.themeTopYs[i])
        {
          this.currentIndex = i
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }
      this.isShow = (-position.y) > 1000
    },
    addToCart(){
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid

      // this.$store.commit('addCart', product)
      this.$store.dispatch('addCart', product).then(res => {
        this.$toast.show(res, 1500)
      })
    }
  },
  mounted(){
    // const refresh = debounce(this.$refs.scroll.refresh, 10)

    // this.itemImgListener = () => {
    //   refresh()
    // }
 
    // this.$bus.$on('itemImageLoad', this.itemImgListener)
  },
  destroyed() {
    this.$bus.$off('itemImageLoad', this.itemImgListener)
  }
}
</script>

<style scoped>
  #detail{
    position: relative;
    z-index: 101;
    background-color: #fff;
    height: 100vh;
  }
  .detailContent{
    position: absolute;
    top: 44px;
    bottom: 60px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
  .detail-nav-bar{
    position: relative;
    z-index: 102;
    background-color: #fff;
  }
</style>