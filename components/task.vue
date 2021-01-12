<template>
    <div class='task'>
      <h2>{{name}}</h2>
      <div class='grey'><span>Создано</span><span>{{date}}</span></div>
      <div><span>Приоритет:</span><span>{{priority}}</span></div>
      <div><span>Отметки:</span><span>{{tag}}</span></div>
    </div>
</template>

<script>
export default{
  props:{
     name:String,
     date:String,
     priority:String,
     tag:String
  }
}
</script>
<style lang="less">
@import '~@/assets/css/styles.less';
  .task{
    padding:@m;
    background: @mc2;
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