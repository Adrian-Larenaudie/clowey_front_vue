<template>
    <div class="admin">
        <h1 class="title">Admin layout</h1>
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
    .title {
        font-size: 2rem;
    }

    .admin {
        border: solid 1px red;
    }
</style>