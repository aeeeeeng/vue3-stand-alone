<script setup>
import { ref, watchEffect } from 'vue';
import RadioList from './RadioList.vue';
import FetchList from './FetchList.vue'
import debounce from 'lodash'

const API_URL = `https://api.github.com/repos/vuejs/core/commits?per_page=3&sha=`
const branches = ['main', 'v2-compat']
const currentBranch = ref(branches[0])
const commits = ref(null)

watchEffect(async () => {
    const url = `${API_URL}${currentBranch.value}`
    commits.value = await (await fetch(url)).json()
    
})


</script>

<template>
    <h1>Latest Vue Core Commits</h1>
    <RadioList :branches="branches" @radioChanged="(data) => currentBranch = data"/>
    <p>vuejs/vue@{{ currentBranch }}</p>
    <FetchList :commits="commits"/>
</template>
