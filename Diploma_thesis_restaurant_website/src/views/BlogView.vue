<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useArticleStore } from '@/stores/articles';
import NavigationBlock from '@/components/blocks/NavigationBlock.vue'; 
import FooterBlock from '@/components/blocks/FooterBlock.vue'; 

const route = useRoute();
const articleStore = useArticleStore();
const newComment = ref('');

// Загружаем статью и комментарии при монтировании компонента
onMounted(async () => {
  await articleStore.fetchArticle(route.params.id); // Загружаем статью по ID
  await articleStore.fetchComments(route.params.id); // Загружаем комментарии для статьи
});

// Функция для добавления нового комментария
const addComment = () => {
  const commentData = {
    username: 'Аноним', // Пример имени пользователя
    content: newComment.value,
  };
  if (newComment.value.trim()) { // Проверка, что комментарий не пустой
    articleStore.addComment(route.params.id, commentData); // Отправляем комментарий
    newComment.value = ''; // Очищаем поле ввода после отправки
  }
};
</script>

<template>
  <div v-if="articleStore.article">
    <header class="header-blog-view">
      <NavigationBlock />
      <section class="header-blog-view__container container_margin">
        <article class="header-blog-view__headline">
          <div class="header-blog-view__headline-text flex flex-col justify-center items-center gap-12">
            <p class="header-blog-view__category text-white text-center">{{ articleStore.article.category }}</p>
            <h1 class="header__title">
              {{ articleStore.article.title }}
            </h1>
            <div class="header-blog-view__meta-data flex items-center justify-center text-white">
              <img :src="articleStore.article.metadata.avatar" alt="">
              <p class="text-white">{{ articleStore.article.metadata.authorFirstName }} {{ articleStore.article.metadata.authorLastName }}</p>
              <ul class="list">
                <li>{{ articleStore.article.metadata.publishedDate }}</li>
                <li>{{ articleStore.article.metadata.publishedTime }}</li>
                <li>{{ articleStore.article.metadata.commentsCount }} комментария</li>
              </ul>
            </div>
          </div>
        </article>
      </section>    
    </header>
    <section class="flex flex-col gap-[106px]">
      <section class="flex flex-col justify-center items-center">
        <div class="blog-view__container container_text w-full">
          <nav aria-label="breadcrumb" class="w-max mt-36 mb-20">
            <ol class="body-text flex w-full flex-wrap items-center rounded-md px-4 py-2">
              <li class="flex cursor-pointer items-center text-neutral-400 transition-colors duration-300 hover:text-slate-800">
                <router-link to="/">Главная</router-link>
                <span class="pointer-events-none mx-2 text-neutral-400">
                  /
                </span>
              </li>
              <li class="flex cursor-pointer items-center text-neutral-400 transition-colors duration-300 hover:text-slate-800">
                <router-link to="/blogs">Блоги</router-link>   
                <span class="pointer-events-none mx-2 text-neutral-400">
                  /
                </span>           
              </li>
              <li class="flex cursor-pointer items-center text-neutral-400 transition-colors duration-300 hover:text-slate-800">
                <router-link :to="articleStore.article.id">{{ articleStore.article.title }}</router-link>          
              </li>
            </ol>
          </nav>
          <h6>{{ articleStore.article.text1 }}</h6>
        </div>      
      </section>
      <section class="flex flex-col justify-center items-center">
        <div class="container_images grid grid-cols-2 gap-x-14">
          <img v-for="(image, index) in articleStore.article.images" :key="index" :src="image" alt="">
        </div>
      </section>
      <section class="flex flex-col justify-center items-center">
        <div class="blog-view__container container_text w-full">
          <p class="body-text">{{ articleStore.article.text2 }}</p>
        </div>      
      </section>
      <section class="flex flex-col justify-center items-center">
        <div class="blog-view__container container_text w-full">
          <ul class="flex gap-[18px]">
            <h6 class="text-black">Теги:</h6>
            <li class="blog-view__tag body-text" v-for="(tag, index) in articleStore.article.tags" :key="index">{{ tag }}</li>
          </ul>          
        </div>    
      </section>
      <section class="flex flex-col justify-center items-center">
        <div class="blog-view__container container_text w-full">
          <div class="author-box flex">
            <img class="author-box__avatar" :src="articleStore.article.metadata.avatar" alt="">
            <div class="author-box__info">
              <h6 class="text-black">{{ articleStore.article.metadata.authorFirstName }} {{ articleStore.article.metadata.authorLastName }}</h6>
              <p class="body-text">{{ articleStore.article.subtitle }}</p>
            </div>
          </div>       
        </div>
        <div class="blog-view__line mb-32"></div>      
      </section>
    </section>
    <!-- Работа с комментариями -->
    <!-- <section>
      <h3>Комментарии</h3>
      <div v-for="comment in articleStore.comments[articleStore.article.id]" :key="comment.createdAt">
        <p><strong>{{ comment.username }}:</strong> {{ comment.content }}</p>
      </div>
      <div class="comment-form">
        <input v-model="newComment" placeholder="Напишите комментарий" />
        <button @click="addComment">Отправить</button>
      </div>
    </section>-->
    <FooterBlock />
  </div>
</template>

<style lang="scss" scoped>
.header-blog-view {
  background-image: url(@/assets/blogsView/thumbnails/thumbnail_three-ideas-for-cooking-goat-meat-at-home.jpg);
  min-width: 1680px;
  background-color: #2F3300;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: auto 100%;
  &__container {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    max-width: 1644px;
    justify-content: space-between;    
  }
  &__headline-text {
    text-align: center;
  }
  &__category {
    width: 203px;
    box-sizing: border-box;
    padding: 10px 40px;
    border: 2px solid #FFFFFF;
    /* category */
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 48px;
    color: #FFFFFF;
  }
  &__meta-data {
    & .list {
      list-style-type: disc;
      display: flex;
      & li {
        margin-left: 32px;
      }
    }
  }
}
.container_margin {
  margin-top: 34px;
  margin-bottom: 117px;
}
.container_text {
  max-width: 1076px;
}
.container_images {
  max-width: 1360px;
}

.blog-view {
  &__container {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;    
    justify-content: center;
  }
  &__tag {
    box-sizing: border-box;
    padding: 10px 20px;
    border: 2px solid #000000;
  }
  &__line {
    width: 1644px;
    border: 2px dashed #000000;
    margin-top: 26px;
  }
}
.author-box {
  width: 100%;
  &__avatar {
    width: 220px;
  }
  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 28px;
  }
}
</style>
