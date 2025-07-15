<template>
  <div>
    <!--TODO -- src/components/OrderedList.vue -->
    <input data-testid="add-item" v-model="input" @keydown.enter="add()" />
    <button
      data-testid="sort-direction"
      @click="
        direction = direction === 'up' ? 'down' : 'up';
        sort();
      "
    >
      {{ direction }}
    </button>
    <button data-testid="clear-list" @click="clear()">clear</button>
    <ul data-testid="items-list">
      <li v-for="item of list">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const input = ref('');
const list = ref([]);
const direction = ref('up');

function sort() {
  if (direction.value === 'up') list.value.sort((a, b) => a.localeCompare(b));
  else list.value.sort((a, b) => b.localeCompare(a));
}

function add() {
  if (!!input.value) {
    list.value.push(input.value);
    sort();
    input.value = '';
  }
}

function clear() {
  list.value = [];
  input.value = '';
}
</script>

<style></style>
