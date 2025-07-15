<template>
  <div>
    <!--TODO -- see src/components/AssemblyLine.vue -->
    <input
      data-testid="assembly-add-item"
      v-model="input"
      @keydown.enter="add()"
    />
    <div data-testid="assembly-stage" v-for="(stage, sidx) of stages">
      <h3>{{ stage }}</h3>
      <div v-for="(item, idx) of stageslist[`stage-${sidx}`]">
        <button
          data-testid="assembly-item"
          @contextmenu.prevent="move(sidx, idx, -1)"
          @click="move(sidx, idx)"
        >
          {{ item }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const stages = ref(['Idea', 'Development', 'Testing', 'Deployment']);
const list = ref({});
const input = ref('');

function add() {
  if (!!input.value) {
    list.value['stage-0'] ??= [];
    list.value['stage-0'].unshift(input.value);
    input.value = '';
  }
}
function move(sidx, idx, dir = 1) {
  list.value[`stage-${sidx}`] ??= [];
  list.value[`stage-${sidx + dir}`] ??= [];
  const [itm] = list.value[`stage-${sidx}`].splice(idx, 1);
  list.value[`stage-${sidx + dir}`][dir === -1 ? 'push' : 'unshift'](itm);
}
</script>

<style></style>
