<script setup>
import { ref } from 'vue';
import { useSubscriptionStore } from '@/stores/subscription'; // Импортируем Pinia store

const subscriptionStore = useSubscriptionStore();
const email = ref('');
const successMessage = ref('');


const submitForm = async () => {
  if (email.value) {
    try {
      await subscriptionStore.subscribe(email.value); // Вызываем метод из Pinia
      successMessage.value = 'Вы успешно подписались на рассылку!';
      email.value = '';
    } catch (error) {
      console.error('Ошибка при подписке:', error);
      successMessage.value = 'Произошла ошибка. Попробуйте еще раз.';
    }
  }
};
</script>
<template>
  <div>
    <h6 class="text-white mb-14">Никогда не пропустите рецепт</h6>
    <form class="subscribe-form" @submit.prevent="submitForm">
      <div>
        <input class="input-email body-text"
          type="email"
          v-model="email"
          placeholder="Адрес электронной почты"
          autocomplete="email"
          required          
        />
      </div>
      <button class="subscribe-form__subscribe-button heading-five" type="submit">Подписаться</button>
    </form>
    <p class="subscribe-form-text mt-4">Присоединяйтесь к нашим подписчикам и получайте лучшие рецепты каждую неделю!</p>
    <p class="subscribe-form-text mt-4" v-if="successMessage">{{ successMessage }}</p>
  </div>
</template>

<script>
export default {
  name: 'SubscribeForm',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style scoped lang="scss">
input {
  outline:none;
}
.subscribe-form {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 28px;
  &__subscribe-button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px 46px 20px 46px;
    /* Inside Auto Layout */
    flex: none;
    order: 1;
    flex-grow: 0;
    /* 5E6600 */
    background: rgb(94, 102, 0);
    &:hover {
      color:#000000;
      border-color:#000000;
      box-shadow: 8px 10px 5px 2px rgba(35, 48, 0, 0.4);
    }
  }
}
.input-email {
  /* Input - Email (Input_Default) */
  width: 491px;
  background-color: rgba(255, 255, 255, 0);
  color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  padding: 30px 40px 30px 40px;
  
  box-sizing: border-box;
  /* FFFFFF */
  border: 2px solid rgb(255, 255, 255);
  &::placeholder {
    color: rgb(255, 255, 255);
  }
  &:focus::placeholder {
    color: #9ca3af;
  }
}
.subscribe-form-text {
  /* Widgets Comments */
  color: rgb(255, 255, 255);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 2%;
  text-align: left;
}
</style>
