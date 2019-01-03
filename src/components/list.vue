<template>
    <div class="info_item">
				<div class="list">
					<div class="row">
						<div class="name pull-left">{{leftName}}</div>
						<div class="pull-right">
							<input type="text" name="" id="" value="" :placeholder="inputName" />
						</div>
					</div>
				</div>
		</div>
</template>
<script>
export default {
    name:'list',
    props:['leftName','inputName']
}
</script>
<style scoped="">
.info_item{
	width: 100%;
}

.pull-left{
	float: left !important;
}

.pull-right{
	float: right !important;
}

.info_item .list input{
	border: none;
	font-size:0.37rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(202,202,202,1);
	line-height: 1.5rem;
	text-align: right;
}

.name_text{
	line-height: 1.5rem;
	font-size:0.37rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(51,51,51,1);
	
}

.name_text span{
	margin-right: 0.266666rem;
}

.name_text img{
	position: relative;
	top: 0.106666rem;
}

.name{
	font-size:0.37rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(51,51,51,1);
	line-height: 1.5rem;
	
}

.row{
	margin: 0 auto;
	width: 90%;
}

.list{
	width: 100%;
	height: 1.5rem;
	border-bottom:1px solid #E6E6E6;
}

</style>
