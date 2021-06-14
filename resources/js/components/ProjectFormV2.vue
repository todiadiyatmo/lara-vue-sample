<template>
<form class='form' @submit.prevent>
    <h2 v-if="state == types.FORM.STATE_CREATE " class="subtitle">Buat Project</h2>
    <h2 v-if="state == types.FORM.STATE_EDIT" class="subtitle">Edit Project</h2>
    <div class="field">
        <label class="label">Name</label>
        <p class="control">
            <input class="input" type="text" v-model="project.name" placeholder="Project Name" >
        </p>
    </div>
    <div class="field">
        <label class="label">Description</label>
        <p class="control">
        <input class="input" type="text"  v-model="project.description" placeholder="Project Description">
        </p>
    </div>
    <div class="field is-grouped is-grouped-right">
        <p class="control">
            <button v-if="state ==  types.FORM.STATE_CREATE" @click="submit" class="button is-primary">
            Submit
            </button>
            <button v-if="state ==  types.FORM.STATE_EDIT"  @click="update" class="button is-primary">
            Edit
            </button>
        </p>
    </div>
</form>
</template>

<script>
import types  from '../store/types'
import store from '../store/project-v2-store'
import Vue from 'vue'

const axios = require('axios');

export default {
    name: "ProjectForm",
    computed: {
        project() {
            
            return store.getters[types.FORM.GET_PROJECT]
        },
        state() {
            return store.getters[types.FORM.GET_STATE]
        },
        validation() {
            return store.getters[types.FORM.GET_VALIDATIONS]
        },
        types() {
            return types
        }
    },
    methods:{
        submit() {
            store.dispatch(types.FORM.CREATE_PROJECT,{project:this.project})
        },
        update() {
            store.dispatch(types.FORM.UPDATE_PROJECT,{project:this.project})
        },
        reset() {
        }
    }
}
</script>

