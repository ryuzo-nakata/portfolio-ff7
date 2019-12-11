<template>
  <v-container>
    <v-row align="center" justify="center">
      <div class="materia-box">
        <div class="character-box ff7-card">
          <command-materia />
          <independent-materia />
          <magic-materia />
          <summon-materia />
          <support-materia />
        </div>
        <div class="message-box ff7-card">
          <command-materia />
        </div>
        <div class="materias-box ff7-card">
          <command-materia />
        </div>
        <div class="status-box ff7-card">
          <command-materia />
        </div>
        <div class="page-box ff7-card">
          <command-materia />
        </div>
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

.character-box {
  position: relative;
  width: 600px;
  height: 150px;
  margin: 6px 0 6px 0;
}
.message-box {
  position: relative;
  z-index: 2;
  width: 386px;
  height: 300px;
  margin: 0px 0px 0px 0px;
  padding: 60px 0px 0px 10px;
  float: left;
}
.materias-box {
  position: relative;
  z-index: 1;
  left: 380px;
  width: 220px;
  height: 300px;
  padding: 60px 0px 0px 15px;
}
.status-box {
  position: relative;
  z-index: 3;
  width: 600px;
  height: 50px;
  top: -300px;
}
.page-box {
  position: relative;
  z-index: 2;
  width: 150px;
  height: 50px;
  top: -506px;
  left: 450px;
}
</style>
