f<template>
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
import store from '../store/project-v2-store'
import types from '../store/types.js';

export default ({
    name:"Message",
    computed: {
        message() {
            return store.getters[types.MESSAGE.GET_MESSAGE]
        }
    },
    methods: {
        hideMessage() {
            store.commit(types.MESSAGE.SET_VISIBLE,false)
        }
    },
})
</script>
