<template>
    <div class='task'>
      <router-link :to='openTask'>
        {{id}}
        <h2>{{name}}</h2>
        <div class='grey'><span>Создано</span><span>{{date}}</span></div>
        <div><span>Приоритет:</span><span>{{priority}}</span></div>
        <div><span>Отметки:</span><span>{{tag}}</span></div>

      </router-link>
    </div>
</template>

<script>
export default{
  props:{
    id:String,
     name:String,
     date:String,
     priority:String,
     tag:String
  },
  computed:{
    taskId(){
      return + this.$route.param.id;
      console.log(this.id);
    },
    openTask(){
      return `task/${this.id}`
    }
  }
}
</script>
<style lang="less">
@import '~@/assets/css/styles.less';
  .task{
    padding:@m;
    background: @mc2;
    .trans4;
    &:hover{
      background: @mch;
    }
    .b5;
    background:#ffffff;
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
</style>