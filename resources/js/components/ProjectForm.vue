<template>
<form class='form' @submit.prevent>
    <h2 v-if="state == 'create'" class="subtitle">Buat Project</h2>
    <h2 v-if="state == 'edit'" class="subtitle">Edit Project</h2>
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
            <button v-if="state == 'create'" @click="submit" class="button is-primary">
            Submit
            </button>
            <button v-if="state == 'edit'"  @click="update" class="button is-primary">
            Edit
            </button>
        </p>
    </div>
</form>
</template>

<script>
import { EventBus }  from '../lib/event-bus.js'
const axios = require('axios');

export default {
    name: "ProjectForm",
    props:['form'],
    computed: {
        project() {
            return this.form.project
        },
        state() {
            return this.form.state
        }
    },
    methods:{
        submit() {
            EventBus.$emit('createProject',this.form.project)
            this.reset()
        },
        update() {
            EventBus.$emit('updateProject',this.form.project)
        },
        reset() {
        }
    }
}
</script>

