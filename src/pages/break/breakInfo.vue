<template>
    <div>
        <header></header>
		<main>
			<div class="item">
				<list-link>
					<span slot="title">类型</span>
					<span slot="text">业务提成（收入）</span>
				</list-link>
				<list-link>
					<span slot="title">时间</span>
					<span slot="text">2018-11-06</span>
				</list-link>
				<list-link>
					<span slot="title">客户</span>
					<span slot="text">赵先生</span>
				</list-link>
				<list-link>
					<span slot="title">设备ID</span>
					<span slot="text">10025077</span>
				</list-link>
				<list-link>
					<span slot="title">充值金额</span>
					<span slot="text">980.00</span>
				</list-link>
				<list-link>
					<span slot="title">业务提成</span>
					<span slot="text">30%</span>
				</list-link>
			</div>
		</main>
		<footer></footer>
    </div>
</template>
<script>
import listLink from '../../components/listLink'
export default {
  components:{
	  'list-link':listLink
  }
}
</script>
<style scoped="">


</style>
