import types from "../types"

export default  {
    // namespaced:true,
    state:{
        message:{
            visible:false,
            title:"title",
            body:"",
            class:"is-danger"
        }
    },
    mutations: {
        [types.MESSAGE.SET_MESSAGE](state,payload) {
            state.message = payload
        },
        [types.MESSAGE.SET_VISIBLE](state,payload) {
            state.message.visible = payload
        }
    },
    getters: {
        [types.MESSAGE.GET_MESSAGE](state) {
            return state.message
        }
    }
}