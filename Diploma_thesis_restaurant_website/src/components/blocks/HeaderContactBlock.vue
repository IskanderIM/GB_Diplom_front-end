<script setup>
  import NavigationBlock from './NavigationBlock.vue';
</script>
<template>
  <header class="header-contact-view">
    <NavigationBlock />
    <section class="header-contact-view__container mb-[273px]">
      <div class="header-contact-view__headline basis-7/12">
        <div class="header-contact-view__headline-text mb-52">
          <h1 class="header__title">
            Свяжитесь с нами
          </h1>
          <h6 class="text-white">
            Самые свежие ингредиенты для вас каждый день
          </h6>
        </div>
      </div>
      <div class="header-contact-view__open-time basis-5/12">
        <div class="header-contact-view__open-time__header flex items-center justify-between">
          <h6 class="text-white">Время работы</h6>
          <p class="body-text text-white">Воскресенье - Пятница</p>
        </div>
        <div class="header-contact-view__open-time__line"></div>
        <div class="flex justify-between">
          <div>
            <p class="body-text text-white">Бранч</p>
            <p class="body-text text-white">11:00–12:00</p>
          </div>
          <div>
            <p class="body-text text-white">Обед</p>
            <p class="body-text text-white">13:00–17:00</p>
          </div>
          <div>
            <p class="body-text text-white">Ужин</p>
            <p class="body-text text-white">18:00–20:00</p>
          </div>
        </div>
      </div>
    </section>
    
  </header>
</template>
<script>
  export default {
    name: 'HeaderContactBlock'
  }
</script>
<style scoped lang="scss">
  header {
    background-color: #2F3300;
    background-image: url("../../assets/contactView/Image.jpg");
    background-size: cover;
  }
  .header {
    &__title {
      margin-top: 142px;
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
      max-width: 1644px;
      justify-content: space-between;
      margin-bottom: 130px;
    }
    &__open-time {
      display: flex;
      flex-direction: column;
      margin-top: auto;
      margin-bottom: 0;
      gap: 38px;
      &__line {
        border-bottom: 2px dashed #FFFFFF;
      }
    }
  }
</style>