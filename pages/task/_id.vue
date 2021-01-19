<template>
<div class='wrapper'>
  {{this.id}}
  <router-link to='/' class='back'><svg class='back__arrow' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.58 13.19"><g id="Слой_2" data-name="Слой 2"><g id="Слой_1-2" data-name="Слой 1"><line class="cls-1" x1="0.65" y1="6.83" x2="17.58" y2="6.83"/><polyline class="cls-1" points="6.7 0.34 0.69 6.83 6.42 12.84"/></g></g></svg><span>На главную</span></router-link>
  <div class='task__wrapper'>
    <div class='task'>
      <input type="hidden" v-model='task.id'>
          <input @click='showEdit = true' type="text" v-model='task.name'>
          <div class='grey'><span>Создано</span><span>{{task.date}}</span></div>
          <div><span>Приоритет:</span><input @click='showEdit = true' type='text' v-model='task.priority'></div>
          <div><span>Отметки:</span><input @click='showEdit = true' type="text" v-model='task.tag'></div>
          <button class='edit__btn' v-if='showEdit' @click='uploadTask'>Обновить данные</button>
      </div>      
  </div>
</div>
</template>

<script>
import axios from "axios"
export default {
  props: ['id'],
  data(){
    return{
      showEdit:false
    }
  },
  methods:{
    uploadTask() {
      let formData = new FormData();
      formData.append('id', this.task.id);
      formData.append('name', this.task.name);
      formData.append('priority', this.task.priority);
      formData.append('tag', this.task.tag);
      axios.post('https://edu.slim.technology/newtask.php', formData,{
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
        .then(response => console.log('success item'))
    }
  },
  created(){
    this.$store.dispatch('getTasks');
    
  },
  computed:{
    task() {
        return this.$store.getters.getSomeTask(this.id);
    },
  }
}
</script>


<style lang="less" scoped>
@import '~@/assets/css/styles.less';
.back__arrow{
  width: 20px;
  margin-right: 10px;
  .cls-1{
    fill:none;
    stroke:@blue;
    stroke-width: 1.5px;
    stroke-miterlimit:10;
    .trans4;
    &:hover{
      stroke:@blue2;
    }
  }
}
  .task__wrapper{
    margin-top:@m2;
  }
  .wrapper{
    padding:@m3;
  }
  .edit__btn{
        height: 40px;
    width: 40%;
    border: none;
    border-radius: 5px;
    color: #ffffff;
    text-transform: uppercase;
    background: @blue;
    .trans4;
    &:hover{
      background:@blue2;
    }
  }
  .back{
    .bold;
    font-size: 1.5rem;
    .trans4;
    span{
      color:@blue;
      .trans4;
      &:hover{
        color:@blue2;
      }
    }
    &:hover{ 
      color:@mch;
    }
  }
  .task{
    width: 50%;
    height: 40%;
    padding:@m;
    background: @mc2;
    -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    &:hover{
      background: @mc2;
    }
    .b5;
    input{
      outline:none;
      border:none;
      background: @mc2;
      font-size: 2rem;
      .bold;
      padding:0;
      margin-bottom:@m;
      width: fit-content;
    }
    h2{
      margin-bottom:@m;
    }
    .grey{
      color:#848484;
    }
    div{
      margin-bottom:@m1;
      
      span{
        &:first-child{
          margin-right:5px;
          .bold;
        }
      }
    }
  }
 @media screen and(max-width: 768px) {
   .task{
     .w100;
   }
 }

</style>
