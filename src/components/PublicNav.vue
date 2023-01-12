<template>
    <nav>
        <router-link to="/">Accueil</router-link> |
        <router-link to="/portfolio">Portfolio</router-link> |
        <router-link to="/faq">F.A.Q</router-link> |

        <router-link to="/admin/work">Back-office</router-link>
    </nav>
</template>

<script>

    export default {
        name: 'PublicNav',
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