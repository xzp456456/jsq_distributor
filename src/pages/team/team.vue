<template>
  <div>
    <div class="search">
      <div class="bg pull-left">
        <div class="fd pull-left">
          <img src="../../assets/img/fd.png">
        </div>
        <div class="searchInput pull-left">
          <input type="text" placeholder="请输入姓名，经销商ID，设备...">
        </div>
      </div>
      <div class="sx pull-right">
        <img src="../../assets/img/sx.png">
      </div>
    </div>
    <div class="nav">
      <a href class="addClass">全部</a>
      <a href>一级经销商</a>
      <a href>二级经销商</a>
    </div>
    <div class="item">
      <div class="list">
        <div class="row">
          <div class="top_list">
            <div class="header_img pull-left">
              <img src="../../assets/img/ty.png">
            </div>
            <div class="pull-left">
              <div class="info_o">
                <span class="pull-left name">张三
                  <img src="../../assets/img/ph.png">
                </span>
                <span class="pull-right num">累计业绩：
                  <i>5435</i>
                </span>
              </div>
              <div class="info_t">
                <span class="pull-left ids">ID:112511</span>
                <span class="pull-right num">累计装机量：
                  <i>5435</i>
                </span>
              </div>
            </div>
          </div>
          <div class="nves">
            <span class="pull-left">注册时间：2018.12.12</span>
            <span class="pull-right">厦门集美区</span>
          </div>
        </div>
      </div>
      <div class="list">
        <div class="row">
          <div class="top_list">
            <div class="header_img pull-left">
              <img src="../../assets/img/ty.png">
            </div>
            <div class="pull-left">
              <div class="info_o">
                <span class="pull-left name">李四
                  <img src="../../assets/img/ph.png">
                </span>
                <span class="pull-right num">累计业绩：
                  <i>5435</i>
                </span>
              </div>
              <div class="info_t">
                <span class="pull-left ids">ID:112511</span>
                <span class="pull-right num">累计装机量：
                  <i>5435</i>
                </span>
              </div>
            </div>
          </div>
          <div class="nves">
            <span class="pull-left">注册时间：2018.12.12</span>
            <span class="pull-right">厦门集美区</span>
          </div>
        </div>
      </div>
      <div class="list">
        <div class="row">
          <div class="top_list">
            <div class="header_img pull-left">
              <img src="../../assets/img/ty.png">
            </div>
            <div class="pull-left">
              <div class="info_o">
                <span class="pull-left name">王五
                  <img src="../../assets/img/ph.png">
                </span>
                <span class="pull-right num">累计业绩：
                  <i>5435</i>
                </span>
              </div>
              <div class="info_t">
                <span class="pull-left ids">ID:112511</span>
                <span class="pull-right num">累计装机量：
                  <i>5435</i>
                </span>
              </div>
            </div>
          </div>
          <div class="nves">
            <span class="pull-left">注册时间：2018.12.12</span>
            <span class="pull-right">厦门集美区</span>
          </div>
        </div>
      </div>
    </div>
    <div class="layerOut" style="display: none;">
      <div class="coll">
        <ul>
          <li>不限</li>
          <li>注册时间</li>
          <li>销售业绩</li>
          <li>装机总量</li>
          <li>取消</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
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

.nav a {
  font-size: 0.38rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  text-decoration: none;
  text-align: center;
  padding: 0rem 0.83rem;
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
  height: 1.5rem;
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
  position: fixed;
  width: 100%;
  text-align: center;
  bottom: 0;
  z-index: 99;
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
</style>
