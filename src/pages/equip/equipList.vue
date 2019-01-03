<template>
    <div>
        <div class="search">
			<div class="bg pull-left">
				<div class="fd pull-left">
					<img src="../../assets/img/fd.png" />
				</div>
				<div class="searchInput pull-left">
					<input type="text" placeholder="请输入姓名，经销商ID，设备..." />
				</div>
			</div>
			<div class="sx pull-right">
				<img src="../../assets/img/sx.png" />
			</div>
		</div>
		<div class="nav">
			<a href="" class="addClass">我的设备</a>
			<a href="">一级设备</a>
			<a href="">二级设备</a>
		</div>
		<div class="item">
			<div class="list">
				<div class="row">
					<div class="list_img pull-left">
						<img src="../../assets/img/imgtq.png" />
					</div>
					<div class="pull-left list_text">
						<div class="text">
							设 备 ID：5522
						</div>
						<div class="text">
							剩余流量：3204升
						</div>
						<div class="text">
							累计充值: 3400
						</div>

					</div>
					<div class="status">
						<div class="zt pull-left">
							状态:<span class="nar">正常</span>
						</div>
						<div class="ys pull-right">
							<span class="md">原水：19PPM</span>
							<span>净水：4PPM</span>
						</div>
					</div>
					<div class="l_status">
						滤芯状态： <span>84&</span><span>84%</span><span>84%</span><span>84%</span><span>84%</span>
					</div>
					<div class="company">
						所属经销商(二级)：XX公司
					</div>
					<div class="address">
						地址：厦门集美区软件园三期A02栋5楼
					</div>
					<div class="use">
						<div class="header_r pull-left">
							<img src="../../assets/img/ty.png" />
						</div>
						<div class="pull-left info">
							<div class="info_name">
								张三
							</div>
							<div class="tel">
								电话：15859658966
							</div>
						</div>
					</div>
				</div>

			</div>
			<div class="list">
				<div class="row">
					<div class="list_img pull-left">
						<img src="../../assets/img/imgtq.png" />
					</div>
					<div class="pull-left list_text">
						<div class="text">
							设 备 ID：5522
						</div>
						<div class="text">
							剩余流量：3204升
						</div>
						<div class="text">
							累计充值: 3400
						</div>

					</div>
					<div class="status">
						<div class="zt pull-left">
							状态:<span class="nar" style="color:#F34949">异常</span>
						</div>
						<div class="ys pull-right">
							<span class="md">原水：19PPM</span>
							<span>净水：4PPM</span>
						</div>
					</div>
					<div class="l_status">
						滤芯状态： <span>84&</span><span>84%</span><span>84%</span><span>84%</span><span>84%</span>
					</div>
					<div class="company">
						所属经销商(二级)：XX公司
					</div>
					<div class="address">
						地址：厦门集美区软件园三期A02栋5楼
					</div>
					<div class="use">
						<div class="header_r pull-left">
							<img src="../../assets/img/ty.png" />
						</div>
						<div class="pull-left info">
							<div class="info_name">
								张三
							</div>
							<div class="tel">
								电话：15859658966
							</div>
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

.addClass{
	color: #1AADFF !important;
}

.list_img{
	width:2.39rem;
	height:1.72rem;
}

.list_img img{
	width: 100%;
}

.list_text{
	font-size:0.35rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(36,37,38,1);
	line-height:0.54rem;
	padding-left: 0.4rem;
}

.list{
	width: 90%;
	margin: 0 auto;
	height:6.84rem;
	background-color: white;
	margin-top: 0.3rem;
}

.row{
	width: 90%;
	margin: 0 auto;
	padding-top: 0.4rem;
}

.status{
	padding-top: 0.2rem;
	clear: both;
	font-size:0.32rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(105,105,105,1);
}

.md{
	margin-right: 0.2rem;
}

.nar{
	color: #04D06E;
	padding-left: 0.2rem;
}

.l_status{
	clear: both;
	padding-top: 0.2rem;
	font-size:0.32rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(105,105,105,1);
}

.l_status span{
	padding-left: 0.2rem;
}

.company{
	padding-top: 0.1rem;
	clear: both;
	font-size:0.32rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(105,105,105,1);
	line-height:0.54rem;
}

.address{
	clear: both;
	padding-top: 0.1rem;
	font-size:0.32rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(105,105,105,1);
	line-height:0.54rem;
	padding-bottom: 0.3rem;
	border-bottom:1px solid #E8EEF4 ;
}

.header_r{
	width:0.99rem;
	height:0.99rem;
	border-radius:50%;
}

.header_r img{
	width: 100%;
}

.use{
	padding-top: 0.4rem;
}

.info_name{
	font-size:0.35rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(36,37,38,1);
	line-height:0.57rem;
}

.info{
	padding-left: 0.3rem;
}

.tel{
	font-size:0.34rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(165,165,165,1);
}

</style>

