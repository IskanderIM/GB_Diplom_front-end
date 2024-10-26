<template>
  <article class="contacts-widget">
    <header class="contacts-widget__title">
      <h6 class="text-white">контакты</h6>
    </header>
    <div class="contacts-widget__contacts">
      <a class="contacts-widget__text" href="tel:+86852346000">+86 852 346 000</a><br>
      <a class="contacts-widget__text" href="mail:info@foodzero.com">info@foodzero.com</a>
    </div>
    <div class="contacts-widget__address">
      <p class="contacts-widget__text">1959 Бульвар Сепульведа. 
      <br>Калвер-Сити, Калифорния, 90230</p>
    </div>
    <footer class="contacts-widget__social-icons">
      <a href="#" class="navbar-button"><IconInstagram /></a>
      <a href="#" class="navbar-button"><IconTwitter /></a>
      <a href="#" class="navbar-button"><IconFacebook /></a>
      <a href="#" class="navbar-button"><IconYoutube /></a>
    </footer>
  </article>
</template>

<script>
import IconFacebook from './icons/IconFacebook.vue';
import IconInstagram from './icons/IconInstagram.vue';
import IconTwitter from './icons/IconTwitter.vue';
import IconYoutube from './icons/IconYoutube.vue';

export default {
  components: { IconInstagram, IconTwitter, IconFacebook, IconYoutube },
  name: 'ContactsWidget',

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
  svg path {
    fill:inherit;
    stroke:inherit;
    stroke-width:inherit;
  }
  .contacts-widget {
    display: flex;
    flex-direction: column;
    width: 297px;
    gap: 38px;
    &__title {
      border-bottom: 4px dashed rgb(255, 255, 255);
      padding: 8px 0;
    }
    &__text {
      /* Widgets Text */
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
    &__social-icons {
      display: flex;
      gap: 18px;
      align-items: center;
    }
  }

</style>