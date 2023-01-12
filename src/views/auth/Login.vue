<template>
    <div>
        <h1>Connexion</h1>

        <form @submit.prevent="login">
            <div class="formGroup">
                <label for="user_email">Email</label>
                <input type="text" id="user_email" v-model="user.email">
            </div>

            <div class="formGroup">
                <label for="user_password">Mot de passe</label>
                <input type="password" id="user_password" v-model="user.password">
            </div>

            <div class="formGroup">
                <button type="submit" class="button">Connexion</button>
            </div>
        </form>

    </div>
</template>

<script>
    import { accountService } from '@/_services';
    export default {
        name: 'Login',
        // avec v-model sur l'input du formulaire on connecte nos data
        data() {
            return {
                user: {
                    email: '',
                    password: '',
                },
            };
        },
        // on peut déclarer un nombre de méthodes à jouer sur divers évènement ici sur le submit du formulaire on déclanche login
        methods: {
            login() {
                accountService.login(this.user)
                    .then((response) => {
                        accountService.saveUser(response.data.token, this.user.email);
                        this.$router.push('/admin/dashboard');
                    });
            },
        },
    }
</script>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
        width: 30%;
        margin: auto;
    }
    .formGroup {
        margin: .5rem;
        display: flex;
        justify-content: space-between;
    }
    button {
        font-size: 1rem;
        cursor: pointer;
    }
</style>