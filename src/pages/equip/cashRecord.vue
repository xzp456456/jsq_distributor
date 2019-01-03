<template>
    <div class="item">
			<list-text leftText="23000.00" rightText="2018-11-01"></list-text>
			<list-text leftText="23000.00" rightText="2018-11-01"></list-text>
			<list-text leftText="23000.00" rightText="2018-11-01"></list-text>
		</div>
</template>
<script>
import listText from '../../components/listText'
export default {
    components:{
		'list-text':listText
	}
}
</script>
<style scoped="">
.row{
	width: 90%;
	margin: 0 auto;
}

.pull-left{
	float: left;
}

.pull-right{
	float: right;
}


.list{
	width: 100%;
	height: 1.6rem;
	line-height: 1.6rem;
	border-bottom: 1px solid #E6E6E6;
}

.money{
	font-size:0.42rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(51,51,51,1);
}

.time{
	font-size:0.32rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(121,121,121,1);
}

</style>
