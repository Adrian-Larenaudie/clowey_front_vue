<template>

    <Navigation v-if="currentRouteName != 'backoffice' " />
    <BackofficeNavigation v-if="currentRouteName === 'backoffice' " />

    <h1>Hello world</h1>
    <router-view />
</template>

<script>

    import {  RouterView } from 'vue-router';
    import Navigation from './components/blocks/Navigation.vue';
    import BackofficeNavigation from './components/blocks/BackofficeNavigation.vue';

    export default {
        name: 'App',
        components: {
            Navigation,
            BackofficeNavigation,
        },
        computed: {
            currentRouteName() {
                console.log(this.$route.name);
                return this.$route.name;
            }
        },
        watch:{
            $route() {
            window.scroll(0, 0);
            },
        },

    };
</script>

<style>
    #app {
        font-family: 'Jet Brains Mono', sans-serif;
        width: 100%;
        height: 100vh;
        background-color: #000;
        color: #fff;
    }
    a {
        text-decoration: none;
        color: green;
    }
    a:hover {
        color: red; 
    }
</style>
