<template>
    <h1>Ici c'est la page Portfolio</h1>
    <img class="toto" @load="loadedImg" :src="getAllWorks.works[0].imageMosaic" :alt="getAllWorks.works[0].name">
    <p>{{ getAllCategories }}</p>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";

    export default {
        name: 'OngletPortfolio',
        computed: {
            ...mapGetters('works', ['getAllWorks']),
            ...mapGetters('categories', ['getAllCategories']),
        },
        methods: {
            ...mapActions('works', [
                'actionGetAllWorks'
            ]),
            loadedImg() {
                console.log('image chargée');
                document.querySelector('.toto').classList.add('fadeUp');
            }
        },
        mounted() {
            this.actionGetAllWorks();
        },
    };
</script>

<style scoped>
    img {
        height: 250px;
        width: 250px;
        transition: .5s;
        opacity: 0;
    }
    .fadeUp {
        opacity: 1;
    }
</style>