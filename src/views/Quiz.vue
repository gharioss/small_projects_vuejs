<template >
    <div class="container">
        <div v-if="state === 'error'">
            <p>Impossible de charger le quiz</p>
        </div>
        <div :aria-busy="state === 'loading'">
            <Quiz :quiz="quiz" v-if="quiz" />
        </div>
    </div>
</template>

<script setup>
import Quiz from '@/components/Quiz.vue';
import { onMounted, ref } from 'vue';

const quiz = ref(null);
const state = ref('loading');

onMounted(() => {
    fetch('/quiz.json')
        .then(r => {
            if (r.ok) return r.json();
            throw new Error('Impossible de récupérer le json');
        })
        .then(data => {
            quiz.value = data;
            state.value = 'idle';
        })
        .catch(e => {
            state.value = error
        })
})

</script>

<style>
.container{
    margin: 2rem;
}
</style>