<template>
  <div>
    <div class="search">
      <div class="bg pull-left">
        <div class="fd pull-left">
          <img src="@/assets/img/fd.png">
        </div>
        <div class="searchInput pull-left">
          <input type="text" placeholder="请输入姓名，经销商ID，设备..." v-model="data.keyword">
          <button class="search-btn" @click="orderList()">搜索</button>
        </div>
      </div>
      <div class="sx pull-right" @click="showSort(true)">
        <img src="@/assets/img/sx.png">
      </div>
    </div>
    <div class="orderNav">
      <a
        href="javascript:void(0);"
        :class="{active:index==statusIndex}"
        @click="changeIndex(index)"
        v-for="(list,index) in status"
        :key="index"
      >{{list}}</a>
    </div>
    <div class="nav">
      <a
        href="javascript:void(0);"
        :class="{activeLink:0==this.typeIndex}"
        @click="changeType(0)"
        class="addClass"
      >我的订单{{"("+orderLevel.my_order_count+")"}}</a>
      <a
        href="javascript:void(0);"
        :class="{activeLink:1==this.typeIndex}"
        @click="changeType(1)"
      >一级订单{{"("+orderLevel.level1_order_count+")"}}</a>
      <a
        href="javascript:void(0);"
        :class="{activeLink:2==this.typeIndex}"
        @click="changeType(2)"
      >二级订单{{"("+orderLevel.level2_order_count+")"}}</a>
    </div>

    <div
      class="item"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
    >
      <div
        class="list"
        v-for="(list,index) in lists"
        :key="index"
      >
        <div class="row">
          <div class="title">
            <span class="pid pull-left" v-if="list.obj_type=='recharge'">充值 订单号：{{list.order_id}}</span>
            <span class="pid pull-left" v-if="list.obj_type=='repair'">报修 订单号：{{list.order_id}}</span>
            <span class="pid pull-left" v-if="list.obj_type=='filter'">更换滤芯 订单号：{{list.order_id}}</span>
            <span class="o_status pull-right" v-if="list.status==0">未支付</span>
            <span class="o_status pull-right" v-if="list.status==1">已支付</span>
            <span class="o_status pull-right" v-if="list.status==2">已完成</span>
            <span class="o_status pull-right" v-if="list.status==3">已发货</span>
          </div>
          <div class="clear">
            <div class="main_img pull-left">
              <img v-if="list.obj_type=='filter'" src="@/assets/img/gengh.png">
              <img v-if="list.obj_type=='repair'" src="@/assets/img/baox.png">
              <img v-if="list.obj_type=='recharge'" src="@/assets/img/imgtq.png">
            </div>
            <div class="dd pull-left">
              <div class="money">
                <span class="pull-left money_r">{{list.order_name}}</span>
                <span class="pull-right money_s">¥{{list.amount}}</span>
              </div>
              <div class="team_name">经销商 : {{list.dealer_name}}</div>
              <div class="pay_time">购买时间 : {{list.create_time}}</div>
            </div>
            <div class="btn">
              <button class="pull-left" v-if="list.status==1" @click="confirmComplete(list.order_id)">确认完成</button>
              <button class="pull-right" @click="navgateTo('teamInfo',list.order_id)">查看详情</button>
            </div>
          </div>
          <div class="ws">
            <div class="pull-left names">
              <div class="pull-left">
                <img class="imgtop" :src="list.avatar">
              </div>
              <div class="pull-left name_s">{{list.nickname}}</div>
            </div>
            <div class="pull-right imgtel">
              <a :href="'tel:'+list.mobile"><img src="@/assets/img/ph.png"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  <div style="width:100%;height:3.6rem;"></div>
    <div class="total">
      <div class="rows">
        <div class="pull-left">订单总量：{{order.order_count}}</div>
        <div class="pull-right">累计业绩总额：{{order.sale_count}}</div>
      </div>
    </div>
    <mt-popup v-model="show" position="bottom">
      <div class="coll">
        <ul>
          <li @click=" changOrder('')">全部</li>
          <li @click=" changOrder(1)">七天内</li>
          <li @click=" changOrder(2)">三十天内</li>
          <li @click=" changOrder(3)">一年内</li>
          <li @click=" changOrder(4)">首充</li>
          <li @click=" changOrder(5)">续充</li>
          <li @click=" changOrder(6)">滤芯订单</li>
          <li @click="showSort(false)">取消</li>
        </ul>
      </div>
    </mt-popup>
      <v-footer>
       <img slot="home" style="width:100%;height:100%" src="@/assets/img/home.png">
       <img slot="menu" style="width:100%;height:100%" src="@/assets/img/td-active.png">
       <img slot="equip"  style="width:100%;height:100%" src="@/assets/img/nus.png">
    </v-footer>
  </div>
</template>
<script>
import { postAjax, getAjax, postServer } from "@/api/axios";
import * as api from "@/api/api";
import footer from "@/components/footer";
export default {
  data() {
    return {
      show: false,
      lists: [],
      order: {},
      status: ["全部", "未支付", "已支付", "已发货", "已完成"],
      statusIndex: 0,
      typeIndex: 0,
      allLoaded: false,
      orderLevel: {},
      data: {
        page: 1,
        page_size: 0,
        status: ""
      }
    };
  },
  created() {
    this.orderList();
    this.orderLevel = {
      my_order_count:localStorage.getItem('my_order_count'),
      level1_order_count:localStorage.getItem('level1_order_count'),
      level2_order_count:localStorage.getItem('level2_order_count')
    };
  },
  methods: {
    loadMore() {
      this.data.page_size = this.data.page_size + 10;
      this.orderList();
    },
    showSort(bool) {
      this.show = bool;
    },
    changOrder(sort) {
      this.data.sort = sort;
      this.orderList();
      this.show = false;
    },
    confirmComplete(order_id){
      this.$MessageBox.confirm('确认完成？')
      .then(()=>{
        let data = {order_id:order_id}
        postAjax(api.confirmComplete,data)
        .then(res=>{
              this.orderList();
        })
      })
    },
    navgateTo(url, order_id) {
      this.$router.push(url);
      localStorage.setItem('order_id',order_id)
    },
    changeIndex(index) {
      this.statusIndex = index;
      this.data.status = index - 1;
      if (this.data.status < 0) {
        this.data.status = "";
      }
      this.orderList();
    },
    changeType(type) {
      this.typeIndex = type;
      this.data.type = type;
      this.orderList();
    },
    orderList() {
      let data = this.data;
      postAjax(api.orderList, data).then(res => {
        console.log(res);
        this.lists = res.data.list;
        this.order = res.data;
      });
    }
  },
  components: {
    "v-footer": footer
  }
};
</script>
<style scoped="">
body{
  background-color: #F3F3F3;
  position: absolute;
  width: 100%;
  height: 100%;
}
li {
  list-style: none;
}

ul {
  padding-inline-start: 0px;
  margin-block-start: 0;
  margin-block-end: 0em;
}

.pull-left {
  float: left;
}

.pull-right {
  float: right;
}

.search {
  width: 90%;
  margin: 0 auto;
  height: 0.79rem;
  line-height: 0.79rem;
  padding: 0.3rem 0;
}

.search-btn{
  background-color: transparent;
  color: #1aadff;
  outline: none;
  border: none;
  width: 1.6rem;
  height: 0.6rem;
     font-size: .35rem;

}

.sx {
  width: 0.55rem;
  height: 0.55rem;
  padding-top: 0.1rem;
}

.sx img {
  width: 100%;
}

.fd {
  width: 0.36rem;
  height: 0.36rem;
  padding-left: 0.4rem;
}

.fd img {
  width: 100%;
}

.searchInput input {
  padding-left: 0.266666rem;
  width: 4.85rem;
  font-size: 0.35rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(202, 202, 202, 1);
  margin: 0 auto;
  border: none;
  outline: none;
}

.bg {
  width: 8.23rem;
  height: 1rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0rem 0rem 0rem 0rem rgba(0, 0, 0, 0.02);
  border-radius: 0.4rem;
  margin: 0 auto;
}

.nav {
  width: 100%;
  height: 1.39rem;
  background: rgba(255, 255, 255, 1);
  margin-top: 0.3rem;
}

.nav a {
  font-size: 0.38rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  text-decoration: none;
  text-align: center;
  width: 3.1rem;
  display: inline-block;
  text-align: center;
  line-height: 1.39rem;
}

.orderNav {
  height: 1.15rem;
  background: rgba(255, 255, 255, 1);
  margin-top: 0.3rem;
}

.orderNav a {
  font-size: 0.32rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  text-decoration: none;
  width: 2rem;
  display: inline-block;
  height: 1.15rem;
  text-align: center;
  line-height: 1.15rem;
}

.row {
  width: 90%;
  margin: 0 auto;
  padding-top: 0.3rem;
}

.list {
  width: 9.19rem;
  height: 6.28rem;
  background: white;
  border-radius: 0rem;
  margin: 0 auto;
  margin-top: 0.3rem;
  clear: both;
  box-shadow: .016667rem .016667rem .053333rem #bbbbbb 
}

.pid {
  font-size: 0.32rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(105, 105, 105, 1);
}

.o_status {
  font-size: 0.32rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(36, 37, 38, 1);
}

.money {
  clear: both;
  width: 5.6rem;
  padding-left: 0.2rem;
}

.money_r {
  font-size: 0.4rem;
  font-family: PingFang-SC-Bold;
  font-weight: bold;
  color: rgba(36, 37, 38, 1);
  line-height: 0.61rem;
}

.money_s {
  font-size: 0.42rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(26, 173, 255, 1);
}

.main_img {
  width: 2.39rem;
  height: 1.72rem;
}

.main_img img {
  width: 100%;
}

.team_name {
  clear: both;
  font-size: 0.35rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(36, 37, 38, 1);
  padding-left: 0.2rem;
  padding-bottom: 0.1rem;
}

.pay_time {
  clear: both;
  font-size: 0.35rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(36, 37, 38, 1);
  padding-left: 0.2rem;
  padding-bottom: 0.2rem;
}

.clear {
  clear: both;
  padding-top: 0.4rem;
  width: 100%;
  height: 3.5rem;
  border-bottom: 1px solid #e8eef4;
}

.btn{
  padding-bottom: .3rem;
  padding-left: 56%;
}

.btn button{
   background-color: #1aadff;
   color: white;
   border:none;
   outline: none; 
   font-size: .2rem;
   border-radius:.133333rem; 
}

.imgtel {
  width: 0.71rem;
  height: 0.71rem;
}

.imgtel img {
  width: 100%;
}

.imgtop {
  width: 0.99rem;
  height: 0.99rem;
  border-radius: 50%;
}

.names {
  font-size: 0.35rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(36, 37, 38, 1);
  line-height: 0.57rem;
}

.ws {
  clear: both;
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  padding-top: 0.4rem;
}

.name_s {
  line-height: 1rem;
  padding-left: 0.266666rem;
}

.total {
  position: fixed;
  bottom: 1.57rem;
  height: 1.48rem;
  width: 100%;
  background: rgba(255, 255, 255, 1);
  border: 0.01px solid rgba(164, 164, 164, 0.26);
  font-size: 0.4rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(36, 37, 38, 1);
  line-height: 1.48rem;
}

.rows {
  width: 87%;
  margin: 0 auto;
}

.active {
  border-bottom: 0.026667rem solid #1aadff;
  color: #1aadff !important;
}

.activeLink {
  color: #1aadff !important;
}

.coll {
  width: 100%;
  text-align: center;
}

.coll ul li {
  background: white;
  width: 100%;
  border-bottom: 1px solid #dfe1e3;
  height: 1.6rem;
  font-size: 0.46rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
  line-height: 1.6rem;
}

.mint-popup-bottom {
  width: 100%;
}


</style>

