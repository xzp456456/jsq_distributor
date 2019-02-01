<template>
  <div>
    <div class="search">
      <div class="bg pull-left">
        <div class="fd pull-left">
          <img src="@/assets/img/fd.png">
        </div>
        <div class="searchInput pull-left">
          <input type="text" placeholder="请输入姓名,手机号,经销商ID" v-model="data.keyword" >
          <button class="search-btn" @click="member()">搜索</button>
        </div>
      </div>
      <div class="sx pull-right" @click="showSelect(true)">
        <img src="@/assets/img/sx.png">
      </div>
    </div>
    <div class="nav">
      <a
        href="javascript:void(0)"
        :class="{'addClass':tabIndex==index}"
        @click="changeTab(index)"
        v-for="(tab,index) in tabs"
        :key="index"
      >{{tab.name}}{{'('+tab.aount+')'}}</a>
    </div>
    <div class="item" v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="0">
      <div class="list" v-for="(list,index) in lists" :key="index"  @click="navgateTo(list)">
        <div class="row">
          <div class="top_list">
            <div class="header_img pull-left">
              <img :src="list.avatar?list.avatar:require('../../assets/img/head.png')">
            </div>
            <div class="pull-left">
              <div class="info_o">
                <span class="pull-left name">
                  {{list.name}}
                  <a :href="'tel:'+list.mobile"  @click.stop="stop($event)">
                 <img src="@/assets/img/ph.png" @click.stop="stop($event)">
                 </a>
                </span>
                <span class="pull-right num">
                  累计业绩：
                  <i>{{list.sale}}</i>
                </span>
              </div>
              <div class="info_t">
                <span class="pull-left ids">ID:{{list.dealer_id}}</span>
                <span class="pull-right num">
                  累计装机量：
                  <i>{{list.device_num}}</i>
                </span>
              </div>
            </div>
          </div>
          <div class="nves">
            <span class="pull-left">注册时间：{{list.create_time}}</span>
            <span class="pull-right">{{list.dealer_address}}</span>
          </div>
        </div>
      </div>
    </div>
    <mt-popup v-model="show" position="bottom">
      <div class="coll">
        <ul>
          <li @click=" changOrder('')">不限</li>
          <li @click=" changOrder(1)">注册时间</li>
          <li @click=" changOrder(2)">销售业绩</li>
          <li @click=" changOrder(3)">装机总量</li>
          <li @click="showSelect(false)">取消</li>
        </ul>
      </div>
    </mt-popup>
  </div>
</template>
<script>
import { postAjax ,getAjax} from "@/api/axios";
import * as api from "@/api/api";
import * as types from '@/vuex/types';
export default {
  data() {
    return {
      show:false,
      tabIndex: 0,
      tabs: [{name:"全部",aount:localStorage.getItem('dealer_count')},
       {name:"一级经销商",aount:localStorage.getItem('dealer_count_level1')}, 
       {name:"二级经销商",aount:localStorage.getItem('dealer_count_level2')}],
      lists: [],
      data:{
        page: 1,
        page_size: 10,
        type: 0,
        order: ""
      }
    }
  },
  created() {
    this.member();
  },
  methods: {
    stop(e){
      e.stopPropagation()
    },
    navgateTo(data){
      this.$store.commit(types.HTTP_INFO, data);
      this.$router.push('teamInfo');
    },
    loadMore(){
      this.data.page_size = this.data.page_size+10;
      this.member();
    },
    changOrder(num){
      this.data.order = num;
      this.show = false;
      this.member();
    },
    changeTab(index) {
      this.tabIndex = index;
      this.data.type = index;
      this.member();
    },
    member() {
      let data = this.data;
      postAjax(api.member,data).then(res => {
        if (res.status) {
          this.lists = res.data.list;
        }
      });
    },

    showSelect(bool){
      this.show=bool;
    }
  }
};
</script>

<style scoped="">
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

.search-btn{
  background-color: transparent;
  color: #1aadff;
  outline: none;
  border: none;
  width: 1.6rem;
  height: 0.6rem;
     font-size: .35rem;

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
  line-height: 1.39rem;
}

.addClass {
  color: #1aadff !important;
}

.list {
  width: 9.19rem;
  height: 2.99rem;
  background: rgba(255, 255, 255, 1);
  border-radius: 0rem;
  margin: 0 auto;
}

.header_img {
  width: 0.99rem;
  height: 0.99rem;
  border-radius: 50%;
}

.header_img img {
  width: 100%;
}

.info_o .name {
  font-size: 0.44rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(36, 37, 38, 1);
  line-height: 0.57rem;
}

.info_o .name img {
  width: 0.37rem;
  height: 0.36rem;
  padding-left: 0.2rem;
}

.info_o .num {
  font-size: 0.35rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(36, 37, 38, 1);
  line-height: 0.54rem;
}

.info_t .ids {
  font-size: 0.34rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(165, 165, 165, 1);
  padding-left: 0.25rem;
}

.info_o {
  width: 7rem;
  margin-left: 0.25rem;
}

.info_t {
  clear: both;
}

.info_t .num {
  font-size: 0.35rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(36, 37, 38, 1);
  line-height: 0.54rem;
}

.row {
  width: 90%;
  margin: 0 auto;
}

.nves {
  font-size: 0.37rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(105, 105, 105, 1);
  line-height: 0.54rem;
  padding-top: 0.3rem;
}

.top_list {
  width: 100%;
  padding-top: 0.3rem;
  height: 2rem;
  border-bottom: 1px solid #e8eef4;
  margin-top: 0.3rem;
}

i {
  font-style: normal;
}

.top_list i {
  color: #1aadff;
}

.layerOut {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  /*display: none;*/
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

.mint-popup-bottom{
  width: 100%;
}

.item{
  height: 14rem;
  overflow-y: scroll;
}

</style>
