<template>
  <div>
    <div class="item">
      <div class="list" v-for="(list,index) in lists" :key="index">
        <div class="row">
          <div class="pull-left all">
            <div class="name">装机量(台)</div>
            <div class="time">{{list.months}}</div>
          </div>
          <div class="pull-right money">{{list.count}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { postAjax } from "@/api/axios";
import * as api from "@/api/api";
export default {
  data() {
    return {
      lists:[]
    };
  },
  created() {
    this.totalDeviceRecord()
  },
  methods: {
    totalDeviceRecord() {
      let data = {
        page: 1,
        page_size: 10
      };
      postAjax(api.totalDeviceRecord, data)
      .then(res=>{
        console.log(res);
        if(res.status){
           this.lists = res.data.list;
        }
      })
    }
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
  padding-top: 0.3rem;
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

