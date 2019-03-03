<template>
    <div class="header">
        <router-link to="/news">News</router-link>
        <router-link to="/ask">Ask</router-link>
        <router-link to="/jobs">Jobs</router-link>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .header {display:flex;background:#42b883;padding:8px}
    .header a {padding:5px;color:#fff}
    .header a.router-link-exact-active {color:#35495e}
</style>