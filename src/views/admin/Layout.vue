<template>
    <div class="admin">
        <AdminNav/>
        <RouterView/>
    </div>
</template>

<script>
    import AdminNav from '@/components/AdminNav.vue';

    export default {
        name: 'AdminLayout',
        components: {
            AdminNav
        },
    };
</script>

<style scoped>

</style>