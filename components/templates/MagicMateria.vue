<template>
  <materia-parts :color="'rgb(43, 100, 21, 1)'" />
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import PortfolioVueEx from '~/logic/vue/PortfolioVueEx'
import MateriaParts from '~/components/parts/MateriaParts.vue'

@Component({
  components: { MateriaParts }
})
export default class MagicMateria extends PortfolioVueEx {}
</script>
