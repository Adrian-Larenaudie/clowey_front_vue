<template>
    <button @click="logout">Déconnexion</button>
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
                        this.$router.push('/login');
                    }); 
            },
        },
    };
</script>

<style scoped>

</style>