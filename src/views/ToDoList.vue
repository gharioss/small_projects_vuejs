<template>
  <v-form @submit.prevent="addTodo">
      <v-text-field
        v-model="newTodo"
        hide-details="auto"
        label="Tâche à effectuer"
      ></v-text-field>
      <v-btn :disabled="newTodo.length === 0" type="submit">Ajouter</v-btn>
    </v-form>
    
    <div v-if="todos.length === 0">Vous n'avez pas de taches à faire :(</div>
  <div v-else>
    <ul>
      <li v-for="todo in sortedTodos" :key="todo.date" :class="{completed: todo.completed}">
        <v-checkbox v-model="todo.completed" :label="todo.title">
        </v-checkbox>
      </li>
    </ul>
    <v-checkbox v-model="hideCompleted" label="Masquer les tâches complétées"></v-checkbox>
    <p v-if="remainingTodos > 0"> {{ remainingTodos }} tâche{{ remainingTodos > 1 ? 's' : '' }} à faire</p>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const newTodo = ref('');
const todos = ref([{
  title: 'Tâche de test',
  completed: true,
  date: 1,
  },
  {
  title: 'Tâche à faire',
  completed: false,
  date: 2,
  }
]);
const hideCompleted = ref(false);

const addTodo = () => {
  console.log("fjnuedfjr")
  todos.value.push({
    title: newTodo.value,
    completed: false,
    date: Date.now(),
  })
  
  newTodo.value = '';
}

const sortedTodos = computed(() => {
  const sortedTodos = todos.value.toSorted((a,b) => a.completed > b.completed ? 1 : -1);
  if(hideCompleted.value === true) {
    return sortedTodos.filter(t => t.completed === false)
  }
  return sortedTodos;
})

const remainingTodos = computed(() => {
  return todos.value.filter(t => t.completed === false).length
})

</script>

<style>
.completed {
  opacity: .5;
  text-decoration: line-through;
}
</style>