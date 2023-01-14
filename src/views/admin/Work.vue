<template>
    <AdminHeader class="title" title="Page de gestion des Oeuvres" />
    <MessageInfo v-if="getMessage !== ''" />
    <Loader v-if="getLoader" :loading="true" :color="color" :height="'35px'" :width="'35px'"></Loader>
    <AddWork />
</template>

<script>
    import MessageInfo from '@/components/MessageInfo.vue';
    import AdminHeader from '@/components/AdminHeader.vue';
    import AddWork from '@/components/form/work/AddWork.vue';
    import Loader from 'vue-spinner/src/BeatLoader.vue';

    import { mapGetters } from "vuex";

    export default {
        name: 'WorkAdmin',
        components: {
            AdminHeader,
            AddWork,
            MessageInfo,
            Loader,
        },
        computed: {
            ...mapGetters('utils', ['getMessage']),
            ...mapGetters('utils', ['getLoader']),
        },
    };
</script>

<style scoped>
    .title {
        font-size: 2rem;
        margin: 1rem;
    }
</style>