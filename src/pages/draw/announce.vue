<template>
    	<div class="item">
			<div class="list" v-for="(list,index) in lists" :key="index">
				<div class="row">
					<div class="pull-left">
						<div class="title">{{list.title}}</div>
						<div class="time">{{list.create_time}}</div>
					</div>
					<div class="logos pull-right">
						<img :src="list.cover_img" />
					</div>
				</div>
			</div>
			<!-- <div class="list">
				<div class="row">
					<div class="pull-left">
						<div class="title">关于借款的通知</div>
						<div class="time">2017-12-31</div>
					</div>
					<div class="logos pull-right">
						<img src="../../assets/img/15gg.png" />
					</div>
				</div>

			</div> -->
		</div>
</template>
<script>
import { postAjax } from '@/api/axios'
import * as api from '@/api/api'
export default {
	data(){
		return{
			lists:[]
		}
	},
	created(){
		this.getList();
	},
    methods:{
		getList(){
			let data = {
				page:1,
				page_size:10
			}
			postAjax(api.notice,data)
			.then(res=>{
				console.log(res);
				if(res.status){
					this.lists = res.data;
				}
			})
		}
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

.logos{
	width:2.09rem;
	height:1.64rem;
	padding-top: 0.25rem;
}

.logos img{
	width: 100%;
	height: 100%;
}

.title{
	font-size:0.39rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(50,50,50,1);
	padding-top: 0.54rem;
}

.time{
	font-size:0.3rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(153,153,153,1);
	padding-top: 0.3rem;
}

.row{
	width: 90%;
	margin: 0 auto;
}

.list{
	height: 2.15rem;
	width: 100%;
	border-bottom:1px solid #E9E9E9 ;
	background-color: white;
}

</style>
