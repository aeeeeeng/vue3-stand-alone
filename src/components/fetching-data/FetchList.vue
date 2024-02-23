<script setup>
const props = defineProps({
    commits: Array
})

function truncate(v) {
    const newline = v.indexOf('\n')
    return newline > 0 ? v.slice(0, newline) : v
}

function formatDate(v) {
    return v.replace(/T|Z/g, ' ')
}
</script>

<template>
    <p v-if="!commits">Please wait</p>
    <ul v-else>
        <li v-for="{ html_url, sha, author, commit } in commits" :key="sha">
            <a :href="html_url" target="_blank" class="commit">{{ sha.slice(0, 7) }}</a>
            - <span class="message">{{ truncate(commit.message) }}</span><br>
            by 
            <span class="author">
                <a :href="author.html_url" target="_blank">{{ commit.author.name }}</a>
            </span>
            at 
            <span class="date">{{ formatDate(commit.author.date) }}</span>
        </li>
    </ul>
</template>


<style scoped>
    a {
        text-decoration: none;
        color: #42b883;
    }
    li {
        line-height: 1.5em;
        margin-bottom: 20px;
    }
    .author, .date {
        font-weight: bold;
    }
</style>