<template>
    <div ref="infoMessage"> 
        <p class="button" @click="close">X</p>
        <p>{{ getMessage }}</p>
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
            setTimeout(() => {
                this.$refs.infoMessage.style.opacity = 1;
                this.$refs.infoMessage.style.transform = 'translateY(0%)';
            }, 100);
            if(this.getMessage.includes('Erreur')) {
                this.$refs.infoMessage.classList.add('warning');
                this.$refs.infoMessage.classList.remove('success');
            } else {
                this.$refs.infoMessage.classList.add('success');
                this.$refs.infoMessage.classList.remove('warning');
            }                
        },
        updated() {
            setTimeout(() => {
                this.$refs.infoMessage.style.opacity = 1;
                this.$refs.infoMessage.style.transform = 'translateY(0%)';
            }, 100);
            if(this.getMessage.includes('Erreur')) {
                this.$refs.infoMessage.classList.add('warning');
                this.$refs.infoMessage.classList.remove('success');
            } else {
                this.$refs.infoMessage.classList.add('success');
                this.$refs.infoMessage.classList.remove('warning');
            }                
        },
        methods: {
            ...mapMutations('utils', ['setMessage'],),

            close() {
                this.$refs.infoMessage.style.opacity = 0;
                setTimeout(() => {
                    this.setMessage('');
                }, 600);
                
            },
        },
    };
</script>

<style scoped>
    div {
        margin: auto;
        margin-top: .5rem;
        margin-bottom: .5rem;
        width: fit-content;
        padding: 1rem 5rem;
        display: flex;
        justify-content: center;
        position: relative;
        transition: .5s;
        opacity: 0;
        transform: translateY(30%);
    }
    .warning {
        border: solid 1px var(--border-error-message-color);
        border-radius: .4rem;
        background-color: var(--background-error-message-color);
        color: var(--font-error-message-color);
    }
    .success {
        border: solid 1px var(--border-success-message-color);
        border-radius: .4rem;
        background-color: var(--background-success-message-color);
        color: var(--font-success-message-color);
    }
    .button {
        padding: .5rem;
        top: 0;
        right: 0;
        font-weight: 600;
        position: absolute;
        color: rgb(115, 115, 115);
        transition: .4s;
        font-size: 1.2rem;
        cursor: pointer;
    }
    .button:hover {
        color: black;
    }
</style>