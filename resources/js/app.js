// import Vue from 'vue/dist/vue.js'
import Vue from 'vue'
import Welcome from './components/Welcome.vue'

new Vue({
    el: "#root",
    render: h => h(Welcome)
})