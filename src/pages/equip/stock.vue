<template>
  <div>
    <div class="stock">
      <span class="span_a">库存</span>
      <span class="span_b">15</span>
      <span class="span_c">台</span>
    </div>
    <btn btnName="发货设置"></btn>
  </div>
</template>
<script>
import btn from "../../components/btn";
export default {
  components: {
    btn
  }
};
</script>
<style scoped="">
.stock {
  width: 90%;
  height: 1.56rem;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(232, 232, 232, 1);
  margin: 0 auto;
  margin-top: 0.3rem;
  background-color: white;
  text-align: center;
  line-height: 1.46rem;
}

.span_a {
  font-size: 0.35rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
}

.span_b {
  font-size: 0.85rem;
  font-family: PingFang-SC-Heavy;
  font-weight: 800;
  color: rgba(51, 51, 51, 1);
}

.span_c {
  font-size: 0.43rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
}

.btn {
  width: 8.56rem;
  height: 1.18rem;
  margin: 0 auto;
  margin-top: 1rem;
}

.btn button {
  width: 8.56rem;
  outline: none;
  border: none;
  height: 1.18rem;
  background: rgba(26, 173, 255, 1);
  font-size: 0.39rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(249, 249, 249, 1);
  border-radius: 0.066666rem;
}
</style>
