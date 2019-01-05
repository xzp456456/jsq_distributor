<template>
    <div>
       <footer>
      <div class="nab">
        <div class="navlist"  @click="navgateTo('/')">
          <img src="@/assets/img/home.png">
          <div class="text">首页</div>
        </div>
        <div class="navlist" @click="navgateTo('teamOrder')">
          <img src="@/assets/img/menu.png">
          <div class="text">订单</div>
        </div>
        <div class="navlist" @click="navgateTo('equipList')">
          <img src="@/assets/img/nus.png">
          <div class="text">设备</div>
        </div>
      </div>
    </footer>
    </div>
</template>
<script>
export default {
    methods:{
		 navgateTo(url){
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

.navlist img {
  width: 0.59rem;
  height: 0.59rem;
}

.navlist {
  padding-top: 0.4rem;
  float: left;
  text-align: center;
  margin: 0 1.3rem;
  font-size: 0.333rem;
}

.testIms {
  width: 0.31rem;
  height: 0.33rem;
}
</style>
