<template>
  <div>
    <p>прокрутка</p>
    <svg width="359.000000" height="2.000000" viewBox="0 0 2 359" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <path id="Line 8" d="M1 0L1 359" stroke="#FFFFFF" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-dasharray="8 8"/>
    </svg>
  </div>
</template>
<style lang="scss" scoped>
  div {
    /* Header_Scroll_Default */
    // display: flex;
    // gap: 9px;
    // left: 0px;
    // align-items: center;
    // transform: rotate(90deg);
    // position: absolute;
    display: flex;
    gap: 9px;
    transform: rotate(90deg);
    flex-wrap: nowrap;
    align-items: center;
    position: absolute;
    top: 1060px;
  }
  p {
    /* Heading 4 */
    font-family: 'Alegreya';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 64px;
    /* identical to box height, or 160% */

    /* FFFFFF */
    color: #FFFFFF;
  }
  svg {
    /* Line 8 */

    // position: absolute;
    // width: 359px;
    // height: 0px;
    // left: 29px;
    // top: 194px;

    /* FFFFFF */
    border: 2px dashed #FFFFFF;
  }
</style>