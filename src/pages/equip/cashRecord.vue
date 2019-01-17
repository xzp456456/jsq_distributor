<template>
  <div class="item">
    <list-text
      :leftText="list.amount"
      :rightText="list.create_time"
      v-for="(list,index) in lists"
      :key="index"
    ></list-text>
  </div>
</template>
<script>
import listText from "@/components/listText";
import { postAjax } from "@/api/axios";
import * as api from "@/api/api";
export default {
  data() {
    return {
      data: {
        page: 1,
        page_size: 10
      },
      lists: []
    };
  },
  created() {
    this.withdrawList();
  },
  methods: {
    withdrawList() {
      let data = this.data;
      postAjax(api.withdrawList, data).then(res => {
        if (res.status) {
          this.lists = res.data.list;
        }
      });
    }
  },
  components: {
    "list-text": listText
  }
};
</script>
<style scoped="">
.row {
  width: 90%;
  margin: 0 auto;
}

.pull-left {
  float: left;
}

.pull-right {
  float: right;
}

.list {
  width: 100%;
  height: 1.6rem;
  line-height: 1.6rem;
  border-bottom: 1px solid #e6e6e6;
}

.money {
  font-size: 0.42rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
}

.time {
  font-size: 0.32rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(121, 121, 121, 1);
}
</style>
