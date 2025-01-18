<template>
  <v-card>
    <v-layout>
      <v-app-bar
        prominent
      >

        <v-btn to="/" variant="outlined" size="small">My To Do List</v-btn>

        <v-spacer></v-spacer>

        <v-btn to="/quizz" variant="outlined" size="small">Quizz ?</v-btn>

      </v-app-bar>

      <v-main>
        <RouterView />
      </v-main>
    </v-layout>
  </v-card>
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>