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
      #3957bb 20%,
      #6075b8 40%,
      #8591b9 60%,
      #abafbd 100%
    );
  }
  &::-webkit-progress-value {
    background: linear-gradient(
      to right,
      #3957bb 20%,
      #6075b8 40%,
      #8591b9 60%,
      #abafbd 100%
    );
    background: -moz-linear-gradient(
      to right,
      #3957bb 20%,
      #6075b8 40%,
      #8591b9 60%,
      #abafbd 100%
    );
    background: -webkit-linear-gradient(
      to right,
      #3957bb 20%,
      #6075b8 40%,
      #8591b9 60%,
      #abafbd 100%
    );
    background: -o-linear-gradient(
      to right,
      #3957bb 20%,
      #6075b8 40%,
      #8591b9 60%,
      #abafbd 100%
    );
  }
}
</style>
