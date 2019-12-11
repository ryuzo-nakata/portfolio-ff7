<template>
  <v-container>
    <v-row align="center" justify="center">
      <div class="materia-box window-size ff7-card">
        <command-materia />
        <independent-materia />
        <magic-materia />
        <summon-materia />
        <support-materia />
      </div>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import PageBase from '~/logic/vue/PageBase'
import CommandMateria from '~/components/templates/CommandMateria.vue'
import IndependentMateria from '~/components/templates/IndependentMateria.vue'
import MagicMateria from '~/components/templates/MagicMateria.vue'
import SummonMateria from '~/components/templates/SummonMateria.vue'
import SupportMateria from '~/components/templates/SupportMateria.vue'

@Component({
  components: {
    CommandMateria,
    IndependentMateria,
    MagicMateria,
    SummonMateria,
    SupportMateria
  }
})
export default class Materia extends PageBase {}
</script>

<style scoped lang="scss">
.materia-box {
  position: relative;
}

.top-team {
  position: relative;
  top: 30px;
}

.top-menu {
  position: absolute;
  top: 0px;
  right: -100px;
}
</style>
