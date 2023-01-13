<template>
    <h1>Ici c'est la page Portfolio</h1>
    <p>{{ getAllWorks.works[0].name }}</p>
    <img :src="getAllWorks.works[0].imageMosaic" :alt="getAllWorks.works[0].name">
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
        },
        mounted() {
            this.actionGetAllWorks();
        },
    };
</script>