<template>
    <div>
        <div class="item">
			<div class="list">
				<div class="row">
					<div class="title">
					<span class="pid pull-left">更换滤芯 订单号：545345</span>
					<span class="o_status pull-right">未支付</span>
					</div>
					<div class="clear">
						<div class="main_img pull-left">
							<img src="../../assets/img/imgtq.png"/>
						</div>
						<div class="dd pull-left">
							<div class="money">
								<span class="pull-left money_r">987元5435升</span>
								<span class="pull-right money_s">¥254.00</span>
							</div>
							<div class="team_name">
								经销商 : 郑小平
							</div>
							<div class="pay_time">
								购买时间 : 2018.01.02
							</div>
						</div>
						<div class="qd">
						<span>设备id:100565</span>
						<span class="span_d">是否记佣：不记</span>
					</div>
					<div class="qd">
						设备型号：家用型（LANMAX-1856）
					</div>
					<div class="qd">
						收货地址：福建省 厦门市 集美区 软件园三期A区02栋5楼
					</div>
					</div>
					
					<div class="ws">
						<div class="pull-left names">
							<div class="pull-left">
								<img class="imgtop" src="../../assets/img/ty.png"/> 
							</div>
							<div class="pull-left name_s">
								张三
							</div>
						</div>
						<div class="pull-right imgtel">
							<img src="../../assets/img/ph.png"/>
						</div>
					</div>
				</div>
				
			</div>
		
		</div>
    </div>
</template>
<script>
export default {
    
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
	height: 3.9rem;
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
