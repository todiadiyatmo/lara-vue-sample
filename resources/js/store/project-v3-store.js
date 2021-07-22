import Vue from 'vue'
import Vuex from 'vuex'
import pathify from 'vuex-pathify'
import types from './types'
// import formModule from './modules/form-module'
import projectModule from './modules/project-module-v3'
import messageModule from './modules/message-module-v3'

Vue.use(Vuex)

export default new Vuex.Store({
	plugins: [ pathify.plugin ],
    modules: {
        project: projectModule,
        message: messageModule,
    }
})