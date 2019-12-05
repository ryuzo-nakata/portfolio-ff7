<template>
  <div class="cursor">
    <img src="~/assets/cursor.png" width="35" class="cursor-img" />
    <div class="shadow" />
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import PortfolioVueEx from '~/logic/vue/PortfolioVueEx'

@Component({})
export default class CursorParts extends PortfolioVueEx {}
</script>

<style scoped lang="scss">
.cursor {
  position: relative;
}

.cursor-img {
  position: absolute;
  top: 3px;
  left: -35px;
}

.shadow {
  width: 1px;
  height: 1px;
  top: -25px;
  left: 20px;
  position: absolute;
  opacity: 0.3;
  box-shadow: -51px 50px 2px 1px black, -50px 50px 2px 1px black,
    -49px 50px 2px 1px black, -50px 50px 2px 1px black, -47px 50px 2px 1px black,
    -46px 50px 2px 1px black, -45px 50px 2px 1px black, -44px 50px 2px 1px black,
    -43px 50px 2px 1px black, -42px 50px 2px 1px black, -41px 50px 2px 1px black,
    -40px 50px 2px 1px black, -39px 50px 2px 1px black, -38px 50px 2px 1px black,
    -37px 50px 2px 1px black, -36px 50px 2px 1px black, -35px 50px 2px 1px black,
    -34px 50px 2px 1px black, -33px 50px 2px 1px black, -32px 50px 2px 1px black,
    -31px 50px 2px 1px black, -30px 50px 2px 1px black, -29px 50px 2px 1px black,
    -28px 50px 2px 1px black, -27px 50px 2px 1px black, -26px 50px 2px 1px black,
    -25px 50px 2px 1px black, -24px 50px 2px 1px black, -23px 50px 2px 1px black,
    -22px 50px 2px 1px black, -52px 47px 2px 1px black, -51px 47px 2px 1px black,
    -50px 47px 2px 1px black, -49px 47px 2px 1px black, -48px 47px 2px 1px black,
    -47px 47px 2px 1px black, -46px 47px 2px 1px black, -45px 47px 2px 1px black,
    -44px 47px 2px 1px black, -43px 47px 2px 1px black, -42px 47px 2px 1px black,
    -41px 47px 2px 1px black, -40px 47px 2px 1px black;
}
</style>
