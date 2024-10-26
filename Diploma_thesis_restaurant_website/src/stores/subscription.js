import { defineStore } from 'pinia';
import axios from 'axios'; // Используем axios для отправки запроса

export const useSubscriptionStore = defineStore('subscription', {
  state: () => ({
    email: null,
  }),
  actions: {
    async subscribe(email) {
      try {
        const response = await axios.post('http://localhost:3000/api/subscribe', { email });
        if (response.status === 200) {
          this.email = email;
          return true;
        }
      } catch (error) {
        console.error('Ошибка подписки:', error);
        throw new Error('Не удалось подписаться.');
      }
    },
  },
});