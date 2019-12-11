<template>
  <materia-parts :color="'rgba(32, 33, 100, 1)'" />
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import PortfolioVueEx from '~/logic/vue/PortfolioVueEx'
import MateriaParts from '~/components/parts/MateriaParts.vue'

@Component({
  components: { MateriaParts }
})
export default class SupportMateria extends PortfolioVueEx {}
</script>
