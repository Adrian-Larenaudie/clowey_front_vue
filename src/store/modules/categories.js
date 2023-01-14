import Axios from '@/_services/caller.service.js';

export default {
    namespaced: true,
    state() {
        return {
            categories: [],
        }
    }, 
    
    getters: {
        getAllCategories: (state) => {
            return state.categories;
           } 
    },

    actions: {
        async actionGetAllCategories(context) {
            const response = await Axios.get('/category');
            console.log(response.data.categories);
            context.commit('setAllCategories', response.data.categories)
        },
    },
    
    mutations: {
        setAllCategories(state, categories) {
            state.categories = categories;
        },
    },
};