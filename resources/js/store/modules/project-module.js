import types from "../types"
import axios from 'axios'
import Vue from 'vue'

export default {
    // namespaced:true,
    state:{
        projects: []
    },
    mutations:{
        [types.PROJECT.SET_PROJECTS](state,payload){
            state.projects = payload
        },
        [types.PROJECT.SET_PROJECT_AT](state,payload){
            // update table
            var index = state.projects.findIndex( (project) => project.id == payload.project.id)
            Vue.set(state.projects,index,payload.project)
        },
        [types.PROJECT.PUSH_PROJECT](state,payload){
            // Add table
            state.projects.push(payload.project)
        },
        [types.PROJECT.REMOVE_PROJECT_AT](state,payload){
            // update table
            var index = state.projects.findIndex( (project) => project.id == payload.project.id)
            Vue.delete(state.projects,index)
        }
    },
    actions: {
       [types.PROJECT.FETCH_PROJECTS]({commit}) {
            axios.get('/project').then( response => {
                commit(types.PROJECT.SET_PROJECTS,response.data) 
            })
        }
    },
    getters:{
        [types.PROJECT.GET_PROJECTS](state) {
            return state.projects
        }
    }
}