<template>
  <section>
    <v-container class="top-team-list ff7-card">
      <v-row
        v-for="(item, index) in $store.state.players"
        :key="index"
        align="center"
      >
        <v-col cols="4">
          <v-row justify="center">
            <img :src="item.image" width="75" />
          </v-row>
        </v-col>
        <v-col cols="3">
          {{ item.name }}{{ $store.state.level }}
          <v-row>
            <span class="status-item">LV</span>
            <span class="level-margin status-content">{{ item.level }}</span>
          </v-row>
          <v-row>
            <span class="status-item">HP</span>
            <span class="status-content">
              <span>
                {{ item.hp }}/{{ item.maxHp }}
                <div class="progress-linear">
                  <progress-hp-parts
                    :parent-max.sync="item.maxHp"
                    :parent-value.sync="item.hp"
                  />
                </div>
              </span>
            </span>
          </v-row>
          <v-row>
            <span class="status-item">MP</span>
            <span class="status-content">
              <span class="mp-margin">{{ item.mp }}/</span>
              <span class="mp-margin">{{ item.maxMp }}</span>
              <div class="progress-linear">
                <progress-mp-parts
                  :parent-max.sync="item.maxMp"
                  :parent-value.sync="item.mp"
                />
              </div>
            </span>
          </v-row>
        </v-col>
        <v-col cols="3">
          <v-row>
            <span class="next-level">つぎのレベルまであと</span>
            <progress-parts
              :parent-max.sync="item.maxExp"
              :parent-value.sync="item.exp"
              class="next-level-margin"
            />
          </v-row>
          <br />
          <v-row>
            <span class="limit">リミットレベル {{ item.limitLevel }}</span>
            <progress-parts
              :parent-max.sync="item.maxLimit"
              :parent-value.sync="item.limit"
              class="limit-margin"
            />
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import PortfolioVueEx from '~/logic/vue/PortfolioVueEx'
import ProgressParts from '~/components/parts/ProgressParts.vue'
import ProgressHpParts from '~/components/parts/ProgressHpParts.vue'
import ProgressMpParts from '~/components/parts/ProgressMpParts.vue'

@Component({
  components: {
    ProgressParts,
    ProgressHpParts,
    ProgressMpParts
  }
})
export default class TopTeam extends PortfolioVueEx {
  menuChoice: number = -1
}
</script>

<style scoped lang="scss">
.top-team-list {
  padding: 0px 0px 0px 30px;
  width: 457px;
  height: 360px;
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
