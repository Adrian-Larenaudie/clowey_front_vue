<template>
    <div class="public">
        <h1 class="title">Public layout</h1>
        <PublicNav/>
        <RouterView/>
    </div>
</template>

<script>
    import PublicNav from '@/components/PublicNav.vue';

    export default {
        name: 'AdminLayout',
        components: {
            PublicNav
        },
    };
</script>

<style>
    .title {
        font-size: 2rem;
    }
    .public {
        border: solid 1px red;
    }
</style>