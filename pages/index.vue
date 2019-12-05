<template>
  <v-container>
    <v-row align="center" justify="center">
      <div class="top-team-box">
        <top-team class="top-team" />
        <top-menu class="top-menu" />
      </div>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import PageBase from '~/logic/vue/PageBase'
import TopTeam from '~/components/templates/TopTeam.vue'
import TopMenu from '~/components/templates/TopMenu.vue'

@Component({
  components: {
    TopTeam,
    TopMenu
  }
})
export default class Index extends PageBase {}
</script>

<style scoped lang="scss">
.top-team-box {
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
