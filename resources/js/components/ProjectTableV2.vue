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
            <tr v-for="(project,idx) in projects" :key="idx">
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
import store from '../store/project-v2-store'
import types from '../store/types'

export default {
    name: "ProjectTable",
    computed: {
        projects() { return store.getters[types.PROJECT.GET_PROJECTS]},
    },
    created() {
        store.dispatch(types.PROJECT.FETCH_PROJECTS)
    },
    methods: {
        destroy(project) 
        {
            store.dispatch(types.FORM.DELETE_PROJECT,{project:project})
        },
        edit(project) {
            store.dispatch(types.FORM.EDIT_FORM,{project:project})
        }  
    }
}
</script>

         