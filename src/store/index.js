import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
    // state,
    // getters,
    // mutations,
    // actions
    state:{
        news: [],
        ask: [],
        jobs: [],
        user:{},
        items:{data:'data!'}
    },
    getters:{
        fetchedAsk(state){
            return state.ask
        },
        fetchedNews(state){
            return state.news
        },
        fetchedUser(state){
            return state.user
        }
    },
    mutations,
    actions
})