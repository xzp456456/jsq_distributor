<template>
  <div class="list">
    <div class="row">
      <span class="pull-left money">{{leftText}}</span>
      <span class="pull-right time">{{rightText}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "listText",
  props: ["leftText", "rightText"]
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
