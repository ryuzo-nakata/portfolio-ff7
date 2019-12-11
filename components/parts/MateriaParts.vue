<template>
  <div class="wrapper">
    <div class="materia" :style="{ background: color }" />
    <div class="downlight1" />
    <div class="highlight2" />
    <div class="highlight3" />
    <div class="highlight4" />
  </div>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import PortfolioVueEx from '~/logic/vue/PortfolioVueEx'

@Component({})
export default class MateriaParts extends PortfolioVueEx {
  @Prop()
  color: string
}
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
  background: rgb(43, 100, 21, 1);
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
.highlight4 {
  position: absolute;
  top: 40%;
  left: 40%;
  width: 4px;
  height: 4px;
  z-index: 0;
  border-radius: 50%;
  background: rgba(200, 200, 200, 1);
  filter: blur(1px);
}
</style>
