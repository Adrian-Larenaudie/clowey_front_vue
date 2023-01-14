<template>
    <button class="nav_button"><router-link class="span" to="/">Front office</router-link></button>
</template>

<script>
    export default {
        name: 'FrontOfficeButton',
    };
</script>

<style scoped>
    .nav_button {
        font-size: var(--font-button-size);
        margin: 1rem;
        border: 2px solid transparent;
        border-radius: .2rem;
        background-color: var(--button-background-link-color);
        color: var(--button-light-color);
        padding: .5rem 1rem;
        cursor: pointer;
        transition: .5s;
    }
    .nav_button:hover {
        background-color: var(--button-background-hover-color);
        color: var(--button-background-link-color);
        border: 2px solid var(--button-background-link-color);
    }
    a {
        color: var(--button-base-color);
        text-decoration: none;
    }
</style>