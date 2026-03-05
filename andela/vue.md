#### **Assembly Line**

```vue
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
      <div v-for="(item, idx) of list[`stage-${sidx}`]">
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

```

#### Ordered List

```vue
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

```

#### Unique List

```vue
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
  input.value = '';
  if (!!trimmed && !items.value.includes(trimmed))
    items.value.push(trimmed);
}

function remove() {
  const trimmed = input.value.trim();
  const target = items.value.indexOf(trimmed);
  input.value = '';
  if (items.value.length > 0)
    items.value.pop();
  if (target > -1) items.splice(target, 1);
}

function clear() {
  if (items.value.length > 0) {
    items.value = [];
    input.value = '';
  }
}
</script>

```
