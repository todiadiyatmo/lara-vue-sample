import types from "../types"
import pathify, { make } from 'vuex-pathify'

const state = {
	message:{
		visible:false,
		title:"title",
		body:"",
		class:"is-danger"
	}
}

export default  {
    namespaced:true,
    state,
    mutations: {
        ...make.mutations(state),
        SET_SUCCESS: (state,payload) => {
            state.message = {
                visible: true,
                title: payload,
                class: "is-success"
            }
        },
        SET_ERROR: (state,payload) => {
            state.message = {
                visible: true,
                title: payload,
                class: "is-danger"
            }
        },
        SET_VISIBLE: (state,payload) => {
            state.message.visible = payload
        }
    },
    getters: {
        ...make.getters(state)
    }
}