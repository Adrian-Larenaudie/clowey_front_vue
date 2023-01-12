<template>
    <div class="public">
        <PublicNav/>
        Public layout
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
    .public {
        border: solid 1px red;
    }
</style>