<template>
    <div class="item">
			<back-list v-for="(list,index) in lists"  :key="index" @actionClick="navgateTo('breakInfo',list.settled_id)">
				<span slot="listOne">佣金 {{list.amount}}</span>
				<span slot="time">{{list.begin_time}}-{{list.end_time}}</span>
			</back-list>	
		</div>
</template>
<script>
import backList from '@/components/backList'
import { postAjax } from '@/api/axios'
import * as api from '@/api/api'
export default {
	data(){
		return{
			data:{
				page:1,
				page_size:10
			},
			lists:[]
		}
	},
	created(){
		if(localStorage.getItem('list_type')=="readList"){
			this.settledDetail()
		}else{
			this.unsettledDetail();
		}
		
	},
	methods:{
		navgateTo(url,id){
			this.$router.push(url);
			localStorage.setItem('settled_id',id)
		},
		settledDetail(){
			let data = this.data;
			postAjax(api.settledList,data)
			.then(res=>{
				console.log(res);
				if(res.status){
					this.lists = res.data.list;
				}
			})
		},
		unsettledDetail(){
			let data = this.data;
			postAjax(api.unsettledList,data)
			.then(res=>{
				console.log(res);
				if(res.status){
					this.lists = res.data.list;
				}
			})
		},
	},
    components:{
		'back-list':backList
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

.row{
	width: 90%;
	margin: 0 auto;
}

.listOne{
	font-size:0.42rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(51,51,51,1);
	padding-top: 0.35rem;
}

p{
	margin: 0;
	padding-bottom: 0.1rem;
}

.time{
	font-size:0.32rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(121,121,121,1);
}

.back{
	width:0.23rem;
	height:0.43rem;
	line-height: 1.8rem;
}

.back img{
	width: 100%;
}

.list{
	width: 100%;
	height: 1.8rem;
	border-bottom:1px solid #E6E6E6 ;
	background-color: white;
}

</style>
