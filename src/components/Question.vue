<template>
    <div class="question">
        <v-radio-group :label="question.question" v-model="answer" @change="onAnswer">
            <v-radio v-for="choice in randomChoices" :label="choice" :value="choice" :disabled="hasAnswer" :class="[hasAnswer && choice == question.correct_answer && 'right', hasAnswer && choice !== question.correct_answer && choice === answer && 'wrong']"></v-radio>
        </v-radio-group>
        <v-btn :disabled="!hasAnswer" @click="emits('answer', answer)">Question suivante</v-btn>
    </div>

    {{ answer }}
</template>

<script setup>
import { shuffleArray } from '@/functions/array';
import { computed, onMounted, ref } from 'vue';

const props = defineProps({
    question: Object
})

const answer = ref(null)
const emits = defineEmits(['answer'])

const hasAnswer = computed(() => answer.value !== null)

const randomChoices = computed(() => shuffleArray(props.question.choices))

let timer;

const onAnswer = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
        emits('answer', answer)
    }, 1000);
}

onMounted(() => {
    timer = setTimeout(() => {
        answer.value = '';
        onAnswer();
    }, 3000);
})

// watch the question, if it changes, reset the value of the value so the button can be disabled
// watch(() => props.question, () => {
//     answer.value = null;
// })

</script>

<style>
.question {
    padding-top: 2rem;
}
.question button {
    margin-left: auto;
    display: block;
}

.right {
    opacity: 1;
    color: green;
}

.wrong {
    opacity: 1;
    color: red;
}
</style>











        <!-- <ul>
            <li v-for="(choice, index) in question.choices" :key="choice">
                 <label :for="`answer${index}`">
                    <input :id="`answer${index}`" type="radio" name="answer">
                    {{  choice }}
                </label> 
                <v-radio :label="choice" :value="choice"></v-radio>
            </li>
        </ul> -->