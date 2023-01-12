<template>
    <nav class="navigation">
        <h1>Back office</h1>
        <router-link class="front_office_link" to="/">Front office</router-link>
    </nav>
</template>

<script>
    import { RouterLink } from 'vue-router';
</script>

<style scoped>
    nav {
        margin: .5rem;
        display: flex;
        background-color: rgb(242, 242, 242);
        justify-content: space-between;
        padding: 1.5rem;
        align-items: center;
        border: solid 1px rgb(231, 231, 231);
        box-shadow: 2px 5px 5px rgb(202, 202, 202);
    }
    h1 {
        font-size: 2rem;
        font-weight: bold;
    }
    .front_office_link {
        border: 1px solid #008CBA;
        padding: .75rem;
        border-radius: .2rem;
        background-color: #008CBA;
        color: #fff;
        opacity: .80;
        transition-duration: 1s;
        cursor: pointer;
    }
    .front_office_link:hover {
        opacity: 1;
    }
</style>