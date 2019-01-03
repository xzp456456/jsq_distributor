<template>
  <div>
    <div class="item">
      <div class="list">
        <div class="row">
          <div class="pull-left all">
            <div class="name">装机量(台)</div>
            <div class="time">2018-11-01 12:12:16</div>
          </div>
          <div class="pull-right money">25</div>
        </div>
      </div>
      <div class="list">
        <div class="row">
          <div class="pull-left all">
            <div class="name">装机量(台)</div>
            <div class="time">2018-11-01 12:12:16</div>
          </div>
          <div class="pull-right money">36</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
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

