<template>
<form class='form' @submit.prevent>
    <h2 v-if="state == 'create'" class="subtitle">Buat Project</h2>
    <h2 v-if="state == 'edit'" class="subtitle">Edit Project</h2>
    <div class="field">
        <label class="label">Name</label>
        <p class="control">
            <input :class="{'is-danger':errors.has('name')}" class="input" type="text" v-model="currentProject.name" placeholder="Project Name" >
        </p>
        <p  v-if="errors.has('name')" v-text="errors.get('name')" class="has-text-danger"></p>
    </div>
    <div class="field">
        <label class="label">Description</label>
        <p class="control">
            <input :class="{'is-danger':errors.has('description')}"  class="input" type="text" v-model="currentProject.description" placeholder="Project Description">
        </p>
        <p  v-if="errors.has('description')" v-text="errors.get('description')" class="has-text-danger"></p>
    </div>
    <div class="field is-grouped is-grouped-right">
        <p class="control">
            <button v-if="state == 'create'" @click="submit(currentProject)" class="button is-primary">
            Submit
            </button>
            <button v-if="state == 'edit'"  @click="update(currentProject)" class="button is-primary">
            Edit
            </button>
        </p>
    </div>
</form>
</template>

<script>
// import types  from '../store/types'
import store from '../store/project-v3-store'
import Vue from 'vue'
import { get,sync } from 'vuex-pathify'
import { mapActions } from 'vuex'

const axios = require('axios');

export default {
    name: "ProjectForm",
    computed: {
        currentProject: get('project/currentProject'),
        state: get('project/state'),
        errors: get('project/errors')
    },
    methods:{
        ...mapActions({
            submit: 'project/createProject',
            update: 'project/updateProject'
        })
    },
    store
}
</script>

