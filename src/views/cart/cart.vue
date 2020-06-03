<template>
  <div class="cart">
    <cart-navbar class="nav-bar">
      <div slot="center">
        购物车({{ cartLength }})
      </div>
    </cart-navbar>
    <cart-list></cart-list>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import cartNavbar from 'components/common/navbar/navBar'
import cartList from './childCopms/cartList'
import cartBottomBar from './childCopms/cartBottomBar'
import { mapGetters } from 'vuex'

export default {
  name: 'cart',
  components: {
    cartNavbar,
    cartList,
    cartBottomBar
  },
  computed: {
   ...mapGetters([
     'cartLength'
    ])
  }
}
</script>

<style scoped>
.cart{
  height: 100vh;
}
.nav-bar{
  background-color: var(--color-tint);
  color: #fff;
}
</style>