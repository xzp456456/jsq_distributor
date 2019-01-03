<template>
    <div class="item">
			<back-list>
				<span slot="listOne">佣金 294.00</span>
				<span slot="time">2018-11-01 12:12:16</span>
			</back-list>	
			<back-list>
				<span slot="listOne">佣金 294.00</span>
				<span slot="time">2018-11-01 12:12:16</span>
			</back-list>				
		</div>
</template>
<script>
import backList from '../../components/backList'
export default {
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
