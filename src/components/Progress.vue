<template>
    <div>
        Etape {{  value +1 }}/{{ max +1 }}
        <v-progress-linear :model-value="value" :max="max" :height="6"></v-progress-linear>
    </div>
</template>

<script setup>
defineProps({
    value: Number,
    max: Number
})

</script>