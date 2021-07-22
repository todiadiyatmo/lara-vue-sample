// import Vue from 'vue/dist/vue.js'
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import { EventBus }   from './lib/event-bus.js'
import ProjectTable from './components/ProjectTableV3.vue'
import ProjectForm from './components/ProjectFormV3.vue'
import Message from './components/MessageV3.vue'

new Vue({
    el:"#project",
    components: {
        "project-table":ProjectTable,
        "message":Message,
        "project-form":ProjectForm
    }
})