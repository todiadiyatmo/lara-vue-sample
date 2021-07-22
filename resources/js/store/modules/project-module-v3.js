import axios from 'axios'
import Vue from 'vue'
import lib from '../../lib/lib.js'
import Errors from "../../model/errors"
import pathify, { make, get } from 'vuex-pathify'

const state = {
	projects: [],
	currentProject: {
		id:"",
		name:"",
		description:""
	},
	errors: new Errors() ,
	state: 'create'
}

export default {
    namespaced:true,
	state,
    mutations:{
		...make.mutations(state),
        SET_PROJECT_AT: (state,payload) => {
            // update table
            var index = state.projects.findIndex( (project) => project.id == payload.project.id)
            Vue.set(state.projects,index,payload.project)
        },
        PUSH_PROJECT: (state,payload) => {
            // Add table
            state.projects.push(payload.project)
        },
        REMOVE_PROJECT_AT: (state,payload) => {
            // update table
            var index = state.projects.findIndex( (project) => project.id == payload.project.id)
            Vue.delete(state.projects,index)
        }
    },
    actions: {
       fetchProject({commit}) {
            axios.get('/project').then( response => {
                commit('SET_PROJECTS',response.data) 
            })
        },
        updateProject({commit, dispatch,state,rootGetters}, payload) {     
            
            axios.put('/project/'+payload.id, {
                name:payload.name,
                description:payload.description
            }).then( response => {                                
                commit('message/SET_SUCCESS',response.data.message, {root:true})

                // update project at index table data
                commit('SET_PROJECT_AT',{project:payload})
                // reset form
                dispatch('resetForm')
            })
            .catch( error => {
                commit('message/SET_ERROR', error.response.data.message, {root:true})
                commit('SET_ERRORS',error.response.data.errors)
            })
            
        },
        createProject({commit, dispatch,state,getters}, payload) {       
                       
            axios.post('/project/', {
                name:payload.name,
                description:payload.description
            })
            .then( response  => {         
                commit('message/SET_SUCCESS',response.data.message, {root:true})         
                
                commit('PUSH_PROJECT',{project:response.data.project})
                dispatch('resetForm')
            })
            .catch( error => {
                commit('message/SET_ERROR', error.response.data.message, {root:true})
                commit('SET_ERRORS',error.response.data.errors)
            })                
        },
        deleteProject({commit, dispatch,state}, payload) {       
                       
            axios.delete('/project/'+payload.id)
            .then( response  => {         
                commit('message/SET_SUCCESS',response.data.message, {root:true})
                commit('REMOVE_PROJECT_AT',{project:payload})
            })
            .catch( error => {
                commit('message/SET_ERROR', error.response.data.message, {root:true})
            })                
        },
		editForm({state,commit,rootState},payload) {
            // console.log(payload.project)
            // jurus rahasia supaya tidak "reaktif"            
            this.set('project/state', 'edit')
            this.set('project/currentProject', lib.copyAttribute(payload))
        },
        resetForm({commit}){
            this.set('project/currentProject', {
                id:"",
                name:"",
                description:""
            })
            this.set('project/state', 'create')
            this.set('project/errors', new Errors())
        }
    },
    getters:{
        ...make.getters(state),
    }
}