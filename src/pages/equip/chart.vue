<template>
  <div class="item"
   v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10">
    <div class="list" v-for="(list,index) in lists" :key="index">
      <div class="row">
        <div class="pull-left all">
          <div class="name">{{list.months}}</div>
          <!-- <div class="time">{{list.begin_time}}</div> -->
        </div>
        <div class="pull-right money">{{list.amount}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import * as api from "@/api/api";
import { postAjax } from "@/api/axios";
export default {
  data(){
    return{
      lists:[],
      data:{
        page:1,
        page_size:0
      }
    }
  },
  created(){
    //this.cumulative()
  },
  methods:{
    cumulative(){
      let data = this.data;
      postAjax(api.totalCommissionRecord,data)
      .then(res=>{
          if(res.status){
            this.lists = res.data
          }
      })
    },
     loadMore() {
      this.data.page_size = this.data.page_size + 10;
      this.cumulative();
    },
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

.row {
  width: 90%;
  margin: 0 auto;
}

.list {
  width: 100%;
  height: 1.8rem;
  line-height: 1.8rem;
  border-bottom: 1px solid #e6e6e6;
}

.name {
  font-size: 0.42rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  line-height: normal;
  padding-bottom: 0.2rem;
}

.all {
  padding-top: 0.6rem;
}

.time {
  font-size: 0.32rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(121, 121, 121, 1);
  line-height: normal;
}

.money {
  font-size: 0.51rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
}
</style>
