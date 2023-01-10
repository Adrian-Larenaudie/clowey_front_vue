<template>
    
    <NavigationComponent />
    <h1>Hello world</h1>
    <router-view />
</template>
<script setup>
    import {  RouterView } from 'vue-router';
    import NavigationComponent from './components/NavigationComponent.vue';
</script>
