import { defineStore } from 'pinia';
import axios from 'axios';
export const useArticleStore = defineStore('articleStore', {
  state: () => ({
    articles: [],      // Массив статей
    article: null,     // Текущая статья
    comments: {},      // Комментарии по каждой статье
    page: 1,           // Текущая страница для пагинации
    hasMore: true,     // Флаг для проверки, есть ли еще статьи для загрузки
  }),
  actions: {
    // Загрузка статей с пагинацией
    async fetchArticles() {
      try {
        const response = await axios.get(`http://localhost:3000/api/articles?page=${this.page}`);
        
        if (response.data.length > 0) {
          this.articles.push(...response.data); // Добавляем новые статьи к уже загруженным
          this.page++;
        } else {
          this.hasMore = false; // Если статей больше нет, ставим флаг в false
        }
      } catch (error) {
        console.error('Ошибка загрузки статей:', error);
      }
    },
    // Загрузка статьи по ID
    async fetchArticle(id) {
      try {
        const response = await axios.get(`http://localhost:3000/api/articles/${id}`);
        this.article = response.data;
      } catch (error) {
        console.error('Ошибка загрузки статьи:', error);
      }
    },
    // Загрузка комментариев для статьи
    async fetchComments(articleId) {
      try {
        const response = await axios.get(`http://localhost:3000/api/articles/${articleId}`);
        this.comments[articleId] = response.data.comments;
      } catch (error) {
        console.error('Ошибка загрузки комментариев:', error);
      }
    },
    // Добавление комментария к статье
    async addComment(articleId, comment) {
      try {
        const response = await axios.post(`http://localhost:3000/api/articles/${articleId}/comments`, comment);        
        // Если комментарии уже загружены, добавляем новый комментарий в список
        if (this.comments[articleId]) {
          this.comments[articleId].push(response.data);
        } else {
          this.comments[articleId] = [response.data]; // Если комментариев не было, создаем новый массив
        }
      } catch (error) {
        console.error('Ошибка добавления комментария:', error);
      }
    },
    // Очистка состояния при переходе на новую страницу
    resetState() {
      this.articles = [];
      this.article = null;
      this.comments = {};
      this.page = 1;
      this.hasMore = true;
    }
  },
});