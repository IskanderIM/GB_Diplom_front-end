<script setup>
import { ref, onMounted } from 'vue';
import { useMenuStore } from '@/stores/menuStore'; // Подключаем Pinia Store

// Инициализация Store
const menuStore = useMenuStore();
const randomDishes = ref({});

// Загружаем данные меню и получаем случайные блюда
onMounted(async () => {
  await menuStore.fetchMenu(); // Загружаем данные меню
  randomDishes.value = menuStore.getRandomDishes(); // Получаем уникальные случайные блюда
});
</script>

<template>
  <section class="menu-home-block flex flex-col items-center">
    <div class="menu-home-block__container mt-44 mb-48">
      <div class="flex mb-10">
        <div class="menu-home-block__title basis-3/12 flex flex-col gap-5">
          <h2>Наше меню</h2>
          <p class="body-text">Это раздел вашего меню. Дайте краткое описание вашего раздела</p>
        </div>
        <div class="basis-9/12"></div>    
      </div>    
      <div class="random-dishes basis-full grid grid-cols-2 gap-x-16 gap-y-40">
        <!-- Первое горячее блюдо -->
        <div v-if="randomDishes.hotDish1" class="random-dishes__dish-block flex flex-col gap-6">
          <p class="random-dishes__dish-block__price heading-four">{{ randomDishes.hotDish1.price }} ₽</p>
          <h4>{{ randomDishes.hotDish1.name }}</h4>
          <p class="body-text">{{ randomDishes.hotDish1.description }}</p>
        </div>

        <!-- Второе горячее блюдо -->
        <div v-if="randomDishes.hotDish2" class="random-dishes__dish-block flex flex-col gap-6">
          <p class="random-dishes__dish-block__price heading-four">{{ randomDishes.hotDish2.price }} ₽</p>
          <h4>{{ randomDishes.hotDish2.name }}</h4>
          <p class="body-text">{{ randomDishes.hotDish2.description }}</p>
        </div>
        
        <!-- Закуска -->
        <div v-if="randomDishes.starterDish" class="random-dishes__dish-block flex flex-col gap-6">
          <p class="random-dishes__dish-block__price heading-four">{{ randomDishes.starterDish.price }} ₽</p>
          <h4>{{ randomDishes.starterDish.name }}</h4>
          <p class="body-text">{{ randomDishes.starterDish.description }}</p>
        </div>

        <!-- Выпечка или напиток -->
        <div v-if="randomDishes.pastryDrinkDish" class="random-dishes__dish-block flex flex-col gap-6">
          <p class="random-dishes__dish-block__price heading-four">{{ randomDishes.pastryDrinkDish.price }} ₽</p>
          <h4>{{ randomDishes.pastryDrinkDish.name }}</h4>
          <p class="body-text">{{ randomDishes.pastryDrinkDish.description }}</p>
        </div>
      </div>
    </div>    
  </section>
</template>

<style lang="scss" scoped>
.menu-home-block {
  background-image: url(@/assets/home/imageMenu.png);
  &__container {
    max-width: 1680px;
  }
}

.random-dishes {
  // display: flex;
  // flex-wrap: wrap;
  // justify-content: space-around;
  &__dish-block {
    &__price {
      border-bottom: 4px dashed #000000;
      text-align: right;
    }
  }
}

// .dish-block {
//   width: 300px;
//   border: 1px solid #ddd;
//   padding: 20px;
//   margin: 10px;
//   background-color: #fff;
//   border-radius: 8px;
// }

// .dish-block h3 {
//   font-size: 1.2rem;
//   margin-bottom: 10px;
// }

// .dish-block p {
//   margin: 5px 0;
// }

// .price {
//   font-weight: bold;
//   margin-top: 10px;
// }
</style>