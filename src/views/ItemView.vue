<template>
    <div>
        <div>
            <p>
                id: {{ items.id }} /
                <router-link :to="`/user/${items.user}`">{{ items.user }}</router-link> /
                points: {{ items.points }} /
                {{ items.time_ago }}
            </p>
            <h2>title: {{ items.title }}</h2>
            <div class="content" v-html="items.content"></div>
        </div>
        <div v-for="item in items" :key="item.id" id="cmt">
            <div v-for="cmt in items.comments" :key="cmt.id">
                <p>
                    id: {{ cmt.id }} /
                    level: {{ cmt.level }} /
                    time_ago: {{ cmt.time_ago }} /
                    user: {{ cmt.user }}
                </p>
                <p class="bg" v-html="cmt.content"></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed:{
            items(){
                console.log(this.$store.state.items)
                return this.$store.state.items
            }
        },
        created(){
            const id = this.$route.params.id;
            this.$store.dispatch('PACH_ITEMS', id)
        }
    }
</script>

<style scoped>
p{margin:0}
h2 {margin-top:0}
h2,p{padding: 15px;}
#cmt {background: #ddd}
#cmt > div {border-bottom: 1px solid #aaa}
.content {width:calc(100% - 30px);display: block;margin: 0 auto 30px;}
.bg {background: #eee;width:calc(100% - 30px);display: block;box-sizing: border-box;margin: 0 auto 30px;word-break: keep-all}
</style>