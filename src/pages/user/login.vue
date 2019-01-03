<template>
  <div>
    <div class="main">
      <div class="item">
        <div class="list">
          <input type="text" v-model="account" placeholder="请输入用户名/邮箱/手机号">
        </div>
        <div class="list">
          <div class="pull-left">
            <input
              :type="changeType"
              v-model="password"
              class="password"
              id
              value
              placeholder="请输入6-12位密码"
            >
          </div>
          <div class="pull-left">
            <span class="ps">
              <img @click="changeHide()" src="../../assets/img/show.png">
            </span>
            <span class="ps">
              <img @click="changeShow()" src="../../assets/img/hide.png">
            </span>
          </div>
        </div>
      </div>
      <div class="search">
        <router-link to="searchPassword">找回密码</router-link>
      </div>
    </div>
    <btn btnName="登录" @actionClick="login()"></btn>
  </div>
</template>
<script>
// import 'vue-layer-mobile/need/layer.css'
import btn from "../../components/btn";
import * as types from "../../vuex/types";
import { postAjax,layOpen} from "../../api/axios";
import * as api from "../../api/api";
export default {
  data() {
    return {
      account: "",
      password: "",
      changeType:'password'
    };
  },
  components: {
    btn
  },
  methods: {
    login() {
      let data = {
        account: this.account,
        password: this.password
      };
      this.$store.dispatch(types.HTTP_LOGIN, data).then(res => {
        if (res.status) {
          layOpen(res.msg);
          setTimeout(() => {
            this.$router.push("/");
          }, 1000);
        } else {
          layOpen(res.msg);
        }
      });
    },
    changeShow(){
      this.changeType = 'text'
    },
    changeHide(){
      this.changeType = 'password'
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

.item {
  width: 8.55rem;
  margin: 0 auto;
}

.list {
  width: 100%;
  height: 1.4rem;
  margin: 0 auto;
  border-bottom: 1px solid #ececec;
}

.list input {
  width: 8.55rem;
  height: 1.3rem;
  border: none;
  outline: none;
  font-size: 0.433rem;
}

.password {
  width: 6rem !important;
}

.ps {
  width: 0.613333rem;
  height: 0.586666rem;
  display: block;
  float: left;
  padding-top: 0.35rem;
  margin-left: 0.6rem;
}

.ps img {
  width: 100%;
}

.search a {
  text-decoration: none;
  font-size: 0.34rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(16, 16, 16, 1);
}

.search {
  width: 9rem;
  height: 1.5rem;
  text-align: right;
}

.btn {
  width: 8.56rem;
  height: 1.18rem;
  margin: 0 auto;
}

.btn button {
  width: 8.56rem;
  height: 1.18rem;
  background: rgba(26, 173, 255, 1);
  border-radius: 0.066666rem;
  outline: none;
  border: none;
  font-size: 0.39rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(249, 249, 249, 1);
}

input::-webkit-input-placeholder {
  /*WebKit browsers*/
  font-size: 0.39rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(202, 204, 205, 1);
}

input::-moz-input-placeholder {
  /*Mozilla Firefox*/
  font-size: 0.39rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(202, 204, 205, 1);
}

input::-ms-input-placeholder {
  /*Internet Explorer*/
  font-size: 0.39rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(202, 204, 205, 1);
}
</style>

