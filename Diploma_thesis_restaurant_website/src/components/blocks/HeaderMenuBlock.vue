<script setup>
  import NavigationBlock from './NavigationBlock.vue';
</script>
<template>
  <header class="headerHome">
    <NavigationBlock />
    <section class="headerHome__container mb-[273px]">
      <div class="headerHome__headline basis-6/12">
        <div class="headerHome__headline-text">
          <h1 class="header__title">
            Посмотреть наше новое меню
          </h1>
          <h6 class="text-white">
            Самые свежие ингредиенты для вас каждый день
          </h6>
        </div>
      </div>
    </section>
    
  </header>
</template>
<script>
  export default {
    name: 'HeaderMenuBlock'
  }
</script>
<style scoped lang="scss">
  header {
    background-color: #2F3300;
    background-image: url("../../assets/menuView/Image.jpg");
    background-size: cover;
  }
  .header {
    &__title {
      margin-top: 142px;
      margin-bottom: 50px;
    }
  }
  .headerHome {
    min-width: 1680px;
    background-color: #2F3300;
    display: flex;
    flex-direction: column;
    align-items: center;
    & article {
      width: 794px;
    }
    &__container {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      max-width: 1644px;
      justify-content: space-between;
    }
  }
</style>