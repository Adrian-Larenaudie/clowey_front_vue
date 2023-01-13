<template>
    <h1>Ici c'est la page Portfolio</h1>
    <Loader v-if="getMosaicLoader" :loading="true" :color="color" :height="'35px'" :width="'35px'"></Loader>
    <div >
        <img v-for="work in getAllWorks.works" @load="loadedImg" class="mosaic_img"  :src="work.imageMosaic" :alt="work.name"/>
    </div>
    
    <p>{{ getAllCategories }}</p>
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

            loadedImg() {
                this.count++;
                if(this.count === this.getAllWorks.works.length - 1) {
                    this.toggleMosaicLoader();
                    document.querySelectorAll('.mosaic_img').forEach(async (image) => {
                        setTimeout(() => {
                            image.classList.add('fadeUp');  
                        }, 500);
                        
                    });
                };
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
        transition: 1s;
        opacity: 0;
    }
    .fadeUp {
        opacity: 1;
    }
</style>