<template>
  <div v-if="Object.keys(discuss).length !== 0" class="dis-info">
    <div class="title"><b>用户评价</b></div>
    <hr    />
    <div class="user">
      <img :src="discuss.disUserImg" alt="">
      <span><b>{{ discuss.disUserName }}</b></span>
    </div>
    <div class="con"><span>{{ discuss.disContent }}</span></div>
    <span>{{ discuss.disDate|zero }}</span>
    <span>{{ discuss.disStyle }}</span>
    <div class="ex">
      
      <span>{{ discuss.disExplain }}</span>
    </div>
  </div>
</template>

<script>


export default {
  name: 'detailDis',
  props: {
    discuss: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  filters: {
    zero(value){
      return new Date(parseInt(value) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ')
    }
  }

}
</script>

<style scoped>
  .user{
    margin-top: 15px;
    margin-left: 15px;
  }
  .user img{
    width:25px;
    height:25px;
    vertical-align: middle;
  }
  .user span{
    margin-left: 15px;
  }
  .title{
    margin: 15px ;
  }
  .con{
    font-size: 14px;
    margin-left: 15px;
    margin-top: 15px;
    margin-bottom: 5px;
  }
  .ex{
    font-size: 12px;
    margin-top: 8px;
  }
</style>