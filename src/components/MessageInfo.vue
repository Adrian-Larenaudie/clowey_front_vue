<template>
    <div>  
        <button @click="close">X</button>
        <p :class="classGiver">{{ getMessage }}</p>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from "vuex";
    export default {
        name: 'MessageInfo',
        computed: {
            ...mapGetters('utils', ['getMessage']),
        },
        methods: {
            ...mapMutations('utils', ['setMessage'],),

            close() {
                this.setMessage('');
            },
            classGiver() {
                return this.getMessage.includes('Erreur') ? 'warning' : 'success'
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