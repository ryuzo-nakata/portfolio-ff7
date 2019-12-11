<template>
  <materia-parts :color="'rgba(100, 95, 21, 1)'" />
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import PortfolioVueEx from '~/logic/vue/PortfolioVueEx'
import MateriaParts from '~/components/parts/MateriaParts.vue'

@Component({
  components: { MateriaParts }
})
export default class CommandMateria extends PortfolioVueEx {}
</script>
