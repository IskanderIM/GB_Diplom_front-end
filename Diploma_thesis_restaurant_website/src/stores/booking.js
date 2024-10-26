import { defineStore } from 'pinia';
import axios from 'axios';

export const useBookingStore = defineStore('booking', {
  actions: {
    async bookTable(bookingDetails) {
      try {
        const response = await axios.post('http://localhost:3000/api/book', bookingDetails);
        if (response.status === 200) {
          return response.data;
        }
      } catch (error) {
        console.error('Ошибка бронирования:', error);
        throw new Error('Ошибка при бронировании.');
      }
    },
  },
});