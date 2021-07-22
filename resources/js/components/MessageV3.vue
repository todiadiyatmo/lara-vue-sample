<template>
    <article class="message" :class="message.class" v-show="message.visible">
        <div class="message-header">
            <p>{{ message.title }} </p>
            <button class="delete" @click="hideMessage" aria-label="delete"></button>
        </div>
        <div v-if="message.body" class="message-body">
            {{ message.body }}
        </div>
        </article>
</template>
<script>
import store from '../store/project-v3-store'
import { get,sync } from 'vuex-pathify'
// import types from '../store/types.js';

export default ({
    name:"Message",
    computed: {
        message: get('message/message')
    },
    methods: {
        hideMessage() {
            store.commit('SET_VISIBLE',false)
        }
    },
    store
})
</script>
