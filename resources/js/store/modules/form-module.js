import types from "../types"
import axios from 'axios'
import lib from '../../lib/lib.js'
import Errors from "../../model/errors"

export default  {
    // namespaced:true,
    state:{
        project: {
            id:"",
            name:"",
            description:""
        },
        errors: new Errors() ,
        state: types.FORM.STATE_CREATE
    },
    mutations: {
        [types.FORM.SET_ERRORS](state,payload) {
            state.errors.record(payload)
        },
        [types.FORM.SET_STATE](state,payload) {
            state.state = payload
        },
        [types.FORM.SET_PROJECT](state,payload) {
            state.project = payload
        },
    },
    actions: {
        [types.FORM.EDIT_FORM]({state,commit,rootState},payload) {
            // console.log(payload.project)
            // jurus rahasia supaya tidak "reaktif"            
            
            commit(types.FORM.SET_STATE , types.FORM.STATE_EDIT ) 
            commit(types.FORM.SET_PROJECT, lib.copyAttribute(payload.project) ) 
        },
        [types.FORM.UPDATE_PROJECT]({commit, dispatch,state,rootGetters}, payload) {     
            
            axios.put('/project/'+payload.project.id, {
                name:payload.project.name,
                description:payload.project.description
            }).then( response => {                                
                commit(types.MESSAGE.SET_MESSAGE,{                  
                    visible:true,
                    title:response.data.message,
                    class:"is-success"                
                })  

                // update project at index table data
                commit(types.PROJECT.SET_PROJECT_AT,{project:payload.project})
                // reset form
                dispatch(types.FORM.RESET_FORM)
            })
            .catch( error => {
                commit(types.MESSAGE.SET_MESSAGE,{                  
                    visible:true,
                    title:error.response.data.message,
                    class:"is-danger"                
                })

                commit(types.FORM.SET_ERRORS,error.response.data.errors)
            })
            
        },
        [types.FORM.CREATE_PROJECT]({commit, dispatch,state,getters}, payload) {       
                       
            axios.post('/project/', {
                name:payload.project.name,
                description:payload.project.description
            })
            .then( response  => {         
                commit(types.MESSAGE.SET_MESSAGE,{                  
                    visible:true,
                    title:response.data.message,
                    class:"is-success"                
                })           
                
                commit(types.PROJECT.PUSH_PROJECT,{project:response.data.project})
                dispatch(types.FORM.RESET_FORM)
            })
            .catch( error => {
                commit(types.MESSAGE.SET_MESSAGE,{                  
                    visible:true,
                    title:error.response.data.message,
                    class:"is-danger"                
                })
                commit(types.FORM.SET_ERRORS,error.response.data.errors)

                

            })                  
        },
        [types.FORM.DELETE_PROJECT]({commit, dispatch,state}, payload) {       
                       
            axios.delete('/project/'+payload.project.id)
            .then( response  => {         
                commit(types.MESSAGE.SET_MESSAGE,{                  
                    visible:true,
                    title:response.data.message,
                    class:"is-success"                
                })           
                
                commit(types.PROJECT.REMOVE_PROJECT_AT,{project:payload.project})
            })
            .catch( error => {
                commit(types.MESSAGE.SET_MESSAGE,{                  
                    visible:true,
                    title:error.response.data.message,
                    class:"is-danger"                
                })
            })                  
        },
        [types.FORM.RESET_FORM]({commit}){
            commit(types.FORM.SET_PROJECT,{
                id:"",
                name:"",
                description:""
            })
            commit(types.FORM.SET_ERRORS,new Errors())
            commit(types.FORM.SET_STATE,types.FORM.STATE_CREATE)
        }
    },
    getters: {
        [types.FORM.GET_ERRORS](state) {
            return state.errors
        },
        [types.FORM.GET_STATE](state) {
            return state.state
        },
        [types.FORM.GET_PROJECT](state){
            return state.project
        }
    }
}