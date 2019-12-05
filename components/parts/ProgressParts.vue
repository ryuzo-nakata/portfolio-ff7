<template>
  <progress :max="max" :value="value" />
</template>

<script lang="ts">
import { Component, PropSync } from 'vue-property-decorator'
import PortfolioVueEx from '~/logic/vue/PortfolioVueEx'

@Component({})
export default class ProgressParts extends PortfolioVueEx {
  @PropSync('parentMax', { type: Number }) max: Number
  @PropSync('parentValue', { type: Number }) value: Number
}
</script>

<style scoped lang="scss">
progress {
  border: 2px solid;
  height: 12px;
  background: linear-gradient(
    to bottom,
    rgb(46, 46, 46) 20%,
    rgb(116, 116, 116) 40%,
    rgb(116, 116, 116) 100%
  );

  &::-webkit-progress-bar {
    background: linear-gradient(
      to bottom,
      rgb(46, 46, 46) 20%,
      rgb(116, 116, 116) 40%,
      rgb(116, 116, 116) 100%
    );
    background: -moz-linear-gradient(
      to bottom,
      rgb(46, 46, 46) 20%,
      rgb(116, 116, 116) 40%,
      rgb(116, 116, 116) 100%
    );
    background: -webkit-linear-gradient(
      to bottom,
      rgb(46, 46, 46) 20%,
      rgb(116, 116, 116) 40%,
      rgb(116, 116, 116) 100%
    );
    background: -o-linear-gradient(
      to bottom,
      rgb(46, 46, 46) 20%,
      rgb(116, 116, 116) 40%,
      rgb(116, 116, 116) 100%
    );
  }
  &::-ms-fill {
    background: linear-gradient(
      to bottom,
      rgb(158, 112, 138) 20%,
      rgb(255, 255, 255) 40%,
      rgb(229, 164, 201) 60%,
      rgb(229, 164, 201) 100%
    );
  }
  &::-webkit-progress-value {
    background: linear-gradient(
      to bottom,
      rgb(158, 112, 138) 20%,
      rgb(255, 255, 255) 40%,
      rgb(229, 164, 201) 60%,
      rgb(229, 164, 201) 100%
    );
    background: -moz-linear-gradient(
      to bottom,
      rgb(158, 112, 138) 20%,
      rgb(255, 255, 255) 40%,
      rgb(229, 164, 201) 60%,
      rgb(229, 164, 201) 100%
    );
    background: -webkit-linear-gradient(
      to bottom,
      rgb(158, 112, 138) 20%,
      rgb(255, 255, 255) 40%,
      rgb(229, 164, 201) 60%,
      rgb(229, 164, 201) 100%
    );
    background: -o-linear-gradient(
      to bottom,
      rgb(158, 112, 138) 20%,
      rgb(255, 255, 255) 40%,
      rgb(229, 164, 201) 60%,
      rgb(229, 164, 201) 100%
    );
  }
}
</style>
