// import Vue from 'vue/dist/vue.js'
import Vue from 'vue'
import axios from 'axios'
import { EventBus }   from './lib/event-bus.js'
import ProjectTable from './components/ProjectTable.vue'
import ProjectForm from './components/ProjectForm.vue'
import Message from './components/Message.vue'

new Vue({
    el: "#project",
    components: {
        'project-table': ProjectTable,
        'project-form': ProjectForm,
        'message': Message,
    },
    // render: h => h(projectTable,projectForm),
    data : {
        projects:[],
        form:{
            project: {
                id:"",
                name:"",
                description:""
            },
            // create / "edit"
            state:"create"
        }

    },
    mounted() {
        this.setMessage({
            visible:false,
            title:"title",
            body:"",
            class:"is-danger"
        })
    },
    created() {
        this.fetchProjects()       
        EventBus.$on('setForm',this.setForm)
        EventBus.$on('createProject',this.createProject)
        EventBus.$on('deleteProject',this.deleteProject)
        EventBus.$on('updateProject',this.updateProject)

    },
    beforeDestroy() {           
        EventBus.$off('setForm',this.setForm)
        EventBus.$off('createProject',this.createProject)
        EventBus.$off('deleteProject',this.deleteProject)
        EventBus.$off('updateProject',this.updateProject)
    },
    methods: {
        fetchProjects(){
            axios.get('/project').then( response => {
                this.projects = response.data
            }).catch( response => {
                this.setMessage({
                    visible:true,
                    title:"Error",
                    body:"Gagal mengambil project",
                    class:"is-danger"
                })
            })
        },
        setForm(data){
            this.form.state =  data.state;
            this.form.project = data.project;
        },
        setMessage(data){
            EventBus.$emit('setMessage',data)
        },
        deleteProject(project){
            //@delete
            axios.delete('/project/'+project.id)
            .then( response => {
                
                this.fetchProjects();   
                this.setMessage({
                    visible:true,
                    title:response.data.message,
                    class:"is-success"
                })
            })
            .catch( error => {
                this.setMessage({
                    visible:true,
                    title:"Gagal menghapus project",
                    body:error.response.data.message,
                    class:"is-danger"
                })
            })
        },
        createProject(project){
            axios.post('/project',
            {
                name:project.name,
                description:project.description
            })
            .then( response => {

                console.log(response.data.message);

                this.setMessage({
                    visible:true,
                    title:response.data.message,
                    class:"is-success"
                })
                 this.fetchProjects();   
                })
                                     
            .catch( error => {
                console.log("catch")   
                this.setMessage({
                    visible:true,
                    title:"Gagal membuat project",
                    body:error.response.data.message,
                    class:"is-danger"
                })
            })
        },
        updateProject(project){
            axios.put('/project/'+project.id,
            {
                name:project.name,
                description:project.description
            })
            .then( response => {
                this.setMessage({
                    visible:true,
                    title:response.data.message,
                    class:"is-success"
                })
                 this.fetchProjects();                            
            })
            .catch( error => {
                this.setMessage({
                    visible:true,
                    title:"Gagal update project",
                    body:error.response.data.message,
                    class:"is-danger"
                })
            })
        }
    },
})