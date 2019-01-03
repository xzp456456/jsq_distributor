<template>
  <div>
    <header>
      <div class="header">
        <div class="header_r">
          <img src="../../assets/img/head.png">
        </div>
        <p class="name">王清华</p>
        <p class="id">ID：124434</p>
        <p class="numPeople">累计为22为客户 守护4324升放心水</p>
        <div class="item">
          <div class="list">
            <div class="money">15451.00</div>
            <div class="yj">累计业绩(元）</div>
          </div>
          <div class="list">
            <div class="money">6566.00</div>
            <div class="yj">累计佣金(元）</div>
          </div>
          <div class="list">
            <div class="money">55</div>
            <div class="yj">累计装机量(台)</div>
          </div>
        </div>
      </div>

      <div class="textItem">
        <img class="testIms" src="../../assets/img/nb.png">您已成功提交六年级（上）语文整页错题图3张！
      </div>
      <div class="cityName">城市名称（城市合伙人数据）</div>
      <div class="numItem">
        <div class="numList">
          <div class="numid">865</div>
          <div class="its">总用户数</div>
        </div>
        <div class="numList">
          <div class="numid">546</div>
          <div class="its">新增用户</div>
        </div>
        <div class="numList">
          <div class="numid">7</div>
          <div class="its">装机台数</div>
        </div>
        <div class="numList">
          <div class="numid">65</div>
          <div class="its">今日业绩</div>
        </div>
      </div>
      <div class="menuItem">
        <div class="menuList">
          <div class="row">
            <div class="td pull-left">团队成员</div>
            <div class="pull-right people">
              0人
              <img src="../../assets/img/in.png">
            </div>
          </div>
        </div>
        <div class="menuList">
          <div class="row">
            <div class="td pull-left">团队订单</div>
            <div class="pull-right people">
              25单
              <img src="../../assets/img/in.png">
            </div>
          </div>
        </div>
        <div class="menuList">
          <div class="row">
            <div class="td pull-left">已结金额</div>
            <div class="pull-right people">
              5435
              <img src="../../assets/img/in.png">
            </div>
          </div>
        </div>
        <div class="menuList">
          <div class="row">
            <div class="td pull-left">未结金额</div>
            <div class="pull-right people">
              656
              <img src="../../assets/img/in.png">
            </div>
          </div>
        </div>
        <div class="menuList">
          <div class="row">
            <div class="td pull-left">我的库存</div>
            <div class="pull-right people">
              12台
              <img src="../../assets/img/in.png">
            </div>
          </div>
        </div>
      </div>
      <div class="btn">
        <button>退出</button>
      </div>
    </header>
    <main></main>
    <footer>
      <div class="nab">
        <div class="navlist">
          <img src="../../assets/img/home.png">
          <div class="text">首页</div>
        </div>
        <div class="navlist">
          <img src="../../assets/img/menu.png">
          <div class="text">订单</div>
        </div>
        <div class="navlist">
          <img src="../../assets/img/nus.png">
          <div class="text">设备</div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  created() {
    this.che_token();
  },
  methods: {
    che_token() {
      let token = window.localStorage.getItem("access_token");
      if (!token || token === null) {
        this.$router.push("login");
      }
    }
  }
};
</script>
<style scoped="">
p {
  padding: 0;
  margin: 0;
}

.pull-left {
  float: left;
}

.pull-right {
  float: right;
}

.header {
  width: 100%;
  height: 5.44rem;
  background: -webkit-linear-gradient(
    52deg,
    rgba(37, 39, 55, 1),
    rgba(56, 59, 76, 1)
  );
  background: -moz-linear-gradient(
    52deg,
    rgba(37, 39, 55, 1),
    rgba(56, 59, 76, 1)
  );
  background: -o-linear-gradient(
    52deg,
    rgba(37, 39, 55, 1),
    rgba(56, 59, 76, 1)
  );
  background: linear-gradient(52deg, rgba(37, 39, 55, 1), rgba(56, 59, 76, 1));
}

.header_r {
  width: 1.466666rem;
  height: 1.466666rem;
  margin: 0 auto;
  padding-top: 0.4rem;
}

.header_r img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.name {
  font-size: 0.45rem;
  font-family: PingFang-SC-Bold;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  margin: 0.2rem 0;
}

.id {
  text-align: center;
  font-size: 0.35rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  margin: 0.2rem 0;
}

.numPeople {
  text-align: center;
  font-size: 0.32rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
}

.item {
  width: 8.93rem;
  height: 1.97rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0rem 0rem 0.053333rem 0.053333rem rgba(185, 185, 185, 0.3);
  border-radius: 0.133333rem;
  margin: 0 auto;
  position: relative;
  top: 0.5rem;
}

.list .money {
  font-size: 0.45rem;
  font-family: PingFang-SC-Bold;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  padding-bottom: 0.1rem;
}

.list .yj {
  font-size: 0.31rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(110, 109, 109, 1);
}

.list {
  text-align: center;
  float: left;
  margin: 0 0.4rem;
  padding-top: 0.4rem;
}

.textItem {
  margin: 0 auto;
  margin-top: 1.366666rem;
  text-align: center;
  font-size: 0.33rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(26, 173, 255, 1);
  padding: 0.1rem 0.3rem;
  width: 85%;
  background: rgba(240, 240, 240, 1);
  border-radius: 0.4rem;
}
.textItem img {
  margin-right: 0.2rem;
}

.cityName {
  font-size: 0.38rem;
  font-family: PingFang-SC-Bold;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  width: 90%;
  margin: 0.5rem auto;
}

.numList {
  width: 1.17rem;
  float: left;
  margin: 0 0.6rem;
}

.numid {
  width: 1.17rem;
  height: 1.17rem;
  background: rgba(246, 246, 246, 1);
  border-radius: 0rem;
  text-align: center;
  line-height: 1.17rem;
  font-size: 0.49rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
}

.its {
  font-size: 0.29rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(142, 142, 142, 1);
  margin-top: 0.15rem;
  text-align: center;
}

.numItem {
  width: 100%;
  height: 2.6rem;
}

.menuList {
  width: 100%;
  height: 1.3rem;
  border: 1px solid #f6f6f6;
}

.td {
  font-size: 0.45rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  font-size: 0.42rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
}

.people {
  font-size: 0.42rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
}

.people img {
  margin-left: 0.3rem;
  width: 0.23rem;
  height: 0.43rem;
  position: relative;
  top: 0.07rem;
}

.row {
  padding-top: 0.4rem;
  width: 90%;
  margin: 0 auto;
}

.btn {
  width: 9.03rem;
  height: 1.09rem;
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 2.5rem;
}

.btn button {
  width: 9.03rem;
  height: 1.09rem;
  background: rgba(240, 240, 240, 1);
  border-radius: 0rem;
  font-size: 0.45rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  outline: none;
  border: none;
}

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
