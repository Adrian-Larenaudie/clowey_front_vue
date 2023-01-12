<template>
    <nav>
        <router-link to="/">Front office</router-link> |
        <router-link to="/admin/work">Ouevres</router-link>
    </nav>
</template>

<script>

    export default {
        name: 'AdminNav',
    }
</script>

<style scoped>
    nav {
        padding: 30px;
    }

    nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    nav a.router-link-exact-active {
        color: #42b983;
    }
</style>