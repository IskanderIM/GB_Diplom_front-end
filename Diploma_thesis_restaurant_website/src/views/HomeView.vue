<script setup>
import HeaderHomeBlock from "@/components/blocks/HeaderHomeBlock.vue";
import MenuHomeBlock from '@/components/blocks/MenuHomeBlock.vue';
import RecentPostBlogBlock from "@/components/blocks/RecentPostBlogBlock.vue";
import BookingForm from "@/components/BookingForm.vue";
import FooterBlock from "@/components/blocks/FooterBlock.vue";
</script>
<template>
  <section>
    <HeaderHomeBlock />
    <MenuHomeBlock />
    <section class="chef flex justify-center">
      <div class="chef-container flex gap-16 mt-56">
        <img class="basis-7/12" src="@/assets/home/imageChef.png" alt="Chef">
        <article class="chef__text basis-5/12 flex flex-col gap-5">
          <h2 class="chef__text__title">Отличный повар</h2>
          <p class="body-text">Клиент очень важен, за клиентом пойдет клиент. Чистая сеть будет финансировать это. Несчастное желание ультриев теперь является чистым творцом озера.</p>
        </article>
      </div>    
    </section>
    <section class="flex flex-col items-center">
      <section class="features-container flex flex-row gap-[60px] mt-52 mb-48">
        <figure class="basis-4/12 flex flex-col items-center gap-10 text-center">
          <img src="@/assets/icons/circleIcon-premium-quality.svg" alt="">
          <h5>Премиальное качество</h5>
          <figcaption class="body-text">Клиент очень важен, за клиентом пойдет клиент. Ни домашнее задание по луку</figcaption>
        </figure>
        <figure class="basis-4/12 flex flex-col items-center gap-10 text-center">
          <img src="@/assets/icons/circleIcon-seasonal-vegetables.svg" alt="">
          <h5>Сезонные овощи</h5>
          <figcaption class="body-text">Клиент очень важен, за клиентом пойдет клиент. Ни домашнее задание по луку</figcaption>
        </figure>
        <figure class="basis-4/12 flex flex-col items-center gap-10 text-center">
          <img src="@/assets/icons/circleIcon-fresh-fruit.svg" alt="">
          <h5>Свежие фрукты</h5>
          <figcaption class="body-text">Клиент очень важен, за клиентом пойдет клиент. Ни домашнее задание по луку</figcaption>
        </figure>
      </section>
    </section>
    <RecentPostBlogBlock />
    <BookingForm />
    <FooterBlock />
  </section>
</template>
<script>
export default {
  name: 'HomeView'
}
</script>
<style lang="scss" scoped>
  .chef {
    background-image: url('@/assets/home/backgroundChef.svg');
    &-container {
      max-width: 1680px;
    }    
  }
  .features-container {
    max-width: 1680px;
  }
</style>