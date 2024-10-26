<script setup>
import HeaderAboutBlock from '@/components/blocks/HeaderAboutBlock.vue';
import BookingForm from "@/components/BookingForm.vue"
import FooterBlock from "@/components/blocks/FooterBlock.vue";
</script>
<template>
  <section>
    <HeaderAboutBlock />
    <section class="about-view our-story-background-image flex flex-col items-center gap-36">
      <div class="about-view__container container-our-story">
        <div class="about-view__section-content grid grid-cols-2 gap-[60px]">
          <div class="about-view__section-content__text our-story-text-box flex flex-col items-start basis-6/12 gap-[18px]">
            <h2>Наша история</h2>
            <p class="body-text">Клиент очень важен, за клиентом пойдет клиент. Чистая сеть будет финансировать это. Несчастное желание ультриев теперь является чистым творцом озера.</p>
          </div>
          <img class="about-view__section-content__image basis-6/12 mb-[60px]" src="@/assets/aboutView/Image1.jpg" alt="Изображение">
        </div>
      </div>
    </section>
    <section class="about-view flex flex-col items-center gap-36 mt-40 mb-72">
      <div class="about-view__container container-top">
        <div class="about-view__section-content grid grid-flow-col grid-rows-3  gap-[60px]">
          <div class="row-span-2 flex flex-col items-center gap-6 mb-14">
            <h4>Старший менеджер</h4>
            <p class="body-text text-black">Карсон Хьюз</p>
            <img class="about-view__section-content__image" src="@/assets/aboutView/Image2.jpg" alt="Изображение">
          </div>
          <div class="comment-chef row-span-1 flex flex-col items-center justify-end w-2/3">
            <p class="body-text">
              Клиент очень важен, за клиентом пойдет 
              клиент. И сейчас игроки играют в детях. 
              <br>Аугайте обитателям слоя, чтобы они 
              <br>родили лекарство, а также мою 
              <br>домашнюю работу.
            </p>
          </div>            
          <div class="row-span-1 flex flex-col items-center justify-center w-2/3">
            <p class="body-text">Клиент очень важен, за клиентом пойдет клиент. И сейчас игроки играют в детях.</p>
          </div>
          <div class="row-span-2 flex flex-col items-center gap-6 mb-14">
            <h4>Шеф-повар</h4>
            <p class="body-text text-black">Джейн Купер</p>
            <img class="about-view__section-content__image" src="@/assets/aboutView/Image3.jpg" alt="Изображение">
          </div>            
        </div>
      </div>
    </section>
    <section class="about-view video-background-image flex flex-col items-center gap-36">
      <div class="about-view__container mt-60 mb-[404px]">
        <div class="about-view__section-content__text flex flex-col items-center gap-5 basis-8/12">
          <h2 class="text-white">Это выглядит вкусно</h2>
          <p class="body-text text-white">Клиент очень важен, за клиентом пойдет клиент.</p>
        </div>
      </div>
    </section>
    <section class="about-view process-background-image flex flex-col items-center gap-36">
      <div class=" mt-[267px]">
          <h2>Сложный процесс</h2>
      </div>
      <div class="about-view__container container-top">        
        <div class="about-view__section-content grid grid-cols-2 gap-[60px]">
          <img class="about-view__section-content__image basis-6/12" src="@/assets/aboutView/Image4.jpg" alt="Изображение">
          <div class="about-view__section-content__text flex flex-col justify-center basis-6/12 gap-10 w-10/12">
            <h3>01. Нарезка</h3>
            <p class="body-text">
              Клиент очень важен, за клиентом пойдет клиент. Чистая сеть будет финансировать это. Несчастное желание ультриев теперь является чистым автором озера. Дети Конваллиса, которые стреляют. Пусть нужда теперь будет в смехе, в носу до поры.
            </p>                            
          </div>
        </div>
      </div>
      <div class="about-view__container container-top mb-[276px]">
        <div class="about-view__section-content grid grid-flow-col grid-rows-3  gap-[60px]">
          <div class="row-span-1 flex flex-col items-start justify-center gap-10 w-10/12 ml-6">
            <h3>03. Выпекать</h3>
            <p class="body-text">Клиент очень важен, за клиентом пойдет клиент. Чистая сеть будет финансировать это.</p>
          </div>
          <div class="row-span-2 flex flex-col items-center gap-6 mb-14">
            <img class="about-view__section-content__image" src="@/assets/aboutView/Image6.jpg" alt="Изображение">
          </div>  
          <div class="row-span-2 flex flex-col items-center gap-6 mb-14">
            <img class="about-view__section-content__image" src="@/assets/aboutView/Image5.jpg" alt="Изображение">
          </div>
          <div class="row-span-1 flex flex-col items-center w-9/12 ml-auto mr-auto mb-0 mt-auto">
            <h3>02. Маринованный</h3>
            <p class="body-text">
              Клиент очень важен, за клиентом пойдет клиент. Чистая сеть будет финансировать это.
            </p>
          </div>            
                    
        </div>
      </div>
    </section>
    <BookingForm />
    <FooterBlock />
  </section>
</template>

<script>
export default {
  name: 'AboutView',

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
.about-view {
  &.our-story-background-image {
    background-image: url(@/assets/aboutView/background-our-story.svg);
  }
  &.video-background-image {
    background-image: url(@/assets/aboutView/background-video.jpg);
    background-size: cover;
  }
  &.process-background-image {
    background-image: url(@/assets/aboutView/background-process.svg);
    background-size: cover;
  }
  
  &__container {
    max-width: 1644px;
    & .comment-chef {
      text-align: end;
      margin: auto 0 0 auto;
    }
  }
  &__container.container-our-story {
    margin-top: 218px;
    margin-bottom: 57px;
  }
  &__container.container-bottom {
    margin-bottom: 186px;
  }
  &__section-content {
    &__text h6 {
      color: #233000;
    }
    &__text .contacted {
        width: 507px;
        margin: auto auto 31px auto;
    }
    &__text.located {
        width: 748px;
        margin: auto 0px 326px auto;
    }
    &__text.our-story-text-box {
        width: 668px;
        margin: auto auto 0px auto;
    }
    &__dishes {
      text-align: left;
    }
    &__dish {
      padding: 0 40px;
    }
  }  
}
</style>