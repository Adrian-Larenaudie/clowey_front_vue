<template>  
    <Navigation />
    <h1>Hello world</h1>
    <router-view />
</template>

<script setup>
    import {  RouterView } from 'vue-router';
    import Navigation from './components/Navigation.vue';
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
