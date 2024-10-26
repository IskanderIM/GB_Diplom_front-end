<script setup>
import HeaderContactBlock from '@/components/blocks/HeaderContactBlock.vue';
import BookingForm from "@/components/BookingForm.vue"
import FooterBlock from "@/components/blocks/FooterBlock.vue";
</script>
<template>
  <section>
    <HeaderContactBlock />
    <section class="contact-view flex flex-col items-center gap-36">
      <div class="contact-view__container container-top">
        <div class="contact-view__section-content grid grid-cols-2 gap-[60px]">
          <img class="contact-view__section-content__image basis-6/12" src="@/assets/contactView/Image1.jpg" alt="Изображение">
          <div class="contact-view__section-content__text flex basis-6/12">
            <h6 class="contacted">
            С нами можно связаться через 
            электронная почта info@foodzero.com 
            или по телефону +86 852 346 000
            </h6>                            
          </div>
        </div>
      </div>
      <div class="contact-view__container container-bottom">
        <div class="contact-view__section-content grid grid-cols-2 gap-[60px]">
          <div class="contact-view__section-content__text located flex flex-col items-start basis-6/12 gap-[53px]">
            <h6>Мы находимся по адресу бульвар Сепульведа, 1959. Калвер-Сити, Калифорния, 90230</h6>
            <button class="contact-view__section-content__text-button heading-five text-black">Посмотреть на картах</button>
          </div>
          <img class="contact-view__section-content__image basis-6/12" src="@/assets/contactView/Image2.jpg" alt="Изображение">
        </div>
      </div>
    </section>
    <BookingForm />
    <FooterBlock />
  </section>
</template>

<script>
export default {
  name: 'ContactView',

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
.contact-view {
  background-image: url(@/assets/contactView/background-image.svg);
  &__container {
    max-width: 1644px;
  }
  &__container.container-top {
    margin-top: 272px;
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
    &__text-button {
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
    &__dishes {
      text-align: left;
    }
    &__dish {
      padding: 0 40px;
    }
  }  
}
</style>