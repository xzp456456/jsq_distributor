<template>
    <div>
        <div class="main">
			<div class="item">
				<div class="list">
					<input type="" name="" id="" value="" placeholder="请输入密码" />
				</div>
				<div class="list">
					<div class="pull-left">
						<input type="text" name="" class="password" id="" value="" placeholder="请再次输入密码" />
					</div>
				</div>
			</div>
		</div>
		<btn btnName="确认"></btn>
    </div>
</template>
<script>
import btn from '../../components/btn'
export default {
    components:{
		btn
	}
}
</script>
<style scoped="">
.pull-left{
	float: left;
}

.pull-right{
	float: right;
}



.item{
	width:8.55rem;
	margin: 0 auto;
}

.list{
	width:100%;
	height:1.4rem;
	margin: 0 auto;
	border-bottom:1px solid #ECECEC;
}

.list input{
	width:8.55rem;
	height:1.3rem;
	border: none;
	outline: none;
}

.password{
	width: 6rem !important;
}

.ps{
	width: 0.613333rem;
	height: 0.586666rem;
	display: block;
	float: left;
	padding-top: 0.35rem;
	margin-left: 0.6rem;
}

.ps img{
	width: 100%;
}

.search a{
	text-decoration: none;
	font-size:0.34rem;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(16,16,16,1)
}

.search{
	width:9rem;
	height: 1.5rem;
	margin: 0 auto;
	line-height: 1.5rem;
}

.btn{
	width:8.56rem;
height:1.18rem;
margin: 0 auto;
}

.code{
	line-height: 1.4rem;
	text-align: right;
}

.getcode{
	    text-decoration: none;
    font-size: 0.34rem;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    color: rgba(16,16,16,1);
}


.btn button{
		width:8.56rem;
		margin-top: 1rem;
	height:1.18rem;
	background:rgba(26,173,255,1);
	border-radius:0.066666rem;
	outline: none;
	border: none;
	font-size:0.39rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(249,249,249,1)
}

input::-webkit-input-placeholder{ /*WebKit browsers*/
	font-size:0.39rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(202,204,205,1);
}

input::-moz-input-placeholder{ /*Mozilla Firefox*/
	font-size:0.39rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(202,204,205,1);
}

input::-ms-input-placeholder{ /*Internet Explorer*/ 
	font-size:0.39rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(202,204,205,1);
}
</style>

