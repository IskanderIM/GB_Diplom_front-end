<script setup>
import { onMounted } from 'vue';
import { useMenuStore } from '@/stores/menuStore'; // Подключаем Pinia Store
import HeaderMenuBlock from '@/components/blocks/HeaderMenuBlock.vue';
import BookingForm from '@/components/BookingForm.vue';
import FooterBlock from "@/components/blocks/FooterBlock.vue";

// Инициализация Store
const menuStore = useMenuStore();

onMounted(async () => {
  await menuStore.fetchMenu(); // Загружаем данные меню
});
</script>
<template>
  <HeaderMenuBlock />
  <section class="menu-view flex flex-col items-center">
    <div class="menu-view__container">
      <!-- Отображаем сообщение о загрузке -->
      <div v-if="menuStore.loading">Загрузка меню...</div>      
      <!-- Обрабатываем ошибки -->
      <div v-if="menuStore.error">{{ menuStore.error }}</div>
      <!-- Рендерим разделы меню -->
      <div v-for="section in menuStore.menu" :key="section.id" class="menu-view__menu-section" :style="{ backgroundImage: `url(${section.backgroundImage})` }">
        <div class="menu-view__section-header">
          <h2>{{ section.title }}</h2>
          <p class="body-text mt-4">{{ section.subtitle }}</p>
        </div>
        <div class="menu-view__section-content flex flex-row mt-16 gap-[60px]" :class="getClass(section.id)">
          <img :src="section.imageBig" alt="Изображение раздела" class="menu-view__section-content__image basis-6/12">
          <!-- Список блюд -->
          <div class="menu-view__section-content__dishes flex flex-col gap-14 basis-6/12">
            <div v-for="dish in section.dishes" :key="dish.id" class="menu-view__section-content__dish flex flex-col gap-6">
              <p class="menu-view__section-content__dish-price heading-four">{{ dish.price }} ₽</p>
              <h4>{{ dish.name }}</h4>
              <p class="body-text">{{ dish.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <BookingForm />
  <FooterBlock />
</template>

<script>
export default {
  name: 'MenuView',
  methods: {
    getClass(id) {
      return id % 2 === 0 ? 'flex-row-reverse' : '';
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-view {
  padding: 20px;
  &__container {
    max-width: 1680px;
  }
  &__menu-title {
    text-align: center;
    margin-bottom: 40px;
  }
  &__menu-section {
    margin-top: 120px;
    margin-bottom: 140px;
    background-size: cover;
    background-position: top;
  }
  &__section-header {
    text-align: center;
  }
  &__section-content {
    &__image {
      width: 100%;
      max-width: 792px;
    }
    &__dishes {
      text-align: left;
    }
    &__dish {
      padding: 0 40px;
    }
    &__dish-price {
      border-bottom: 4px dashed #000000;
      text-align: right;
    }
  }  
}
</style>
