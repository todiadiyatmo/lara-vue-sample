<template>
    <div>
        <ul>
            <li v-for="(skill,index) in skills" :key="index">
                {{ index }} - {{ skill }} 
            </li>
        </ul>    
    </div>
</template>

<script>
const axios = require('axios');

export default {
    name: "Skills",
    data() {
        return {
            skills: []
        }
    },
    created() {
        axios.get('/skills').then( response => this.skills = response.data )
    }
}
</script>

