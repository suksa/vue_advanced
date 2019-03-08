<template>
    <div>
        <p>created_time: {{userInfo.created_time | moment("YYYY년 MM월 DD일")}}</p>
        <p>id: {{userInfo.id}}</p>
        <p>karma: {{userInfo.karma}}</p>
        <p>created: {{userInfo.created}}</p>
    </div>
</template>

<script>
    import Vue from 'vue'
    import moment from 'vue-moment'
    Vue.use(moment);
    
    export default {
        computed:{
           userInfo(){
               return this.$store.state.user
           }
        },
    }
</script>

<style scoped>

</style>