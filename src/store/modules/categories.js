import axios from 'axios';

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
            const response = await axios.get('http://localhost:8000/api/category');
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