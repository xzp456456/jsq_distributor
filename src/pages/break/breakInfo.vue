<template>
    <div>
        <header></header>
		<main>
			<div class="item">
				<div class="list" v-for="(list,index) in lists" :key="index">
					<div class="row">
						<div class="type_all">
							<span class="left type">类型：{{list.type}}</span>
							<span class="right time">{{list.create_time}}</span>
						</div>
						<div class="farmer">
							<span>客户：{{list.username}}</span>
							<span>设备ID：{{list.device_id}}</span>
						</div>
						<div class="money">
							<span>充值金额：{{list.recharge_amount}}元</span>
							<span>业绩提成：{{list.ratio}}</span>
						</div>
					</div>
				</div>
			</div>
		</main>
    </div>
</template>
<script>
import { postAjax } from '@/api/axios'
import * as api from '@/api/api'
export default {
	data(){
		return{
			lists:[],
			data:{
				page:1,
				page_size:10
			}
		}
	},
	created(){
		this.settledDetail()
	},
	methods:{
		settledDetail(){
			this.data.settled_id = localStorage.getItem('settled_id')
			let data = this.data;
			postAjax(api.settledDetail,data)
			.then(res=>{
				this.lists = res.data.list
			})
		}
	}
}
</script>
<style scoped="">
.left{
	float: left;
}

.right{
	float: right;
}

.type{
	font-size:.4rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(51,51,51,1);
}

.time{
	font-size:.32rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(140,140,140,1);
}
.row{
	width: 90%;
	margin: 0 auto;
}

.type_all{
	width: 100%;
	padding-top: .56rem;
	height:.573333rem;
	padding-bottom:.373333rem; 
}

.farmer{
	clear: both;
	font-size:.32rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(140,140,140,1);
}

.money{
		font-size:.32rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(140,140,140,1);
	margin-top: .173333rem;
}

.list{
	height:2.626667rem;
	width: 100%;
	background-color: white;
	margin-top: .293333rem;
}

</style>
