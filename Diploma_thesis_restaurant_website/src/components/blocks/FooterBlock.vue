<script setup>
  import IconFacebook from '../icons/IconFacebook.vue';
  import IconInstagram from '../icons/IconInstagram.vue';
  import IconTwitter from '../icons/IconTwitter.vue';
  import IconYoutube from '../icons/IconYoutube.vue';
  import SubscribeForm from '../SubscribeForm.vue';
</script>
<template>
  <footer class="footer flex flex-col">
    <section class="footer__top flex flex-col items-center mt-40 ">
      <section class="footer__top-section flex justify-between gap-16 mb-40">
        <section class="footer__top-section__logo basis-3/12">
          <router-link to="/">
            <h2 class="footer-logo-text pt-8">Food
            <br>Zero.</h2>
          </router-link>
        </section>
        <section class="footer__top-section__contacts basis-3/12">
          <header class="contacts-footer__title mb-14">
            <h6 class="text-white">контакты</h6>
          </header>
          <footer>
            <div class="contacts-footer mb-7">
              <a class="contacts-footer__text" href="tel:+86852346000">+86 852 346 000</a><br>
              <a class="contacts-footer__text" href="mail:info@foodzero.com">info@foodzero.com</a>
            </div>
            <div class="contacts-footer__address">
              <p class="contacts-footer__text">1959 Бульвар Сепульведа. 
              <br>Калвер-Сити, Калифорния, 90230</p>
            </div>
          </footer>
        </section>
        <section class="footer__top-section__subscribe basis-6/12">
          <SubscribeForm />
        </section>
      </section>      
    </section>
    <div class="flex flex-col items-center mt-16 mb-16">
      <section class="footer__bottom-section flex justify-between">
        <section class="footer__bottom-section__copyright self-start">
          <p class="body-text text-white">© 2020 Zero Inc. Все права защищены</p>
        </section>
        <section class="footer__bottom-section__social-icons mr-6">
          <a href="#" class="navbar-button"><IconInstagram /></a>
          <a href="#" class="navbar-button"><IconTwitter /></a>
          <a href="#" class="navbar-button"><IconFacebook /></a>
          <a href="#" class="navbar-button"><IconYoutube /></a>
        </section>
      </section>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterBlock',

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
  .footer {
    background: rgb(35, 48, 0);
    &__top {      
      border-bottom: 2px dashed rgb(255, 255, 255);
      &-section {
        min-width: 1680px;
        &__contacts {
          & header {
            width: 210px;
          }
          & footer {
            width: 210px;
          }
        }
      }
    }
    &__bottom-section {
      min-width: 1680px;
      &__social-icons {
        display: flex;
        gap: 28px;
        align-items: center;
      }
    }
  }
  .footer-logo-text {
    color: rgb(255, 255, 255);
    font-family: Rufina;
    font-size: 68px;
    font-weight: 700;
    line-height: 84px;
    letter-spacing: 0px;
    text-align: left;
  }
  .contacts-footer {
    &__text {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 25px;
      /* or 139% */
      letter-spacing: 0.02em;
      /* FFFFFF */
      color: #FFFFFF;
    }
  }
</style>