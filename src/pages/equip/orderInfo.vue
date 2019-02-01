<template>
    <div>
        <div class="item">
			<div class="list">
				<div class="row">
					<div class="title">
					<span class="pid pull-left">{{info.order_title}} 订单号：{{info.order_id}}</span>
					<span class="o_status pull-right" v-if="info.status==0">未支付</span>
					<span class="o_status pull-right" v-if="info.status==1">已支付</span>
					<span class="o_status pull-right" v-if="info.status==2">已完成</span>
					<span class="o_status pull-right" v-if="info.status==3">已发货</span>
					</div>
					<div class="clear">
						<div class="main_img pull-left">
							<img src="../../assets/img/imgtq.png"/>
						</div>
						<div class="dd pull-left">
							<div class="money">
								<span class="pull-left money_r">{{info.order_name}}</span>
								<span class="pull-right money_s">¥{{info.amount}}</span>
							</div>
							<div class="team_name">
								经销商 :{{info.dealer_name}}
							</div>
							<div class="pay_time">
								购买时间 : {{info.create_time}}
							</div>
						</div>
						<div class="qd">
						<span>设备id:{{info.device_id}}</span>
						<span class="span_d">是否记佣：{{info.is_commission?'记':'不记'}}</span>
					</div>
					<div class="qd">
						型号:{{info.device_model}}
					</div>
					<div class="qd">
						收货地址：{{info.dealer_consignee_province}}{{info.dealer_consignee_city}}{{info.dealer_consignee_address}}
					</div>
					</div>
					
					<div class="ws">
						<div class="pull-left names">
							<div class="pull-left">
								<img class="imgtop" :src="info.avatar"/> 
							</div>
							<div class="pull-left name_s">
								{{info.nickname}}
							</div>
						</div>
						<div class="pull-right imgtel">
							<a :href="'tel:'+info.mobile"><img src="../../assets/img/ph.png"/></a>
						</div>
					</div>
				</div>
				
			</div>
		
		</div>
    </div>
</template>
<script>
import { postAjax } from "@/api/axios";
import * as api from "@/api/api";
export default {
    data(){
		return{
			info:{}
		}
	},
	created(){
		this.getUserInfo()
	},
	methods:{
		getUserInfo(){
			let data = { order_id:localStorage.getItem('order_id') }
			postAjax(api.getUserInfo,data)
			.then(res=>{
				console.log(res)
				this.info = res.data;
			})
		}
	}
}
</script>
<style scoped="">
li{
	list-style: none;
}

ul{
	    padding-inline-start: 0px;
	    margin-block-start: 0;
	        margin-block-end: 0em;
}

.pull-left{
	float: left;
}

.pull-right{
	float: right;
}

.search{
	width: 90%;
	margin: 0 auto;
	height:0.79rem;
	line-height: 0.79rem;
	padding: 0.3rem 0;
}

.sx{
	width:0.55rem;
	height:0.55rem;
	padding-top: 0.1rem;
}

.sx img{
	width: 100%;
}

.fd{
	width: 0.36rem;
	height:0.36rem;
	padding-left: 0.4rem;
}

.fd img{
	width: 100%;
}

.searchInput input{
	padding-left: 0.266666rem;
	width:4.85rem;
	font-size:0.35rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(202,202,202,1);
	margin: 0 auto;
	border: none;
	outline: none;
}


.bg{
	width:8.23rem;
	height:1rem;
	background:rgba(255,255,255,1);
	box-shadow:0rem 0rem 0rem 0rem rgba(0, 0, 0, 0.02);
	border-radius:0.4rem;
	margin: 0 auto;
	
}

.nav{
	width: 100%;
	height:1.39rem;
	background:rgba(255,255,255,1);
	margin-top: 0.3rem;

}

.nav a{
	font-size:0.38rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(102,102,102,1);
	text-decoration: none;
	text-align: center;
	    padding: 0rem 0.83rem;
	    line-height: 1.39rem;
}

.orderNav{
	height:1.15rem;
	background:rgba(255,255,255,1);
	margin-top: 0.3rem;
}

.orderNav a{
	font-size:0.32rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(102,102,102,1);
	text-decoration: none;
	width: 1.8rem;
	display: inline-block;
	height: 1.15rem;
	text-align: center;
	 line-height: 1.15rem;
}

.row{
	width: 90%;
	margin: 0 auto;
	padding-top: 0.3rem;
}

.list{
	width:9.19rem;
	height:6.89rem;
	background:rgba(255,255,255,1);
	border-radius:0rem;
	margin: 0 auto;
	margin-top: 0.3rem;
}

.qd{
	font-size:0.32rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(105,105,105,1);
	clear: both;
	padding-top: 0.15rem;
}

.pid{
	
	font-size:0.32rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(105,105,105,1);
}

.span_d{
	padding-left: 0.4rem;
}

.o_status{
	font-size:0.32rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(36,37,38,1);
}

.money{
	clear: both;
	width: 5.6rem;
	padding-left: 0.2rem;
}

.money_r{
	font-size:0.4rem;
	font-family:PingFang-SC-Bold;
	font-weight:bold;
	color:rgba(36,37,38,1);
	line-height:0.61rem;
}

.money_s{
	font-size:0.42rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(26,173,255,1);
}

.main_img{
	width:2.39rem;
	height:1.72rem;
}

.main_img img{
	width: 100%;
}

.team_name{
	clear: both;
	font-size:0.35rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(36,37,38,1);
	padding-left: 0.2rem;
	padding-bottom: 0.1rem;
}

.pay_time{
	clear: both;
	font-size:0.35rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(36,37,38,1);
	padding-left: 0.2rem;
	padding-bottom: 0.1rem;
}

.clear{
	clear: both;
	padding-top: 0.4rem;
	width: 100%;
	border-bottom:1px solid #E8EEF4 ;
}

.imgtel{
	width:0.71rem;
	height:0.71rem;
}

.imgtel img{
	width: 100%;
}

.imgtop{
	width:0.99rem;
	height:0.99rem;
	border-radius:50%;
}

.names{
	font-size:0.35rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(36,37,38,1);
	line-height:0.57rem;
}

.ws{
	width: 100%;
	height:1rem;
	line-height: 1rem;
	padding-top: 0.4rem;
}

.name_s{
	 line-height: 1rem;
	 padding-left: 0.266666rem;
}

.total{
	position: fixed;
	bottom: 0;
	height:1.48rem;
	width: 100%;
	background:rgba(255,255,255,1);
	border:0.01px solid rgba(164, 164, 164, 0.26);
	font-size:0.4rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(36,37,38,1);
	line-height: 1.48rem;
}

.rows{
	width: 87%;
	margin: 0 auto;
}

</style>
