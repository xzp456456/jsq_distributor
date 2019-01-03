<template>
  <div class="list">
    <div class="row">
      <div class="pull-left">
        <p class="listOne">
          <slot name="listOne"></slot>
        </p>
        <p class="time">
          <slot name="time"></slot>
        </p>
      </div>
      <div class="pull-right back">
        <img src="../assets/img/in.png">
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

.listOne {
  font-size: 0.42rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  padding-top: 0.35rem;
}

p {
  margin: 0;
  padding-bottom: 0.1rem;
}

.time {
  font-size: 0.32rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(121, 121, 121, 1);
}

.back {
  width: 0.23rem;
  height: 0.43rem;
  line-height: 1.8rem;
}

.back img {
  width: 100%;
}

.list {
  width: 100%;
  height: 1.8rem;
  border-bottom: 1px solid #e6e6e6;
  background-color: white;
}
.swtext{
     line-height: 1.8rem;
    font-size: 0.37rem;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
}
</style>
