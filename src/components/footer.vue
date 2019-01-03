<template>
    <div>
        <footer>
			<div class="footer">
				<div class="item_home" >
					<div><img src="../assets/img/home.png"/></div>
					<p>首页</p>
				</div>
				<div class="item_home">
					<div><img src="../assets/img/w.png"/></div>
					<p>设备</p>
				</div>
			</div>
		</footer>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped="">
footer{
	position: fixed;
	bottom: 0;
	width: 100%;
	height:1.57rem;
	box-shadow:0rem 0rem 0rem 0rem rgba(230,230,230,1);
	    border-top: 1px solid #E6E6E6;
}

footer .item_home{
	padding-top: 0.3rem;
	width: 50%;
	float: left;
	text-align: center;
	
}
</style>
