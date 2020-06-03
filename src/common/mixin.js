import {debounce} from 'common/utils'
import backTop from 'components/content/backtop/backTop'

export const itemListenerMixin = {
  data(){
    return {
      itemImgListener: null
    }
  },
  mounted(){
    const refresh = debounce(this.$refs.scroll.refresh, 10)

    this.itemImgListener = () => {
      refresh()
    }
 
    this.$bus.$on('itemImageLoad', this.itemImgListener)
    // console.log('hunru');
    
  }
}

export const backTopMixin = {
  components: {
    backTop
  },
  data(){
    return {
      isShow: false,
    }
  },
  methods: {
    backClick(){
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
  }
}