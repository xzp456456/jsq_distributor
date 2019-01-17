<template>
  <div>
    <header>
      <div class="header">
        <div class="header_r"  @click="navgateTo('myInfo')">
          <img :src="info.dealer_avatar">
        </div>
        <p class="name">{{info.dealer_name}}</p>
        <p class="id">ID：{{info.dealer_id}}</p>
        <p class="numPeople">您和您的团队为{{info.team_user}}位用户 守护{{info.totalWater}}升放心水</p>
        <div class="item">
          <div class="list" @click="navgateTo('cumulative')">
            <div class="money">{{info.total_sale}}</div>
            <div class="yj">累计业绩(元）</div>
          </div>
          <div class="list" @click="navgateTo('chart')">
            <div class="money">{{info.total_commission}}</div>
            <div class="yj">累计佣金(元）</div>
          </div>
          <div class="list" @click="navgateTo('Installed')">
            <div class="money">{{info.total_device}}</div>
            <div class="yj">累计装机量(台)</div>
          </div>
        </div>
      </div>

      <div class="textItem"  @click="navgateTo('announce')">
        <img class="testIms" style="float:left" src="@/assets/img/nb.png">汇款通知
      </div>
      <div v-if="info.is_city==1">
      <div class="cityName">城市名称（城市合伙人数据）</div>
      <div class="numItem">
        <div class="numList">
          <div class="numid">{{info.city_user_count}}</div>
          <div class="its">总用户数</div>
        </div>
        <div class="numList">
          <div class="numid">{{info.city_today_user_count}}</div>
          <div class="its">新增用户</div>
        </div>
        <div class="numList">
          <div class="numid">{{info.city_device_count}}</div>
          <div class="its">装机台数</div>
        </div>
        <div class="numList">
          <div class="numid">{{info.city_today_sale}}</div>
          <div class="its">今日业绩</div>
        </div>
      </div>
      </div>
      <div class="menuItem">
        <div class="menuList" @click="navgateTo('team')">
          <div class="row">
            <div class="td pull-left">团队成员</div>
            <div class="pull-right people">
              {{info.team_user}}人
              <img src="@/assets/img/in.png">
            </div>
          </div>
        </div>
        <div class="menuList" @click="navgateTo('teamOrder')">
          <div class="row">
            <div class="td pull-left">团队订单</div>
            <div class="pull-right people">
              {{info.order_count}}单
              <img src="@/assets/img/in.png">
            </div>
          </div>
        </div>
        <div class="menuList" @click="navgateTo('commission')">
          <div class="row">
            <div class="td pull-left">已结金额</div>
            <div class="pull-right people">
              {{info.settled_amount}}
              <img src="@/assets/img/in.png">
            </div>
          </div>
        </div>
        <div class="menuList" @click="navgateTo('outstanding')">
          <div class="row">
            <div class="td pull-left">未结金额</div>
            <div class="pull-right people">
              {{info.unsettled_amount}}
              <img src="@/assets/img/in.png">
            </div>
          </div>
        </div>
        <div class="menuList" @click="navgateTo('stock')">
          <div class="row">
            <div class="td pull-left">我的库存</div>
            <div class="pull-right people">
              {{info.sku}}台
              <img src="@/assets/img/in.png">
            </div>
          </div>
        </div>
      </div>
      <div class="btn" @click="logOut()">
        <button>退出</button>
      </div>
      <div style="width:100%;height:1.6rem;"></div>
    </header>
    <main></main>
    <v-footer>
       <img slot="home" style="width:100%;height:100%" src="@/assets/img/home-active.png">
       <img slot="menu" style="width:100%;height:100%" src="@/assets/img/menu.png">
       <img slot="equip"  style="width:100%;height:100%" src="@/assets/img/nus.png">
    </v-footer>
  </div>
</template>
<script>
import * as types from '@/vuex/types'
import * as api from "@/api/api";
import { postAjax } from "@/api/axios";
import footer from "@/components/footer";
export default {
  data(){
    return{
      info:{}
    }
  },
  created() {
    this.che_token();
    this.getIndexInfo();
  },
  methods: {
    getIndexInfo(){
      postAjax(api.index,{})
      .then(res=>{
            if(res.status==1){
              this.info = res.data;
              this.getLevel(res.data);
              localStorage.setItem('sku',res.data.sku);
              localStorage.setItem('settled_amount',res.data.settled_amount);
              localStorage.setItem('unsettled_amount',res.data.unsettled_amount);
              localStorage.setItem('can_withdraw',res.data.can_withdraw);
              this.$route.meta.title = res.data.dealer_name+"的经销商端"
            }else if(res.status == -10086){
              localStorage.removeItem('access_token');
              this.$router.push('login');
            }
      })
    },
    logOut() {
      this.$MessageBox.confirm('确定退出')
      .then(action=>{
        postAjax(api.logOut, {}).then(res => {
        if (res.status) {
            localStorage.removeItem('access_token');
            this.$router.push('login')
        }
        })
      }).catch((action)=>{
        console.log(action);
      });
      
    },
    che_token() {
      let token = window.localStorage.getItem("access_token");
      if (!token || token === null) {
        this.$router.push("login");
      }
    },
    navgateTo(url) {
      this.$router.push(url);
    },
    getLevel(res){
            localStorage.setItem('my_order_count',res.my_order_count)
            localStorage.setItem('level1_order_count',res.level1_order_count)
            localStorage.setItem('level2_order_count',res.level2_order_count)
            localStorage.setItem('my_device_count',res.my_device_count)
            localStorage.setItem('level1_device_count',res.level1_device_count)
            localStorage.setItem('level2_device_count',res.level2_device_count)
             localStorage.setItem('dealer_count',res.dealer_count)
            localStorage.setItem('dealer_count_level1',res.dealer_count_level1)
            localStorage.setItem('dealer_count_level2',res.dealer_count_level2)
    }
  },
  components: {
    "v-footer": footer
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
  text-align: left;
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

.testIms {
  width: 0.333333rem;
  height: 0.333333rem;
}
</style>
