<script setup>
  import NavigationBlock from './NavigationBlock.vue';
</script>
<template>
  <header class="headerHome">
    <NavigationBlock />
    <section class="headerHome__container">
      <article class="headerHome__headline">
        <div class="headerHome__headline-text">
          <h1 class="header__title">
            Список блогов
          </h1>
          <p class="body-text text-white">
            Это простой способ создать свой блаженный блог на каждый день.
          </p>
        </div>
      </article>
    </section>    
  </header>
</template>
<script>
  export default {
    name: 'HeaderBlogsBlock'
  }
</script>
<style scoped lang="scss">
  header {
    background-color: #2F3300;
    background-image: url("../../assets/blogsView/Image.jpg");
    background-size: cover;
  }
  .header {
    &__title {      
      margin-bottom: 50px;
    }
  }
  .headerHome {
    min-width: 1680px;
    background-color: #2F3300;
    display: flex;
    flex-direction: column;
    align-items: center;
    &__container {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      max-width: 1644px;
      justify-content: space-between;
      margin-top: 160px;
      margin-bottom: 280px;
    }
    &__headline-text {
      text-align: center;
    }
  }
</style>