<template>
    <h1>Ici c'est la page Portfolio</h1>
    <loaderComponent />
    <Loader v-if="getLoader('mosaic_loader')" :loading="true" :color="color" :height="'35px'" :width="'35px'"></Loader>
    <div >
        <LoaderComponent v-if="getLoader('mosaic_loader')" />
        <img v-for="work in getAllWorks" @load="loadedImg" class="mosaic_img"  :src="work.imageMosaic" :alt="work.name"/>
    </div>
    <!-- <p>{{ getAllCategories }}</p> -->
</template>

<script>
    import { mapGetters, mapActions, mapMutations } from "vuex";
    import LoaderComponent from "@/components/LoaderComponent.vue";

    export default {
        name: 'OngletPortfolio',
        components: {
            LoaderComponent,
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
            ...mapGetters('utils', ['getLoader']),
        },
        created() {
            this.toggleLoader('mosaic_loader');
        },
        methods: {
            ...mapActions('works', ['actionGetAllWorks']),
            ...mapMutations('utils', ['toggleLoader'],),
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
                if(this.count === this.getAllWorks.length - 1) {
                    // -> quand c'est le cas on arrête d'afficher le loader ->
                    this.toggleLoader('mosaic_loader');
                    // -> et on appel notre méthode pour animer l'affichage des images
                    this.addFadeUpClass();
                } else if (this.getAllWorks.length === 1) {
                    this.toggleLoader('mosaic_loader');
                    this.addFadeUpClass();
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