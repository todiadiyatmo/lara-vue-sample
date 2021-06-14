<template>
    <table class="table">
        <thead>
            <tr>
                <td>#ID</td>
                <td>Name</td>
                <td>Description</td>
                <td>Action</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="project in projects" :key="project.id">
                <td>{{project.id}}</td>
                <td>{{project.name}}</td>
                <td>{{project.description}}</td>
                <td>
                    <button class="button is-dark is-small" @click="edit(project)">Edit</button>
                    <button class="button is-danger is-small" @click="destroy(project)">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
const axios = require('axios');
import { EventBus }   from '../lib/event-bus.js'

export default {
    name: "ProjectTable",
    props:['projects'],
    data() {
        return {
            // projects: []
        }
    },
    created() {
        // this.data.projects = this.project-model;
    },
    methods: {
        destroy(project) {
            EventBus.$emit('deleteProject',project)
        },
        edit(project) {
            // jurus rahasia supaya tidak "reaktif"
            var projectCopy =JSON.parse(JSON.stringify(project));

            EventBus.$emit('setForm',{state:"edit",project:projectCopy})
        }  
    }
}
</script>

         