<template>
    <div>  
        <button @click="close">X</button>
        <p ref="infoMessage">{{ getMessage }}</p>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from "vuex";
    export default {
        name: 'MessageInfo',
        computed: {
            ...mapGetters('utils', ['getMessage']),
        },
        mounted() {
                this.getMessage.includes('Erreur') ?
                this.$refs.infoMessage.classList.add('warning') :
                this.$refs.infoMessage.classList.add('success');
            },
        methods: {
            ...mapMutations('utils', ['setMessage'],),

            close() {
                this.setMessage('');
            },
        },
    };
</script>

<style scoped>
    div {
        display: flex;
        justify-content: center;
    }
    p {
        margin-left: 1rem;
    }
    .warning {
        color: red;
    }
    .success {
        color: green;
    }
</style>