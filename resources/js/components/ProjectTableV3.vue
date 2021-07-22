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
import store from '../store/project-v3-store'
import { get,sync } from 'vuex-pathify'
import { mapActions } from 'vuex'

export default {
    name: "ProjectTable",
    computed: {
        projects: sync('project/projects')
    },
    created() {
        store.dispatch('project/fetchProject')
    },
    methods: {
        ...mapActions({
            destroy: 'project/deleteProject',
            edit: 'project/editForm'
        })
    },
    store
}
</script>

         