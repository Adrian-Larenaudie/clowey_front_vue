<template>
    <button class="nav_button" @click="logout"><span>Déconnexion</span></button>
</template>

<script>
    import { accountService } from '@/_services';

    export default {
        name: 'LogoutButton',
        methods: {
            logout() {
                accountService.logout(localStorage.getItem('email'))
                    .then(() => {
                        accountService.unSave();
                        this.$router.push('/');
                    }); 
            },
        },
    };
</script>

<style scoped>
    .nav_button {
        font-size: 1.2rem;
        margin: 1rem;
        border: 2px solid transparent;
        border-radius: .2rem;
        background-color: var(--button-background-logout-color);
        color: var(--button-dark-color);
        padding: .5rem 1rem;
        cursor: pointer;
        transition: .5s;
    }
    .nav_button:hover {
        /* background-color: var(--button-background-hover-color);
        color: var(--button-dark-color); */
        border: 2px solid var(--button-dark-color);
    }
</style>