<template>
    <nav>
        <router-link class="link hover-underline-animation" to="/">Accueil</router-link>
        <div class="parent_block" @mouseleave="hidePanel">
            <p class="link hover-underline-animation" @mouseover="displayPanel">Portfolio</p>
            <div class="panel" v-if="getAllCategories.length > 0">           
                <router-link class="panel_link hover-underline-animation" v-for="category in getAllCategories" :to="{ name: 'portfolio', params: { category: category.name } }">
                    {{ category.name }}
                </router-link>
            </div>
        </div>
        <router-link class="link hover-underline-animation" to="/faq">F.A.Q</router-link>

        <router-link class="link hover-underline-animation" to="/admin/work">Back-office</router-link>
    </nav>
</template>

<script>
    import { mapGetters } from "vuex";

    export default {
        name: 'PublicNav',
        computed: {
            ...mapGetters('categories', ['getAllCategories']),
        },
        methods: {
            displayPanel() {
                this.$el.querySelector('.panel').classList.add('slide_animation_panel');
            },
            hidePanel() {
                this.$el.querySelector('.panel').classList.remove('slide_animation_panel');       
            },
        },
    }
</script>

<style scoped>
    nav {
        padding: 30px;
        display: flex;
        justify-content: center;
        background-color: #fff;
    }

    .link, .panel_link {
        font-weight: bold;
        color: #2c3e50;
        cursor: pointer;
        text-decoration: none;
        margin: 0 1.1rem;
        padding: 0 0 .3rem 0;
    }

    .link.router-link-exact-active {
        color: #42b983;
    }
    .parent_block {
        position: relative;
    }
    .panel {
        display: flex;
        flex-direction: column;
        border: solid 1.5px #fff;
        background-color: rgb(240, 240, 240);
        width: fit-content;
        border-radius: .1rem;
        position: absolute;
        margin: 0;
        max-height: 0em;
        overflow: hidden;
        transition: .7s max-height .1s;
    }

    .panel_link {
        padding: .6rem .5rem;
        margin: 0;
        font-weight: 500;
    }
    .slide_animation_panel {  
        max-height: 13em;
    } 

    /* hover line on links */ 
    .hover-underline-animation {
        display: inline-block;
        position: relative;
    }

    .hover-underline-animation::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #42b983;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }

    .hover-underline-animation:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
    /* hover line on links */ 
</style>