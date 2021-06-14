// import Vue from 'vue/dist/vue.js'
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { EventBus }   from './lib/event-bus.js'
import ProjectTable from './components/ProjectTableV2.vue'
import ProjectForm from './components/ProjectFormV2.vue'
import Message from './components/MessageV2.vue'
import types from "./store/types"
import store from './store/project-v2-store'

new Vue({
    el:"#project",
    components: {
        "project-table":ProjectTable,
        "message":Message,
        "project-form":ProjectForm
    }
})