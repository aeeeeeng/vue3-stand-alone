<script setup>
import { ref } from "vue"

    const props = defineProps({
        branches: Array
    })
    const emit = defineEmits(["radioChanged"])

    const currentBranch = ref(props.branches[0])

    function radioChange(e) {
        emit("radioChanged", e.target.value)
    }
</script>

<template>
    <div v-for="branch in branches" :key="branch">
        <input 
            type="radio" 
            :id="branch" 
            :value="branch" 
            name="branch" 
            v-model="currentBranch"
            @change="radioChange">
        <label :for="branch">{{ branch }}</label>
    </div>
</template>