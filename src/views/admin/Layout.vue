<template>
    <div class="admin">
        <AdminNav/>
        Admin layout
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

<style>
    .admin {
        border: solid 1px red;
    }
</style>