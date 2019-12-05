<template>
  <progress :max="max" :value="value" />
</template>

<script lang="ts">
import { Component, PropSync } from 'vue-property-decorator'
import PortfolioVueEx from '~/logic/vue/PortfolioVueEx'

@Component({})
export default class ProgressHpParts extends PortfolioVueEx {
  @PropSync('parentMax', { type: Number }) max: Number
  @PropSync('parentValue', { type: Number }) value: Number
}
</script>

<style scoped lang="scss">
progress {
  width: 70px;
  height: 2px;
  background: #222222;

  &::-webkit-progress-bar {
    background: #222222;
  }
  &::-ms-fill {
    background: linear-gradient(
      to right,
      #66bb6a 20%,
      #7eb880 40%,
      #99b69b 60%,
      #bbc4bc 100%
    );
  }
  &::-webkit-progress-value {
    background: linear-gradient(
      to right,
      #66bb6a 20%,
      #7eb880 40%,
      #99b69b 60%,
      #bbc4bc 100%
    );
    background: -moz-linear-gradient(
      to right,
      #66bb6a 20%,
      #7eb880 40%,
      #99b69b 60%,
      #bbc4bc 100%
    );
    background: -webkit-linear-gradient(
      to right,
      #66bb6a 20%,
      #7eb880 40%,
      #99b69b 60%,
      #bbc4bc 100%
    );
    background: -o-linear-gradient(
      to right,
      #66bb6a 20%,
      #7eb880 40%,
      #99b69b 60%,
      #bbc4bc 100%
    );
  }
}
</style>
