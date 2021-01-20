<template>
<div class="tasks__wrapper">
  <input 
    type="text"
    class='search'
    placeholder="text here"
    v-model="search">
  <div class="tasks">
    <task v-for="(task, index) in searchHandler.slice(0,showfifteen)" :key="task.id" :id='task.id' :name="task.name" :date="task.date" :priority="task.priority" :tag="task.tag"/>
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
      priority:'',
      showfifteen:10
    };
  },
  methods:{
    showMore(){
        let lastTask = document.querySelector('.tasks').getBoundingClientRect().bottom - 700;
        (lastTask<200 ? setTimeout(()=>{this.showfifteen+=10},500) : 1);
    },

  },
  created () {
    window.addEventListener('scroll', this.showMore);
  },
  computed:{
   searchHandler(){
      return this.tasks.filter(elem=>{
        return elem.name.toLowerCase().includes(this.search)
      })
    },
  },
  mounted() {
    axios
      .get('https://edu.slim.technology/gettasks.php')
      .then(response => (this.tasks = response.data));
  },
  destroyed(){
    window.removeEventListener('scroll', this.showMore);
  }
  
}
  

</script>


<style lang="less" scoped>
@import '~@/assets/css/styles.less';
.tasks{
  background:@mc2;
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(30vw, 1fr));
  grid-gap:@m;
  padding:@m;
  margin-bottom:@m3;
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
