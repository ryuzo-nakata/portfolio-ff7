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
            <v-col cols="7">
              <v-row>
                <span class="attack-margin">
                  <span class="status-item">武器:</span>
                  <span>ノートPC</span>
                </span>
              </v-row>
              <v-row class="equipment-margin">
                <div
                  v-for="(item, index) in attackMaterias"
                  :key="index"
                  no-gutters
                  class="equipment"
                  @mouseleave="menuMouseleave(index)"
                  @mouseover="menuMouseover(item, index)"
                >
                  <cursor-parts v-if="menuChoice == index" />
                  <command-materia v-if="item.type == 1" class="content" />
                  <independent-materia
                    v-else-if="item.type == 2"
                    class="content"
                  />
                  <magic-materia v-else-if="item.type == 3" class="content" />
                  <summon-materia v-else-if="item.type == 4" class="content" />
                  <support-materia v-else-if="item.type == 5" class="content" />
                  <div v-if="item.type !== 0" class="highlight4" />
                </div>
              </v-row>
              <v-row>
                <span class="defence-margin">
                  <span class="status-item">防具:</span>
                  <span>お供のコーヒー</span>
                </span>
              </v-row>
              <v-row class="equipment-margin">
                <div
                  v-for="(item, index) in defenceMaterias"
                  :key="index"
                  no-gutters
                  class="equipment"
                  @mouseleave="menuMouseleave(index + 8)"
                  @mouseover="menuMouseover(item, index + 8)"
                >
                  <cursor-parts v-if="menuChoice == index + 8" />
                  <command-materia v-if="item.type == 1" class="content" />
                  <independent-materia
                    v-else-if="item.type == 2"
                    class="content"
                  />
                  <magic-materia v-else-if="item.type == 3" class="content" />
                  <summon-materia v-else-if="item.type == 4" class="content" />
                  <support-materia v-else-if="item.type == 5" class="content" />
                  <div v-if="item.type !== 0" class="highlight4" />
                </div>
              </v-row>
            </v-col>
          </v-row>
        </div>
        <div class="message-box ff7-card">
          <v-row v-if="selectedMateria !== ''">
            <command-materia v-if="selectedMateria.type == 1" class="content" />
            <independent-materia
              v-else-if="selectedMateria.type == 2"
              class="content"
            />
            <magic-materia
              v-else-if="selectedMateria.type == 3"
              class="content"
            />
            <summon-materia
              v-else-if="selectedMateria.type == 4"
              class="content"
            />
            <support-materia
              v-else-if="selectedMateria.type == 5"
              class="content"
            />
            {{ selectedMateria.name }}
          </v-row>
        </div>
        <div class="materias-box ff7-card"></div>
        <div class="status-box ff7-card">
          {{ description }}
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
import CursorParts from '~/components/parts/CursorParts.vue'

@Component({
  components: {
    CommandMateria,
    IndependentMateria,
    MagicMateria,
    SummonMateria,
    SupportMateria,
    ProgressParts,
    ProgressHpParts,
    ProgressMpParts,
    CursorParts
  }
})
export default class Materia extends PageBase {
  selectedMateria: any = ''
  description!: string
  details!: string
  menuChoice: number = -1
  attackMaterias: {
    name: string
    description: string
    details: string
    type: number
  }[] = [
    {
      name: 'Golang',
      description: 'Golang を使えます。',
      details: '',
      type: 3
    },
    {
      name: 'Solidity(Ethereum)',
      description: 'Solidity(Ethereum) を使えます。',
      details: '',
      type: 3
    },
    {
      name: 'Python',
      description: 'Python を使えます。',
      details: '',
      type: 3
    },
    {
      name: 'C言語',
      description: 'C言語を使えます。',
      details: '',
      type: 3
    },
    {
      name: 'Java',
      description: 'Java を使えます。',
      details: '',
      type: 3
    },
    {
      name: 'Mysql',
      description: 'Mysqlを使えます。',
      details: '',
      type: 3
    },
    {
      name: 'Typescript',
      description: 'Typescriptを使えます。',
      details: '',
      type: 1
    },
    {
      name: 'SCSS',
      description: 'SCSS を使えます。',
      details: '',
      type: 1
    }
  ]
  defenceMaterias: {
    name: string
    description: string
    details: string
    type: number
  }[] = [
    {
      name: 'AWS',
      description: 'Amazon Web Services を使えます。',
      details: '',
      type: 4
    },
    {
      name: 'Kubernetes',
      description: 'Kubernetesを使えます。',
      details: '',
      type: 4
    },
    {
      name: 'SpringBoot',
      description: 'SpringBoot のフレームワークを使えます。',
      details: '',
      type: 2
    },
    {
      name: 'Vue.js',
      description: 'Vue.js のフレームワークを使えます。',
      details: '',
      type: 2
    },
    {
      name: 'Nuxt.js',
      description: 'Nuxt.js のフレームワークを使えます。',
      details: '',
      type: 2
    },
    {
      name: 'Vuetify',
      description: 'Vuetify のフレームワークを使えます。',
      details: '',
      type: 2
    },
    {
      name: 'GitHub',
      description: 'GitHubを使えます。',
      details: '',
      type: 5
    },
    {
      name: 'Unity',
      description: 'Unity を使えます。',
      details: '',
      type: 5
    }
  ]

  menuMouseover(item: any, i: number) {
    this.menuChoice = i
    this.selectedMateria = item
    this.description = item.description
  }
  menuMouseleave() {
    this.menuChoice = -1
  }
}
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
  padding: 60px 0px 0px 20px;
  float: left;
  .content {
    margin: 0px 6px 0px 0px;
  }
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
.attack-margin {
  margin: 6px 0px 6px 0;
}
.defence-margin {
  margin: 6px 0px 6px 0;
}
.equipment {
  margin: 0px 3px 0px 3px;
  width: 24px;
  height: 24px;
  z-index: 0;
  border-radius: 50%;
  background: radial-gradient(
    closest-side at 49% 49%,
    rgb(150, 150, 150) 0%,
    rgb(40, 40, 40) 25%,
    rgb(40, 40, 40) 70%,
    rgb(100, 100, 100) 92%
  );
  background-color: transparent;
  box-shadow: inset 6px 6px 2px -6px rgba(200, 200, 200, 1);
  .content {
    position: relative;
    top: 2.2px;
    left: 1px;
  }
}
.equipment-margin {
  margin-left: 30px;
}
.highlight4 {
  position: relative;
  top: -40%;
  left: 40%;
  width: 4px;
  height: 4px;
  z-index: 2;
  border-radius: 50%;
  background: rgba(150, 150, 150, 1);
  filter: blur(1px);
}
</style>
