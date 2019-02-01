<template>
    <div>
        <div class="main">
			<div class="row">
				<p>提现金额</p>
			<div class="money">
			<span class="bs">¥</span>
			<input class="num"  v-model="amount" />
			</div>
			<p>可提现金额：{{can_withdraw}}元</p>
			</div>
		</div>
		<p class="pd"></p>
		<btn btnName="提现"  @actionClick="withdraw()"></btn>
    </div>
</template>
<script>
import btn from '@/components/btn'
import { postAjax } from '@/api/axios'
import * as api from '@/api/api'
export default {
	data(){
		return{
			amount:0,
			can_withdraw:""
		}
	},
	created(){
		this.can_withdraw = localStorage.getItem('can_withdraw');
	},
	methods:{
		withdraw(){
			let data = { amount:this.amount };
			postAjax(api.withdraw,data)
			.then(res=>{
				console.log(res);
				if(res.status){
					this.Toast({
						 message: res.msg,
						position: 'center',
						duration: 1500
					})
					setTimeout(()=>{
						this.$router.push('/')
					},1500)
				}else{
					this.Toast({
						 message: res.msg,
						position: 'center',
						duration: 1500
					})
				}
			})
		}
	},
    components:{
		btn
	}
}
</script>
<style scoped="">
.main{
	width:9.28rem;
	height:3.36rem;
	background:rgba(255,255,255,1);
	border:1px solid rgba(232, 232, 232, 1);
	margin: 0 auto;
	border-radius:0.133333rem;
	margin-top: 0.5rem;
}

.main p{
	font-size:0.35rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(51,51,51,1);
	margin: 0.3rem 0;
}

.bs{
	font-size:0.43rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(51,51,51,1);
}

.money{
	font-size:0.85rem;
	font-family:PingFang-SC-Heavy;
	font-weight:800;
	color:rgba(51,51,51,1);
	border-bottom:1px solid rgba(232, 232, 232, 1);
	padding-bottom: 0.1rem;
}

.num{
	font-size:0.65rem;
	font-family:PingFang-SC-Heavy;
	font-weight:bold;
	width: 50%;
	border: none;
	outline: none;
}

.row{
	width: 90%;
	margin: 0 auto;
}

.pd{
	font-size:0.33rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(147,147,147,1);
	padding-left: 0.8rem;
}

.btn{
	width:8.56rem;
	height:1.18rem;
	margin: 0 auto;
	margin-top: 1rem;
}

.btn button{
	width:8.56rem;
	height:1.18rem;
	background:rgba(26,173,255,1);
	border-radius:0.066666rem;
	font-size:0.39rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(249,249,249,1);
	outline: none;
	border: none;
}

</style>

