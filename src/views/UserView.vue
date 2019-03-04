<template>
    <div>
        <!-- #1 -->
        <!-- <p>{{ user.id }}</p> -->

        <!-- #2 -->
        <p>created_time: {{fetchedUser.created_time}}</p>
        <p>id: {{fetchedUser.id}}</p>
        <p>karma: {{fetchedUser.karma}}</p>
        <p>created: {{fetchedUser.created}}</p>
        <!-- {{user}} -->
    </div>
</template>

<script>
    import {fetchUserInfo} from '../api/index.js'
    import {mapGetters} from 'vuex'
    export default {
        computed:{
           ...mapGetters([
               'fetchedUser'
           ]),
            //user(){
            //    return this.$store.state.user;
            //}
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