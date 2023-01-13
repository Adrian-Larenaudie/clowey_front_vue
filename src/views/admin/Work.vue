<template>
    <AdminHeader class="title" title="Page de gestion des Oeuvres" />
    <AddWork />
</template>

<script>
    import AdminHeader from '@/components/AdminHeader.vue';
    import AddWork from '@/components/form/work/AddWork.vue';

    export default {
        name: 'WorkAdmin',
        components: {
            AdminHeader,
            AddWork,
        },
    };
</script>

<style scoped>
    .title {
        font-size: 2rem;
        margin: 1rem;
    }
</style>