import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        question1: 0,
        question2: 0,
        question3: 0,
        count: 0,
    },
    getters: {
        question1: state => state.question1,
        question2: state => state.question2,
        question3: state => state.question3,
        count: state => state.count,

    },
    mutations: {
        addToQuestion(state) {
            state.question1 = 1
            state.count = state.count + 1
        },
        addToQuestion2(state) {
            state.question2 = 1
            state.count = state.count + 1

        }, addToQuestion3(state) {
            state.question3 = 1
            state.count = state.count + 1

        },
        resetAll(state) {

            state.count = 0
            state.question1 = 0
            state.question2 = 0
            state.question3 = 0
        },
        },
        actions: {
            async addToQuestion({ commit }) {
                commit('addToQuestion')
            },
            async addToQuestion2({ commit }) {
                commit('addToQuestion2')
            },
            async addToQuestion3({ commit }) {
                commit('addToQuestion3')
            },
            async resetAll({ commit }) {
                commit('resetAll')
            }
        },
        modules: {
        }
    })
