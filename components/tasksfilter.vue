<template>
<div class="filter">
        
        <div class="filter__sort">
          <h3>Сортировка</h3>
          <div>
            <input type="radio" value='new' name='date'>
            <label for="new">Новые</label>
          </div>
          <div>
            <input type="radio" value='old' name='date'>
            <label for="old">Старые</label>
          </div>
        </div>
        
        <div class="filter__sort">
          <div class="filter__options">
            <h3>Приоритет</h3>
            <div>
              <input type="checkbox" value='low' name='priority'>
              <label for="new">Низкий</label>
            </div>
            <div>
              <input type="checkbox" value='normal' name='priority'>
              <label for="normal">Нормальный</label>
            </div>
            <div>
              <input type="checkbox" value='high' name='priority'>
              <label for="high">Высокий</label>
            </div>
          </div>

          <div class="filter__options">
            <h3>Метка</h3>
            <div>
              <input type="checkbox" value='research' name='tag'>
              <label for="research">Research</label>
            </div>
            <div>
              <input type="checkbox" value='design' name='tag'>
              <label for="design">Design</label>
            </div>
            <div>
              <input type="checkbox" value='development' name='tag'>
              <label for="development">Development</label>
            </div>
          </div>
        </div>
      </div>
</template>

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
.filter{

  margin-right: 20px;

}

.filter__sort{
  .column;
  background:@mc2;
  padding:10%;
  .b5;
  margin-bottom:@m;
  h3{
    margin-bottom:@m;
  }
  div{
    margin-bottom:@m1;
  }
}
.filter__options{
  margin-bottom: @m2 !important;
}
</style>
