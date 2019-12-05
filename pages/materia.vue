<template>
  <v-container>
    <v-row align="center" justify="center">
      <div class="materia-box window-size ff7-card">
        <materia-parts />
        <materia-parts />
      </div>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import PageBase from '~/logic/vue/PageBase'
import MateriaParts from '~/components/parts/MateriaParts.vue'

@Component({
  components: { MateriaParts }
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
