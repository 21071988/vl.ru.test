<template>
  <div class="tasks">
    <task v-for="task in tasks" :key="task.id" :name="task.name" :date="task.date" :priority="task.priority" :tag="task.tag"/>
  </div>
</template>

<script>
import axios from 'axios'
import task from '~/components/task.vue'

export default {
  components: {
    task
  },
  data() {
    return {
      tasks: null
    };
  },
  mounted() {
    axios
      .get('https://edu.slim.technology/gettasks.php')
      .then(response => (this.tasks = response.data));
  }
  
}
</script>

<style lang="less" scoped>
@import '~@/assets/css/styles.less';
.tasks{
  background: #848484;
  display:grid;
  grid-template-columns: repeat(2, minmax(30vw,1fr));
  grid-gap:@m;
  padding:@m;
  .b5;
}
</style>
