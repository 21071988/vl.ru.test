<template>
  <div class="container">
    <h1>Список задач</h1>
    <div class="wrapper">
      <tasksfilter />
      <tasks />
    </div>
  </div>
</template>

<script>
import tasksfilter from '~/components/tasksfilter.vue'
import tasks from '~/components/tasks.vue'
export default {}
</script>

<style lang="less" scoped>
@import '~@/assets/css/styles.less';
.container {
  min-height: 100vh;
}
h1{
  margin:40px 5%;
}
.wrapper{
  display: grid;
  grid-template-columns: minmax(20vw, 250px) 1fr;
  width: 90%;
  margin:auto;
}

</style>
