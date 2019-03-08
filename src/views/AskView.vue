<template>
    <div>
        <list-item></list-item>
        <!-- <ul class="news-list">
            <li v-for="item in fetchedAsk" :key="item.id" class="post">
                <div class="point">
                    {{ item.points }}
                </div>
                <router-link :to="`item/${item.id}`">{{ item.title }}</router-link>
                <small>
                    {{ item.time_ago }} by
                    <router-link :to="`/user/${item.user}`"> {{ item.user }} </router-link>
                </small>
            </li>
        </ul> -->
    </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
    export default {
        components:{
            ListItem
        }
    }
</script>

<style scoped>

</style>