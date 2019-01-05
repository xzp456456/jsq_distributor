<template>
    <div>
        <div class="main">
			<div class="row">
				<span class="pull-left">最低库存</span>
				<span class="pull-right"><input type="text" placeholder="请输入最低库存" v-model="min_sku" /></span>
			</div>
		</div>
		<div class="text">
			库存低于以上数量将自动提交发货申请
		</div>
		<v-btn btnName="提现" @actionClick="updateMinSku"></v-btn>
    </div>
</template>
<script>
import btn from '@/components/btn'
import * as api from '@/api/api'
import { postAjax,layOpen} from '@/api/axios'
export default {
	data(){
		return{
			min_sku:""
		}
	},
	methods:{
		updateMinSku(){
			let data = {
				min_sku:this.min_sku
			}
			postAjax(api.updateMinSku,data)
			.then(res=>{
				if(res.status){
					layOpen(res.msg);
				}else{
					layOpen(res.msg);
				}
			})
		}
	},
    components:{
		'v-btn':btn
	}
}
</script>
<style scoped="">
.row{
	width: 90%;
	margin: 0 auto;
}

.main{
	height:1.33rem;
	width: 100%;
	margin-top: 0.3rem;
	background:rgba(255,255,255,1);
	border:1px solid rgba(232, 232, 232, 1);
	font-size:0.37rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(51,51,51,1);
	line-height: 1.33rem;
}

.main input{
	border: none;
	outline: none;
	text-align: right;
}

.pull-left{
	float: left;
}

.pull-right{
	float: right;
}

.text{
	font-size:0.33rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(140,140,140,1);
	width: 90%;
	margin: 0 auto;
	margin-top: 0.3rem;
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
	font-size:0.39rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(249,249,249,1);
	outline: none;
	border: none;
	border-radius:0.066666rem ;
}

</style>
