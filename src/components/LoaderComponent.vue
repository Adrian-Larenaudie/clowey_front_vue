<template>
    <div>
        <Loader :loading="true" :color="color" :height="'35px'" :width="'35px'"></Loader>
    </div>
</template>

<script>
    import Loader from 'vue-spinner/src/BeatLoader.vue';

    export default {
            name: 'LoaderComponent',
            components: {
                Loader,
            },
        };
</script>

<style>
</style>