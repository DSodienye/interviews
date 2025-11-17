<template>
  <div>
    <div>
      <input data-testid="item-input" v-model="input" @keydown.enter="add()" />
      <button data-testid="add-button" @click="add()">Add item</button>
      <button data-testid="remove-button" @click="remove()">Remove item</button>
      <button data-testid="clear-button" @click="clear()">Clear item</button>
    </div>
    <ul data-testid="items">
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const input = ref('');
const items = ref([]);

function add() {
  const trimmed = input.value.trim();
  if (!!trimmed && !items.value.includes(trimmed)) {
    items.value.push(trimmed);
    input.value = '';
  }
}

function remove() {
  if (items.value.length > 0) {
    items.value.pop();
  }
}

function clear() {
  if (items.value.length > 0) {
    items.value = [];
    input.value = '';
  }
}
</script>
