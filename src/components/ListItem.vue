<template>
    <div>
        <ul class="news-list">
            <li v-for="item in listItems" :key="item.id" class="post">
                <!-- 포인트영역 -->
                <div class="point">
                    {{ item.points || 0 }}
                </div>

                <!-- 기타정보영역 -->
                <template v-if="item.domain">
                    <a :href="item.url" target="_new" class="no-underline">{{ item.title }}</a>
                </template>
                <template v-else>
                    <router-link :to="`item/${item.id}`">{{ item.title }}</router-link>
                </template>

                <small>
                    {{ item.time_ago }} by
                    <!-- <router-link :to=" '/user/' + item.user "> {{ item.user }} </router-link> -->
                    <router-link 
                        v-if="item.user"
                        :to="`/user/${item.user}`"> {{ item.user }} </router-link>
                    <a v-else :href="item.url" class="no-underline">{{ item.domain }}</a>
                </small>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    created(){
        const name = this.$route.name;
        let actionName = '';

        if(name === 'news'){
            actionName = 'FETCH_NEWS'
        }else if(name === 'ask'){
            actionName = 'FETCH_ASK'
        }else if(name === 'jobs'){
            actionName = 'FETCH_JOBS'
        }
        this.$store.dispatch(actionName)
    },
    computed:{
        listItems(){
            const name = this.$route.name;
            const {news,ask,jobs} = this.$store.state
            if(name === 'news'){
                return news;
            }else if(name === 'ask'){
                return ask;
            }else if(name === 'jobs'){
                return jobs;
            }
        }
    }
}
</script>

<style scoped>
    .news-list {margin: 0; padding: 0;}
    .post {list-style: none;display: flex;align-items: center;border-bottom: 1px solid #eee;padding:8px 15px;}
    a {color: #444}
    .no-underline {text-decoration: none}
    .point {font-weight: 700;min-width: 50px;color:#42b883}
    small {padding:0 0 0 10px;margin-left: auto;color:#777;white-space: nowrap;font-size: 12px}
    small a {color:#777}
    a:hover {color: #42b883}
</style>