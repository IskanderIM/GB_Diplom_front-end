<template>
  <div>
    <img class="spices1" src='@/assets/headerHome/spices1.png' alt="">
    <img class="spices2" src='@/assets/headerHome/spices2.png' alt="">
    <img class="spices3" src='@/assets/headerHome/spices3.png' alt="">
  </div>
</template>
<style lang="scss" scoped>
div {
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 44px;

  position: absolute;
  width: 854px;
  height: 240px;
  left: 644px;
  top: 1165px;
}
.spices1 {
  /* spices1 */
  width: 250px;
  height: 240px;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}
.spices2 {
  /* spices1 */
  width: 250px;
  height: 240px;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
}
.spices3 {
  /* spices1 */
  width: 250px;
  height: 240px;
  /* Inside auto layout */
  flex: none;
  order: 2;
  flex-grow: 0;
}
</style>