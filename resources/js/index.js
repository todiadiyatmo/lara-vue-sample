// import Vue from 'vue/dist/vue.js'
import Vue from 'vue'

Vue.component('card',{
    props:['content'],
    data() {
        return {
            isHovering:false
        }
    },
    computed: {
        title() {return this.content.title},
        description() {return this.content.description},
        href() {return this.content.href}
    }
})

new Vue({
    el: "#root",
    data: {
        samples: [
            {
                title:"Basic Reactive #1",
                description:"Simple reactive model",
                href:"/static-vue/basic-reactive.html"
            },
            {
                title:"Basic Reactive #2",
                description:"Binding model dengan input form",
                href:"/static-vue/basic-reactive-input.html"
            },
            {
                title:"CRUD V1 ",
                description:"Crud sederhana menggunakan Event Bus",
                href:"/project"
            },
            {
                title:"CRUD V2 ",
                description:"Crud sederhana menggunakan VUEX",
                href:"/project-v2"
            },
            {
                title:"CRUD V3 ",
                description:"(OTW) Crud menggunakan form dan pathify",
                href:"/project-v3"
            }
        ]
    }
})


//  has-text-primary has-background-primary-light
//  has-text-white-bis has-background-primary