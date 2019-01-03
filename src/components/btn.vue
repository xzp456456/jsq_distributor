<template>
        <div class="btn">
				<button @click="methodClick()">{{btnName}}</button>
			</div>
</template>
<script>
export default {
    name:'btn',
    props:['btnName'],
    methods:{
        methodClick(){
            this.$emit('actionClick');
        }
    }
}
</script>
<style scoped="">
.btn{
	width:8.56rem;
	height:1.19rem;
	margin: 0 auto;
	margin-top: 0.8rem;
}

.btn button{
	border: none;
	outline: none;
	width:8.56rem;
	height:1.19rem;
	background:rgba(26,173,255,1);
	font-size:0.39rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(249,249,249,1);
	border-radius:0.04rem;
}
</style>

