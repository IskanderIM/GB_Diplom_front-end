import { defineStore } from 'pinia';
import axios from 'axios';
export const useMenuStore = defineStore('menu', {
  state: () => ({
    menu: [], // Данные меню
    loading: false, // Состояние загрузки
    error: null, // Ошибки при загрузке
  }),
  actions: {
    // Функция для загрузки меню с сервера
    async fetchMenu() {
      this.loading = true; // Начинаем загрузку
      this.error = null; // Сбрасываем ошибки перед новой загрузкой
      try {
        const response = await axios.get('http://localhost:3000/api/menu');
        this.menu = response.data;
      } catch (error) {
        console.error('Ошибка загрузки меню:', error);
        this.error = 'Ошибка загрузки меню';
      } finally {
        this.loading = false; // Окончание загрузки
      }
    },
    // Получаем уникальные случайные блюда
    getRandomDishes() {
      // Функция для получения уникального случайного элемента
      const getRandomUniqueItem = (items, usedItems) => {
        const filteredItems = items.filter(item => !usedItems.includes(item));
        if (filteredItems.length === 0) return null;
        const randomItem = filteredItems[Math.floor(Math.random() * filteredItems.length)];
        usedItems.push(randomItem); // Добавляем выбранный элемент в список использованных
        return randomItem;
      };
      const usedDishes = []; // Массив для хранения выбранных блюд, чтобы избежать дублирования
      // Проверяем наличие разделов в меню
      const hotDishes = this.menu.find(section => section.title === 'Горячие блюда');
      const starters = this.menu.find(section => section.title === 'Закуски');
      const pastriesDrinks = this.menu.find(section => section.title === 'Выпечка и напитки');
      if (!hotDishes || !starters || !pastriesDrinks) {
        console.warn('Некоторые разделы меню отсутствуют');
        return null; // Если не нашли разделы, возвращаем null
      }
      return {
        hotDish1: getRandomUniqueItem(hotDishes.dishes, usedDishes),
        hotDish2: getRandomUniqueItem(hotDishes.dishes, usedDishes),
        starterDish: getRandomUniqueItem(starters.dishes, usedDishes),
        pastryDrinkDish: getRandomUniqueItem(pastriesDrinks.dishes, usedDishes),
      };
    },
  },
});