<template>
    <article class="message" :class="message.class" v-show="isVisible">
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
import { EventBus }   from '../lib/event-bus.js'

export default ({
    name:"Message",
    data() {
        return {
            message: {
                class:"",
                body:"",
                title:"",
                visible:""
            }
        }
    },
    computed: {
        isVisible() {
            return this.message.visible;
        }
    },
    methods: {
        hideMessage() {
            this.message.visible = false;
        },
        setMessage(data) {
            this.message=data
        }
    },
    created() {           
        EventBus.$on('setMessage',this.setMessage)
    },
    beforeDestroy() {           
        EventBus.$off('setMessage',this.setMessage)
    }
})
</script>
