<template>
  <v-container>
    <v-row align="center" justify="center">
      <div class="materia-box">
        <div class="character-box ff7-card">
          <v-row align="center">
            <v-col cols="2">
              <v-row justify="center">
                <img :src="$store.state.players[0].image" width="75" />
              </v-row>
            </v-col>
            <v-col cols="3">
              {{ $store.state.players[0].name }}{{ $store.state.level }}
              <v-row>
                <span class="status-item">LV</span>
                <span class="level-margin status-content">
                  {{ $store.state.players[0].level }}
                </span>
              </v-row>
              <v-row>
                <span class="status-item">HP</span>
                <span class="status-content">
                  <span>
                    {{ $store.state.players[0].hp }}/{{
                      $store.state.players[0].maxHp
                    }}
                    <div class="progress-linear">
                      <progress-hp-parts
                        :parent-max.sync="$store.state.players[0].maxHp"
                        :parent-value.sync="$store.state.players[0].hp"
                      />
                    </div>
                  </span>
                </span>
              </v-row>
              <v-row>
                <span class="status-item">MP</span>
                <span class="status-content">
                  <span class="mp-margin">
                    {{ $store.state.players[0].mp }}/
                  </span>
                  <span class="mp-margin">
                    {{ $store.state.players[0].maxMp }}
                  </span>
                  <div class="progress-linear">
                    <progress-mp-parts
                      :parent-max.sync="$store.state.players[0].maxMp"
                      :parent-value.sync="$store.state.players[0].mp"
                    />
                  </div>
                </span>
              </v-row>
            </v-col>
          </v-row>
        </div>
        <div class="message-box ff7-card">
          <command-materia />
        </div>
        <div class="materias-box ff7-card">
          <command-materia />
          <independent-materia />
          <magic-materia />
          <summon-materia />
          <support-materia />
        </div>
        <div class="status-box ff7-card">
          Vue.jsのフレームワークを使えます。
        </div>
        <div class="page-box ff7-card">
          マテリア
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
import ProgressParts from '~/components/parts/ProgressParts.vue'
import ProgressHpParts from '~/components/parts/ProgressHpParts.vue'
import ProgressMpParts from '~/components/parts/ProgressMpParts.vue'

@Component({
  components: {
    CommandMateria,
    IndependentMateria,
    MagicMateria,
    SummonMateria,
    SupportMateria,
    ProgressParts,
    ProgressHpParts,
    ProgressMpParts
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
  display: flex;
  align-items: center;
}
.page-box {
  position: relative;
  z-index: 2;
  width: 150px;
  height: 40px;
  top: -506px;
  left: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.progress-linear {
  margin: -15px 0px 0px 0px;
}

.status-item {
  color: #00ddd6;
  margin-right: 10px;
  font-size: 100%;
}
.status-content {
  font-size: 80%;
}
.level-margin {
  margin-top: 3px;
  margin-left: 18px;
}
.mp-margin {
  margin-left: 6px;
}

.next-level {
  font-size: 60%;
}
.next-level-margin {
  margin-left: 15px;
  margin-right: 0px;
}

.limit {
  font-size: 60%;
}
.limit-margin {
  margin-left: 15px;
  margin-right: 0px;
}
</style>
