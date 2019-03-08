<template>
    <div>
        <user-profile></user-profile>
    </div>
</template>

<script>
    import UserProfile from '../components/UserProfile.vue'
    export default {
        components:{
            UserProfile
        },
        created(){
            const userName = this.$route.params.id
            //axios.get(`https://api.hnpwa.com/v0/user/${userName}.json`)
            this.$store.dispatch('FETCH_USER',userName)
        }
    }
</script>

<style scoped>

</style>