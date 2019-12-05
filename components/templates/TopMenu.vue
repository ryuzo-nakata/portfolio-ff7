<template>
  <section>
    <v-container class="top-menu-list ff7-card">
      <v-row
        v-for="(item, index) in topMenuItems"
        :key="index"
        no-gutters
        @mouseleave="menuMouseleave(index)"
        @mouseover="menuMouseover(index)"
      >
        <v-col cols="12">
          <cursor-parts v-if="menuChoice == index" />
          <nuxt-link
            v-if="item.display == true"
            :to="item.path"
            class="top-menu-item"
          >
            {{ item.name }}
          </nuxt-link>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import PortfolioVueEx from '~/logic/vue/PortfolioVueEx'
import CursorParts from '~/components/parts/CursorParts.vue'

@Component({
  components: { CursorParts }
})
export default class TopMenu extends PortfolioVueEx {
  menuChoice: number = -1
  topMenuItems: {
    name: string
    path: string
    display: boolean
  }[] = [
    {
      name: 'アイテム',
      path: '/',
      display: true
    },
    {
      name: 'まほう',
      path: '/',
      display: true
    },
    {
      name: 'マテリア',
      path: 'materia',
      display: true
    },
    {
      name: 'そうび',
      path: '/',
      display: true
    },
    {
      name: 'ステータス',
      path: '/',
      display: true
    },
    {
      name: 'たいけい',
      path: '/',
      display: true
    },
    {
      name: 'リミット',
      path: '/',
      display: true
    },
    {
      name: 'コンフィグ',
      path: '/',
      display: true
    },
    {
      name: 'PHS',
      path: '/',
      display: true
    },
    {
      name: 'セーブ',
      path: '/',
      display: true
    }
  ]

  menuMouseover(i: number) {
    this.menuChoice = i
  }
  menuMouseleave() {
    this.menuChoice = -1
  }
}
</script>

<style scoped lang="scss">
.top-menu-item {
  margin: 10px;
}

.top-menu-list {
  text-align: left;
  width: 143px;
}

a:link {
  text-decoration: none;
  color: white;
}

a:visited {
  text-decoration: none;
  color: white;
}
</style>
