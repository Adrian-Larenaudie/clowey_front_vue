<template>
    <header>
        <nav>
            <router-link class="hover-underline-animation" to="/admin/oeuvres">Oeuvres</router-link>
            <router-link class="hover-underline-animation" to="/admin/categories">Catégories</router-link>
        </nav>
        <div class="buttons_side">
            <FrontOfficeButton/>
            <LogoutButton />
        </div>         
    </header>
</template>

<script>
    import LogoutButton from './buttons/LogoutButton.vue';
    import FrontOfficeButton from './buttons/FrontOfficeButton.vue';

    export default {
        name: 'AdminNav',
        components: {
            LogoutButton,
            FrontOfficeButton
        },
    };
</script>

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
    }  
    nav {
        padding: 30px;
    }
    nav a {
        padding: 0 0 .4rem 0;
        margin: 0 .5rem;
        font-weight: bold;
        color: var(--font-link-color);
        text-decoration: none;
    }
    nav a.router-link-exact-active {
        color: var(--font-link-active-color);
    }
    .buttons_side {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    /* hover line on links */ 
    .hover-underline-animation {
        display: inline-block;
        position: relative;
    }

    .hover-underline-animation::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: var(--font-link-active-color);
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }

    .hover-underline-animation:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
    /* hover line on links */ 
</style>