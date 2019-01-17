<template>
    <div>
       <footer>
      <div class="nab">
        <router-link exact to="/" tag="div"   class="navlist" >
         
          <div class="tabt"><slot name="home"></slot></div>
          <div class="text">首页</div>
        </router-link>
        <router-link tag="div" to="teamOrder" class="navlist">
          <div class="tabt"><slot name="menu"></slot></div>
          <div class="text">订单</div>
        </router-link>
        <router-link to="equipList" tag="div" class="navlist">
          <div class="tabt"><slot name="equip"></slot></div>
          <div class="text">设备</div>
        </router-link>
      </div>
    </footer>
    </div>
</template>
<script>
export default {
  data(){
    return{
      tapIndex:0
    }
  },
    methods:{
		 navgateTo(url,index){
       this.tapIndex = index;
      this.$router.push(url);
    	}
	}
}
</script>
<style scoped="">
footer {
  height: 1.57rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0rem 0rem 0rem 0rem rgba(230, 230, 230, 1);
  width: 100%;
  position: fixed;
  bottom: 0;
}

.navlist .tabt {
  width: 0.59rem;
  height: 0.59rem;
  margin: 0 auto;
}



.navlist {
  padding-top: 0.4rem;
  float: left;
  text-align: center;
  margin: 0 1.28rem;
  font-size: 0.333rem;
}

.testIms {
  width: 0.31rem;
  height: 0.33rem;
}

.router-link-active{
      color: rgba(26, 173, 255, 1);
}
</style>
