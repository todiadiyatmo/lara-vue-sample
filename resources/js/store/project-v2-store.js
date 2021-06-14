import Vue from 'vue'
import Vuex from 'vuex'
import types from './types'
import formModule from './modules/form-module'
import projectModule from './modules/project-module'
import messageModule from './modules/message-module'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        [types.FORM.NAME]:formModule,
        [types.PROJECT.NAME]:projectModule,
        [types.MESSAGE.NAME]:messageModule,
    }
})