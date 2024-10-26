<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <section>
    <RouterView /> 
  </section> 
</template>

<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&family=Rufina:wght@400;700&display=swap');


html {
  scroll-behavior: smooth;
}
svg path {
  fill:inherit;
  stroke:inherit;
  stroke-width:inherit;
}
h2 {
  /* Heading 1 */
  font-family: 'Alegreya';
  font-style: normal;
  font-weight: 700;
  font-size: 108px;
  line-height: 120px;
  color: #000000;
}
p, figcaption {
  color: #4D4D4D;
}
button {
  transition: all .5s ease;
}
.heading-one {
  /* Heading 1 */
  font-family: 'Alegreya';
  font-style: normal;
  font-weight: 700;
  font-size: 108px;
  line-height: 120px;
  color: #000000;
}
h3 {
  /* Heading 2 */
  font-family: 'Alegreya';
  font-style: normal;
  font-weight: 700;
  font-size: 78px;
  line-height: 120%;
  /* 000000 */
  color: #000000;
}
.heading-two {
  /* Heading 2 */
  font-family: 'Alegreya';
  font-style: normal;
  font-weight: 700;
  font-size: 78px;
  line-height: 120%;
  /* 000000 */
  color: #000000;
}
h4 {
  /* Heading 3 */
  font-family: 'Alegreya';
  font-style: normal;
  font-weight: 700;
  font-size: 57px;
  line-height: 54px;
  color: #000000;
}
.heading-three {
  /* Heading 3 */
  font-family: 'Alegreya';
  font-style: normal;
  font-weight: 700;
  font-size: 57px;
  line-height: 54px;
  color: #000000;
}
h5 {
  /* Heading 4 */
  font-family: 'Alegreya';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 64px;
  // text-align: center;
  color: #000000;
}
.heading-four {
  /* Heading 4 */
  font-family: 'Alegreya';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 64px;
  // text-align: center;
  color: #000000;
}
h6 {
  /* Heading 5 */
  font-family: 'Alegreya';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  /* FFFFFF */
  color: #4D4D4D;
}
.heading-five {
  /* Heading 5 */
  font-family: 'Alegreya';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  /* FFFFFF */
  // color: #FFFFFF;
}
.heading-six {}
/* Header */
.header__title {
  /* Hero Heading */
  font-family: 'Alegreya';
  font-style: normal;
  font-weight: 700;
  font-size: 128px;
  line-height: 120px;
  /* or 94% */

  /* FFFFFF */
  color: #FFFFFF;
}
.header__subtitle {
  /* Body */
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 140%;
  /* or 34px */
  letter-spacing: 0.02em;
  /* FFFFFF */
  color: #FFFFFF;
}
.body-text {
  /* Body */
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 140%;
  /* or 34px */
  letter-spacing: 0.02em;
}
.excerpt-text {
  /* Excerpt */
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 140%;
  /* identical to box height, or 31px */
  letter-spacing: 0.02em;
  /* 4D4D4D */
  color: #4D4D4D;
}
.navbar-button {
  transition: all .5s ease;
  & svg {
    transition: all .5s ease;
  }
}
.navbar-button:hover {
  color: #000000;
  & svg {
    stroke: #000000;
    fill: #000000;
  }
}

</style>
