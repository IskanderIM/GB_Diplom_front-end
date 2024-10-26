<template>
  <div class="navbar">
    <div class="navbar__left">
      <router-link to="/">
        <img src="../../assets/Logo.svg" alt="FoodZero">
      </router-link>
      <button @click="toggleMenu" class="navbar-button navbar-button__menu text-white p-2">
        <ButtonNavOpen />
      </button>
    </div>
    <div class="navbar__right">
      <a class="navbar__right__tel navbar-button" href="tel:+86852346000">+86 852 346 000</a>
      <a href="#booking-form" class="navbar-button navbar-button__booking heading-five text-white">
        Бронирование
      </a>
    </div>
  </div>
  <transition name="fade">
    <div v-if="isMenuOpen" 
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" 
    @click="closeMenu">
      <div class="navbar-menu rounded" @click.stop>   
        <div class="navbar-menu__left">
          <button @click="closeMenu" class="navbar-menu__close mt-4 text-white p-2">              
            <button-nav-close />
          </button>
          <ul class="nav-items list-disc pl-10">
            <li class="nav-item navbar-button"><RouterLink to="/">дом</RouterLink></li>
            <li class="nav-item navbar-button"><RouterLink to="/menu">меню</RouterLink></li>
            <li class="nav-item navbar-button"><RouterLink to="/blogs">блоги</RouterLink></li>
            <li class="nav-item navbar-button"><RouterLink to="/about">о нас</RouterLink></li>
            <li class="nav-item navbar-button"><RouterLink to="/contact">контакты</RouterLink></li>
          </ul>            
        </div>
        <div class="navbar-menu__right">
          <contacts-widget />
        </div>
      </div>
      <img class="navbar-menu__background-image" src="@/assets/menu/NavigationFullscreenCover.jpg" alt="">
    </div>
  </transition>
</template>
<script>
import ButtonNavClose from '../buttons/ButtonNavClose.vue';
import ButtonNavOpen from '../buttons/ButtonNavOpen.vue';
import ContactsWidget from '../ContactsWidget.vue';

export default {
  components: { ButtonNavClose, ButtonNavOpen, ContactsWidget },
  name: 'NavigationBlock',
  data() {
    return {
      isMenuOpen: false,
      isBookingOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
    toggleBooking() {
      this.isBookingOpen = !this.isBookingOpen;
    },
    closeBooking() {
      this.isBookingOpen = false;
    }
  }
}
</script>
<style scoped lang="scss">
  html {
    scroll-behavior: smooth;
  }
  svg path {
    fill:inherit;
    stroke:inherit;
    stroke-width:inherit;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .navbar {
    min-width: 1680px;
    display: flex;
    justify-content: space-between;
    margin: 46px 0;
    align-items: center;
    &__left {
      display: flex;
    }
    &__right {
      display: flex;
      align-items: center;
      gap: 30px;
      &__tel {
        color: rgb(255, 255, 255);
        font-family: Roboto;
        font-size: 26px;
        font-weight: 400;
        line-height: 30px;
        letter-spacing: 0px;
        text-align: left;
      }
    }
  }
  .navbar-button {
    transition: all .5s ease;
    & svg {
      transition: all .5s ease;
    }
    &__booking {
      /* Border */
      width: 301px;
      height: 88px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 10;
      padding: 20px 46px 20px 46px;
      box-sizing: border-box;
      border: 2px solid rgb(255, 255, 255);
    }
  }
  .navbar-button:hover {
    color: #000000;
    & svg {
      stroke: #000000;
    }
  }
  .navbar-button__booking:hover {
      border-color:#000000;
      box-shadow: 8px 10px 5px 2px rgba(35, 48, 0, 0.4);
  }
  .navbar-menu {
    display: flex;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 2;
    justify-content: space-around;
    flex-direction: row;
    &__left {
      margin-top: 222px;
    }
    &__right {
      margin-top: 556px;
    }
    &__background-image {
      position: absolute;
      width: 100%;
      top: 0;
      z-index: 1;
    }
    &__close {
      position: absolute;
      left: 46px;
      top: 34px;
    }
  }
  .nav-items {
    /* Nav Items */
    width: 370px;
    height: 682px;
    left: 300px;
    top: 222px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 28px;
    padding: 0px;
    list-style-type: disc;    
  }
  .nav-item {
    /* NavItem */
    display: list-item;
    font-family: 'Alegreya';
    font-style: normal;
    font-weight: 700;
    font-size: 66px;
    line-height: 90px;
    text-transform: uppercase;
    color: #FFFFFF;
    &::marker {
      font-size: 35px;
      margin-right: 10px;
    }
    &:hover {
      color:#9CAA00;
    }
  }
</style>