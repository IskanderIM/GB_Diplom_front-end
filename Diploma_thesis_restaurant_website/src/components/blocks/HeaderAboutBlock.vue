<script setup>
  import NavigationBlock from './NavigationBlock.vue';
</script>
<template>
  <header class="header-contact-view">
    <NavigationBlock />
    <section class="header-contact-view__container mb-[273px]">
      <div class="basis-7/12"></div>
      <div class="header-contact-view__headline basis-5/12">
        <div class="header-contact-view__headline-text">
          <h1 class="header__title">
            Кто мы
          </h1>
          <h6 class="text-white">
            Для нас самое главное – обеспечить вам комфортный отдых.
          </h6>
        </div>
      </div>      
    </section>
    
  </header>
</template>
<script>
  export default {
    name: 'HeaderAboutBlock'
  }
</script>
<style scoped lang="scss">
  header {
    background-color: #2F3300;
    background-image: url("../../assets/aboutView/Image.jpg");
    background-size: cover;
  }
  .header {
    &__title {
      margin-top: 184px;
      margin-bottom: 50px;
    }
  }
  .header-contact-view {
    min-width: 1680px;
    background-color: #2F3300;
    display: flex;
    flex-direction: column;
    align-items: center;
    &__container {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      min-width: 1644px;
      justify-content: space-between;
      margin-bottom: 422px;
    }
  }
</style>