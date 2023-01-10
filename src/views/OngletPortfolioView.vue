<template>
    <h1>Ici c'est la page Portfolio</h1>
    <p>{{ getAllWorks.works[0].name }}</p>
    <img :src="getAllWorks.works[0].imageMosaic" :alt="getAllWorks.works[0].name">
</template>

<script>
    import { mapState, mapGetters, mapActions } from "vuex";

    export default {
        computed: {
            ...mapGetters('works', [
                'getAllWorks',
            ]),

        },
        methods: {
            ...mapActions('works', [
                'actionGetAllWorks'
            ]),
        },
        async mounted() {
            this["actionGetAllWorks"]();
        }
    };
</script>