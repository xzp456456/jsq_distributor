<template>
    <div>
        <div class="nav">
			<a href="">当天</a>
			<a href="">本周</a>
			<a href="">本月</a>
		</div>
		<div class="item">
			<div class="list">
				<div class="row">
					<span class="imgs"><img class="pull-left" src="../../assets/img/header.png"/></span>
					<span class="pull-left name">周杰伦</span>
					<span class="pull-right money">100.00</span>
				</div>
			</div>
			<div class="list">
				<div class="row">
					<span class="imgs"><img class="pull-left" src="../../assets/img/header.png"/></span>
					<span class="pull-left name">周杰伦</span>
					<span class="pull-right money">100.00</span>
				</div>
			</div>
			<div class="list">
				<div class="row">
					<span class="imgs"><img class="pull-left" src="../../assets/img/header.png"/></span>
					<span class="pull-left name">周杰伦</span>
					<span class="pull-right money">100.00</span>
				</div>
			</div>
			<div class="list">
				<div class="row">
					<span class="imgs"><img class="pull-left" src="../../assets/img/header.png"/></span>
					<span class="pull-left name">周杰伦</span>
					<span class="pull-right money">100.00</span>
				</div>
			</div>
		</div>
		<div class="total">
			合计 :<span class="danger">1,224,000</span>
		</div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped="">
.pull-left{
	float: left;
}

.pull-right{
	float: right;
}

.nav{
	width: 100%;
	line-height: 1.55rem;
	height: 1.55rem;
	border-top:1px solid #E6E6E6;
	border-bottom:1px solid #E6E6E6;
}

.nav a{
	text-decoration: none;
	padding: 0 1.2rem;
	font-size:0.4rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(70,77,93,1);
}

.list{
	font-size:0.4rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(116,118,121,1);
	height: 1.55rem;
	width: 100%;
	line-height: 1.55rem;
}

.imgs{
	width:1.2rem;
	height: 1rem;
	display: block;
	float: left;
	padding-top: 0.30rem;
	
}

.imgs img{
	width: 100%;
}

.row{
	width: 80%;
	margin: 0 auto;
	padding-right: 0.4rem;
}

.name{
	padding-left: 0.1rem;
}

.total{
	width: 90%;
	margin: 0 auto;
	text-align: right;
	font-size:0.44rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(116,118,121,1);
	margin-top: 0.7rem;
}

.danger{
	color: #FF3A48;
}

</style>
