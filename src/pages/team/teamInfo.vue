<template>
  <div>
    <header></header>
    <main>
      <div class="item">
        <div class="list">
          <div class="row">
            <div class="pull-left title">经销商ID</div>
            <div class="pull-right text_right">{{teamInfo.dealer_id}}</div>
          </div>
        </div>
        <div class="list">
          <div class="row">
            <div class="pull-left title">经销商</div>
            <div class="pull-right text_right">{{teamInfo.consignee_name}}</div>
          </div>
        </div>
        <div class="list">
          <div class="row">
            <div class="pull-left title">经销商地址</div>
            <div class="pull-right text_right">{{teamInfo.dealer_address}}</div>
          </div>
        </div>
        <div class="list">
          <div class="row">
            <div class="pull-left title">联系方式</div>
            <div class="pull-right text_right">{{teamInfo.mobile}}</div>
          </div>
        </div>
        <div class="list">
          <div class="row">
            <div class="pull-left title">注册时间</div>
            <div class="pull-right text_right">2018-11-16</div>
          </div>
        </div>
        <div class="list">
          <div class="row">
            <div class="pull-left title">累计业绩</div>
            <div class="pull-right text_right">665262.00</div>
          </div>
        </div>
        <div class="list">
          <div class="row">
            <div class="pull-left title">累计装机量</div>
            <div class="pull-right text_right">
              <span class="numpd">25台</span>
              <img class="imds" src="../../assets/img/in.png">
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer></footer>
  </div>
</template>
<script>
import { postAjax } from "../../api/axios";
import * as api from "../../api/api";
export default {
  data(){
    return{
        teamInfo:[]
    }
  },
  created(){
    this.getTeamInfo();
  },
  methods:{
     getTeamInfo(){
        postAjax(api.getUserInfo,{})
        .then(res=>{
          console.log(res);
          if(res.status){
              this.teamInfo = res.data
          }
        
        })
     }
  }

};
</script>
<style scoped="">
.pull-left{
	float: left !important;
}

.pull-right{
	float: right !important;
}

.imds{
 width: 0.24rem;
	height: 0.44rem;
}

.headerImg{
	width:1.25rem;
	height:1.25rem;
	background:rgba(238,238,238,1);
	border-radius:50%;
	position: relative;
	top: 0.4rem;
}

.headerImg img{
	width: 100%;
}

.list{
	width: 100%;
	height: 1.6rem;
	font-size:0.37rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(51,51,51,1);
	line-height:0.17rem;
}

.text_right{
	line-height: 1.6rem;
}

.row{
	width: 90%;
	margin: 0 auto;
}

.title{
	line-height: 1.6rem;
}

.numpd{
	padding-right: 0.3rem;
}

</style>
