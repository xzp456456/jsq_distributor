<template>
  <div>
    <header></header>
    <main>
      <div class="item">
        <div class="list">
          <div class="row">
            <div class="pull-left title">机器编号</div>
            <div class="pull-right text_right">12343</div>
          </div>
        </div>
        <div class="list">
          <div class="row">
            <div class="pull-left title">网卡</div>
            <div class="pull-right text_right">165151116511561561561561561</div>
          </div>
        </div>
        <div class="list">
          <div class="row">
            <div class="pull-left title">机器型号</div>
            <div class="pull-right text_right">家用II型（LANMAX-186）</div>
          </div>
        </div>
        <div class="list">
          <div class="row">
            <div class="pull-left title">计费模式</div>
            <div class="pull-right text_right">流量模式</div>
          </div>
        </div>
        <div class="list">
          <div class="row">
            <div class="pull-left title">安装时间</div>
            <div class="pull-right text_right">2018-11-16</div>
          </div>
        </div>
        <div class="list">
          <div class="row">
            <div class="pull-left title">装机地址</div>
            <div class="pull-right text_right">福建省厦门市集美区软件园三期A02</div>
          </div>
        </div>
        <div class="list">
          <div class="row">
            <div class="pull-left title">已用流量</div>
            <div class="pull-right text_right">396升</div>
          </div>
        </div>
        <div class="list">
          <div class="row">
            <div class="pull-left title">已用时长</div>
            <div class="pull-right text_right">100天</div>
          </div>
        </div>
        <div class="list">
          <div class="row">
            <div class="pull-left title">剩余流量</div>
            <div class="pull-right text_right">106升</div>
          </div>
        </div>
        <div class="list">
          <div class="row">
            <div class="pull-left title">原水TDS</div>
            <div class="pull-right text_right">19ppm</div>
          </div>
        </div>
        <div class="list">
          <div class="row">
            <div class="pull-left title">净水TDS</div>
            <div class="pull-right text_right">1ppm</div>
          </div>
        </div>
      </div>
    </main>
    <footer></footer>
  </div>
</template>
<script>
export default {};
</script>
<style scoped="">
.pull-left {
  float: left !important;
}

.pull-right {
  float: right !important;
}

.headerImg {
  width: 1.25rem;
  height: 1.25rem;
  background: rgba(238, 238, 238, 1);
  border-radius: 50%;
  position: relative;
  top: 0.4rem;
}

.headerImg img {
  width: 100%;
}

.list {
  width: 100%;
  height: 1.6rem;
  font-size: 0.37rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  line-height: 0.17rem;
}

.text_right {
  line-height: 1.6rem;
}

.row {
  width: 90%;
  margin: 0 auto;
}

.title {
  line-height: 1.6rem;
}

.numpd {
  padding-right: 0.3rem;
}
</style>
