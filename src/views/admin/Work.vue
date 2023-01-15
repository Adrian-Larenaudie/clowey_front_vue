<template>
    <AdminHeader class="title" title="Page de gestion des Oeuvres" />
    <MessageInfo v-if="getMessage !== ''" />
    <AddWork />
</template>

<script>
    import MessageInfo from '@/components/MessageInfo.vue';
    import AdminHeader from '@/components/AdminHeader.vue';
    import AddWork from '@/components/form/work/AddWork.vue';
    import { mapGetters } from "vuex";

    export default {
        name: 'WorkAdmin',
        components: {
            AdminHeader,
            AddWork,
            MessageInfo,
        },
        computed: {
            ...mapGetters('utils', ['getMessage']),
        },
    };
</script>

<style scoped>
    .title {
        font-size: 2rem;
        margin: 1rem;
    }
</style>