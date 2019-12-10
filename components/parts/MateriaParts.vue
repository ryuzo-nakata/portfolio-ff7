<template>
  <div class="wrapper">
    <div class="materia" />
    <div class="downlight1" />
    <div class="highlight2" />
    <div class="highlight3" />
    <!-- <div class="shadow" />
    <div class="dropshadow" /> -->
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import PortfolioVueEx from '~/logic/vue/PortfolioVueEx'

@Component({})
export default class MateriaParts extends PortfolioVueEx {}
</script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  background: linear-gradient(135deg, #f7f9fc 0%, #e1e7f0 100%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper {
  width: 20px;
  height: 20px;
  position: relative;
}
.materia {
  width: 20px;
  height: 20px;
  z-index: 0;
  border-radius: 50%;
  background: radial-gradient(
    closest-side at 49% 49%,
    rgba(150, 150, 150, 1) 0%,
    rgba(100, 21, 21, 1) 30%
  );
}
.downlight1 {
  position: absolute;
  top: 10%;
  left: 15%;
  z-index: 1;
  width: 12px;
  height: 12px;
  background: rgba(0, 0, 0, 1);
  border-radius: 50%;
  filter: blur(2px);
  opacity: 0.6;
}
.highlight2 {
  position: absolute;
  top: 20%;
  left: 25%;
  z-index: 1;
  width: 3px;
  height: 1px;
  border-radius: 50%;
  border-top: 0.5px solid #fff;
  transform: rotate(-70deg) scaleX(0.9) scaleY(1.5) skewY(18deg);
  filter: blur(0.6px);
}
.highlight3 {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 18px;
  height: 18px;
  background-color: transparent;
  box-shadow: inset -3px -6px 0 -3px rgba(255, 255, 255, 1);
  border-radius: 50%;
  filter: blur(1px);
  opacity: 0.15;
}

.shadow {
  position: absolute;
  top: 69%;
  left: 64%;
  z-index: 1;
  width: 51px;
  height: 18px;
  border-radius: 50%;
  border-top: 1px solid #211;
  transform: rotate(130deg);
  filter: blur(1px);
}
.dropshadow {
  width: 90px;
  height: 30px;
  position: absolute;
  left: 50%;
  top: 85%;
  z-index: -1;
  transform: translateX(-50%);
  background: radial-gradient(
    farthest-side at center,
    rgba(20, 0, 10, 0.8) 25%,
    rgba(0, 0, 0, 0) 100%
  );
  filter: blur(0.5px);
}
</style>
