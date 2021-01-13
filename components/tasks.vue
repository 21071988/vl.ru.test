<template>
<div class="tasks__wrapper">
  <input 
    type="text"
    class='search'
    placeholder="text here"
    v-model="search">

  <div class="tasks">
    <task v-for="task in searchHandler" :key="task.id" :name="task.name" :date="task.date" :priority="task.priority" :tag="task.tag"/>
  </div>
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
      tasks: [],
      search:'',
    };
  },
  computed:{
    searchHandler(){
      return this.tasks.filter(elem=>{
        return elem.name.toLowerCase().includes(this.search)
      })
    }
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
  background:@mc2;
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap:@m;
  padding:@m;
  .b5;
}
.search{
      min-height: 40px;
    width: 50%;
    margin-bottom: 20px;
    border-radius: 5px;
    outline: none;
    border:1px solid @mc2;
    padding-left:10px;
    .uppercase;
    .bold;
}
</style>
