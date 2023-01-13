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
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
