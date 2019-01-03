<template>
  <div>
    <div class="main">
      <div class="item">
        <div class="list">
          <input type="text" placeholder="请输入手机号" v-model="user.mobile">
        </div>
        <div class="list">
          <div class="pull-left">
            <input type="text" class="password" v-model="user.code" placeholder="请输入验证码">
          </div>
          <div class="pull-right code">
            <a href="javascript:;" class="getcode" @click="time_status?getCode(60):''">{{codeText}}</a>
          </div>
        </div>
        <div class="list">
          <input type="password" v-model="user.password" placeholder="请输入密码">
        </div>
        <div class="list">
          <div class="pull-left">
            <input
              type="password"
              v-model="user.password_again"
              class="password_again"
              placeholder="请再次输入密码"
            >
          </div>
        </div>
      </div>
    </div>
    <btn btnName="登录" @actionClick="changePassword()"></btn>
  </div>
</template>
<script>
import btn from "../../components/btn";
import { postAjax, layOpen } from "../../api/axios";
import * as api from "../../api/api";
export default {
  data() {
    return {
      user: {},
      codeText: "获取验证码",
      time_status: true
    };
  },
  components: {
    btn
  },
  methods: {
    getCode(time) {
      this.getCodeHttp();
      let times = setInterval(() => {
        time--;
        this.codeText = "重新发送(" + time + ")";
        this.time_status = false;
        if (time < 0) {
          clearInterval(times);
          this.codeText = "获取验证码";
          this.time_status = true;
        }
      }, 1000);
    },
    getCodeHttp() {
      let data = { account: this.user.mobile, type: "find_password_mobile" };
      postAjax(api.sendCode, data).then(res => {
        if (res.status) {
          layOpen(res.msg);
        } else {
          layOpen(res.msg);
        }
      });
    },
    changePassword() {
      let data = {
        mobile: this.user.mobile,
        code: this.user.code,
        password: this.user.password,
        password_again: this.user.password_again
      };
      postAjax(api.forgetLoginPassword, data).then(res => {
        if (res.status) {
          layOpen(res.msg);
          setTimeout(() => {
            this.$router.push("/login");
          }, 1000);
        } else {
          layOpen(res.msg);
        }
      });
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

.password_again {
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
  margin: 0 auto;
  line-height: 1.5rem;
}

.btn {
  width: 8.56rem;
  height: 1.18rem;
  margin: 0 auto;
}

.code {
  line-height: 1.4rem;
  text-align: right;
}

.getcode {
  text-decoration: none;
  font-size: 0.34rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(16, 16, 16, 1);
}

.btn button {
  width: 8.56rem;
  margin-top: 1rem;
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
