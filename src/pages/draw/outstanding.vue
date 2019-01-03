<template>
  <div>
    <header>
      <div class="header">
        <div class="num">
          <div class="money">2626.00</div>
          <div class="unit">已结金额(元)</div>
        </div>
        <div class="getMoney">可提金额：5000</div>
      </div>
    </header>
    <main>
      <div class="item">
        <div class="list">
          <div class="row">
            <div class="it">
              <span class="pull-left money_u">佣金 294.00</span>
              <span class="pull-right mon">5294.00</span>
            </div>
            <div class="it">
              <span class="pull-left times">2018-11-01 12:12:16</span>
              <span class="pull-right yz">业绩</span>
            </div>
          </div>
        </div>
        <div class="list">
          <div class="row">
            <div class="it">
              <span class="pull-left money_u">佣金 294.00</span>
              <span class="pull-right mon">5294.00</span>
            </div>
            <div class="it">
              <span class="pull-left times">2018-11-01 12:12:16</span>
              <span class="pull-right yz">业绩</span>
            </div>
          </div>
        </div>
      </div>
      <div class="list" style="margin-top: 0.3rem;">
        <div class="row">
          <span class="pull-left">提现记录</span>
          <span class="pull-right">
            <img class="in" src="../../assets/img/in.png">
          </span>
        </div>
      </div>
      <btn btnName="立即提交"></btn>
    </main>
    <footer></footer>
  </div>
</template>
<script>
import btn from '../../components/btn'
export default {
  components:{
    btn
  }
};
</script>
<style scoped="">
.pull-left {
  float: left;
}

.pull-right {
  float: right;
}

.header {
  width: 100%;
  height: 4.63rem;
  background: rgba(26, 173, 255, 1);
  padding-top: 0.7rem;
}

.num {
  background: url(../../assets/img/19.png) no-repeat;
  background-size: 100%;
  width: 3.2rem;
  height: 3.2rem;
  margin: 0 auto;
}

.money {
  padding-top: 0.88rem;
  text-align: center;
  font-size: 0.61rem;
  font-family: PingFang-SC-Bold;
  font-weight: bold;
  color: rgba(55, 55, 55, 1);
  line-height: 0.89rem;
}

.unit {
  text-align: center;
  font-size: 0.35rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(55, 55, 55, 1);
  line-height: 0.51rem;
}

.getMoney {
  text-align: center;
  font-size: 0.35rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  margin-top: 0.4rem;
}

.list {
  clear: both;
  height: 1.6rem;
  line-height: 1.6rem;
  font-size: 0.37rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
}

.row {
  width: 90%;
  margin: 0 auto;
  padding-top: 0.15rem;
}

.btn {
  width: 8.56rem;
  height: 1.18rem;
  margin: 0 auto;
  margin-top: 1rem;
}

.btn button {
  width: 8.56rem;
  height: 1.18rem;
  background: rgba(26, 173, 255, 1);
  font-size: 0.39rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(249, 249, 249, 1);
  outline: none;
  border: none;
  border-radius: 0.066666rem;
}

.it {
  line-height: normal;
  clear: both;
  width: 100%;
  height: 0.5rem;
  padding-bottom: 0.1rem;
}

.money_u {
  font-size: 0.42rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
}

.mon {
  font-size: 0.48rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: #1aadff;
}

.times {
  font-size: 0.32rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(121, 121, 121, 1);
}

.yz {
  font-size: 0.28rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(145, 145, 145, 1);
  padding-right: 0.7rem;
}
.in{
  width:0.23rem;
height:0.43rem;
}
</style>

