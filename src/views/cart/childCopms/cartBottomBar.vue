<template>
  <div class="bottom-bar">
    <div class="check-content" >
      <check-button :isChecked='isSelectAll' class="check-button" @click.native="checkClick"></check-button>
      <span>全选</span>
    </div>
    <div class="price">
      合计: {{ totalPrice }}
    </div>
    <div class="calculate">
      个数{{ checkLength }}
    </div>
  </div>
</template>

<script>
import checkButton from 'components/content/checkButton/checkButton'

export default {
  name: 'cartBottomBar',
  components: {
    checkButton
  },
  computed: {
    totalPrice(){
      return this.$store.state.cartList.filter(item => {
        return item.checked
      }).reduce((pre, item) => {
        return pre + (item.price * item.count)
      },0)
    },
    checkLength(){
      return this.$store.state.cartList.filter(item => item.checked).length
    },
    isSelectAll(){
      if(this.$store.state.cartList.length == 0) return false
      return this.$store.state.cartList.length == this.checkLength
    }
  },
  methods:{
    checkClick(){
      if(this.isSelectAll) 
      this.$store.state.cartList.forEach(item => item.checked = false)
      else 
      this.$store.state.cartList.forEach(element => element.checked = true)
      }
  }
  
}
</script>

<style scoped>
  .bottom-bar{
    display: flex;
    height: 40px;
    background-color: #eee; 
    line-height: 40px;
    position: fixed;
    bottom: 49px;
    width: 100%;
  }
  .check-content{
    display: flex;
    align-items: center;
    margin-left: 10px;
    width: 60px;
  }
  .check-button{
    width: 20px;
    height: 20px;
    line-height: 20px;
  }
  .price{
    flex: 1;
  }
  .calculate{
    width: 60px;
  }
</style>