<template>
    <AdminHeader class="title" title="Page de gestion des Oeuvres" />
    <MessageInfo v-if="getMessage !== ''" />
    <div class="meuble" v-if="getMessage === ''"></div>
    <AddWork />
    <EditWork v-for="work in getAllWorks" :workId="work.id" />
</template>

<script>
    import MessageInfo from '@/components/MessageInfo.vue';
    import AdminHeader from '@/components/AdminHeader.vue';
    import AddWork from '@/components/form/work/AddWork.vue';
    import EditWork from '@/components/form/work/EditWork.vue';

    import { mapGetters, mapActions, mapMutations } from "vuex";

    export default {
        name: 'WorkAdmin',
        components: {
            AdminHeader,
            AddWork,
            MessageInfo,
            EditWork,
        },
        computed: {
            ...mapGetters('utils', ['getMessage']),
            ...mapGetters('works', ['getAllWorks']),
        },
        methods: {
            ...mapActions('works', ['actionGetAllWorks']),
            ...mapMutations('utils', ['toggleLoader'],),
        },
        mounted() {
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
    .meuble {
        height: calc(50px + 1rem);
    }
</style>