<template>
    <router-view />
</template>

<script>
    import {  RouterView } from 'vue-router';
    import { mapActions } from "vuex";

    export default {
        name: 'App',
        components: {
        },
        watch:{
            $route() {
            window.scroll(0, 0);
            },
        },
        methods: {
            ...mapActions('categories', [
                'actionGetAllCategories'
            ]),
        },
        mounted() {
            this.actionGetAllCategories();
        }
        

    };
</script>

<style>
    html {
        background-color: var(--background-base-color);
    }
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        text-align: center;
        color: var(--font-base-color);
        background-color: var(--background-base-color);
       
    }
</style>
