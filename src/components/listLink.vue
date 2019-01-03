<template>
    <div class="list">
					<div class="row">
						<div class="pull-left title">
							<slot name="title"></slot>
						</div>
						<div class="pull-right text_right">
							<slot name="text"></slot>
						</div>
					</div>
				</div>
</template>
<script>
export default {
    
}
</script>
<style scoped="">
.pull-left{
	float: left !important;
}

.pull-right{
	float: right !important;
}

.headerImg{
	width:1.25rem;
	height:1.25rem;
	background:rgba(238,238,238,1);
	border-radius:50%;
	position: relative;
	top: 0.4rem;
}

.headerImg img{
	width: 100%;
}

.list{
	width: 100%;
	height: 1.6rem;
	font-size:0.37rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(51,51,51,1);
	line-height:0.17rem;
}

.text_right{
	line-height: 1.6rem;
}

.row{
	width: 90%;
	margin: 0 auto;
}

.title{
	line-height: 1.6rem;
}

.numpd{
	padding-right: 0.3rem;
}
</style>
