<template>
    <AdminHeader class="title" title="Page de gestion des Oeuvres" />
    <MessageInfo v-if="getMessage !== ''" />
    <div class="meuble" v-if="getMessage === ''"></div>
    <div class="form_container">
        <AddWork />
        <LoaderComponent class="loader" v-if="getLoader('work_loader')" />
        <h1 v-if="!getLoader('work_loader')" class="low_title">Modifier ou supprimer des oeuvres</h1>
        <EditWork v-if="!getLoader('work_loader')" v-for="work in getAllWorks" :workId="work.id" />
    </div>
</template>

<script>
    import MessageInfo from '@/components/MessageInfo.vue';
    import AdminHeader from '@/components/AdminHeader.vue';
    import AddWork from '@/components/form/work/AddWork.vue';
    import EditWork from '@/components/form/work/EditWork.vue';

    import { mapGetters, mapActions, mapMutations } from "vuex";
    import LoaderComponent from "@/components/LoaderComponent.vue";

    export default {
        name: 'WorkAdmin',
        components: {
            AdminHeader,
            AddWork,
            MessageInfo,
            EditWork,
            LoaderComponent,
        },
        computed: {
            ...mapGetters('utils', ['getMessage', 'getLoader']),
            ...mapGetters('works', ['getAllWorks']),
        },
        methods: {
            ...mapActions('works', ['actionGetAllWorks']),
            ...mapMutations('utils', ['toggleLoader'],),
        },
        mounted() {
            this.toggleLoader('work_loader');
            this.actionGetAllWorks();
        },
    };
</script>

<style scoped>
    .title {
        font-size: 2rem;
        margin: 1rem;
        margin-bottom: 0;
    }
    .loader {
        width: 100%;
    }
    .low_title {
        font-size: 1.5rem;
        margin: 1rem;
        margin-bottom: 0;
        width: 100%;
    }
    .meuble {
        height: calc(50px + 1rem);
    }
    .form_container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

    }
</style>