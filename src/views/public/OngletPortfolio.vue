<template>
    <h1>Ici c'est la page Portfolio</h1>
    <Loader v-if="getMosaicLoader" :loading="true" :color="color" :height="'35px'" :width="'35px'"></Loader>
    <div >
        <img v-for="work in getAllWorks.works" @load="loadedImg" class="mosaic_img"  :src="work.imageMosaic" :alt="work.name"/>
    </div>
    <!-- <p>{{ getAllCategories }}</p> -->
</template>

<script>
    import { mapGetters, mapActions, mapMutations } from "vuex";
    import Loader from 'vue-spinner/src/BeatLoader.vue'

    export default {
        name: 'OngletPortfolio',
        components: {
            Loader
        },
        data() {
            return {
                count: 0,
                color: '#2c3e50'
            };
        },
        computed: {
            ...mapGetters('works', ['getAllWorks']),
            ...mapGetters('categories', ['getAllCategories']),
            ...mapGetters('utils', ['getMosaicLoader']),
        },
        created() {
            this.toggleMosaicLoader();
        },
        methods: {
            ...mapActions('works', ['actionGetAllWorks']),
            ...mapMutations('utils', ['toggleMosaicLoader'],),
            // permet d'ajouter la classe fadeUp à chaque image de façon asynchrone toutes les 250 ms
            async addFadeUpClass() {
                const images = document.querySelectorAll('.mosaic_img');
                for (const image of images) {
                    await new Promise((resolve) => setTimeout(resolve, 250));
                    image.classList.add('fadeUp');
                }
            },
            // sur l'évènement onload de chaque image on appel cette méthode
            loadedImg() {
                // on se sert de ce compteur ->
                this.count++;
                // -> et de cette condition pour savoir quand toutes les images sont chargées
                if(this.count === this.getAllWorks.works.length - 1) {
                    // -> quand c'est le cas on arrête d'afficher le loader ->
                    this.toggleMosaicLoader();
                    // -> et on appel notre méthode pour animer l'affichage des images
                    this.addFadeUpClass()
                };
            }
        },
        mounted() {
            this.actionGetAllWorks();
        },
    };
</script>

<style scoped>
    .mosaic_img {
        padding: 0.5rem;
        height: 250px;
        width: 250px;      
        opacity: 0;
        transition: 1s;
    }
    .fadeUp {
        opacity: 1;
    }
</style>