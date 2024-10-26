<script setup>
import { onMounted } from 'vue';
import { useArticleStore } from '@/stores/articles';

const articleStore = useArticleStore();

onMounted(() => {
  articleStore.fetchArticles(); // Загружаем все статьи при монтировании
});

</script>

<template>
  <section>
    <section class="blogs-view mt-32 mb-28">
      <div class="blogs-view__container">
        <div class="flex gap-16">
          <div
            class="blog-card relative flex flex-col w-full gap-16"
            v-for="article in articleStore.articles.slice(-2)" :key="article.id"
          >
            <div class="blog-card__image relative shrink-0 overflow-hidden">
              <p class="blog-card__image__category absolute top-3 right-3 bg-[#5E6600] text-white transition-all text-center">
                {{ article.category }}
              </p>
              <img
                :src="article.mainImage"
                alt="card-image"
                class="h-full w-full object-cover"
              />
            </div>
            <div class="blog-card__text pl-16 pr-16 pb-20 flex flex-col justify-center gap-12">
              <div class="blog-card__text__meta-data flex items-center">
                <img :src="article.metadata.avatar" alt="">
                <p>{{ article.metadata.authorFirstName }} {{ article.metadata.authorLastName }}</p>
                <ul class="list">
                  <li>{{ article.metadata.publishedDate }}</li>
                  <li>{{ article.metadata.publishedTime }}</li>
                  <li>{{ article.metadata.commentsCount }} комментария</li>
                </ul>
              </div>
              <div class="blog-card__text__title-subtitle flex flex-col gap-5">
                <h5 class="blog-card__text__title">
                  {{ article.title }}
                </h5>
                <div class="blog-card__text__line"></div>
                <p class="blog-card__text__subtitle excerpt-text">
                  {{ article.subtitle }}
                </p>
              </div>
              <div>
                <router-link :to="'/article/' + article.id" class="body-text text-slate-800 font-semibold text-sm hover:underline flex items-center">
                  Читать статью <img class="ml-3" src="@/assets/icons/Icon_arrow-right.svg"/>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> 
  </section>
</template>
<script>
export default {
  name: 'RecentPostBlogBlock',

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
<style lang="scss" scoped>
.blogs-view {
  display: flex;
  justify-content: center;  
  &__container {
    display: flex;
    flex-wrap: wrap;
    max-width: 1644px;
    justify-content: center;
  }
}
.blog-card {
  &__image {
    &__category {
      /* category */
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 26px;
      line-height: 48px;
      color: #FFFFFF;
      padding: 7px 68px;
    }
  }
  &__text {
    /* Label */
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.02em;
    color: #5E6600;
    &__meta-data {
      & .list {
        list-style-type: disc;
        display: flex;
        & li {
          margin-left: 32px;
        }
      }
    }
    &__line {
      /* Line */
      border: 2px dashed #000000;
    }
  }
}
.pagination_loading {
  /* Pagination_Loading */
  box-sizing: border-box;
  padding: 10px 40px;
  border: 2px solid #000000;
  margin-top: 62px;
  margin-bottom: 108px;
  &:hover {
    background-color: #000000;
    color: #FFFFFF;
  }
}
</style>

