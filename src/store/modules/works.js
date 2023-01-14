import axios from 'axios';

export default {
    namespaced: true,
    state: () => ({
        works: [],
    }), 
    
    getters: {
       getAllWorks: (state) => {
        return state;
       } 
    },

    actions: {
        async actionGetAllWorks(context) {
            const response = await axios.get('http://localhost:8000/api/work');
            console.log(response.data.works);
            context.commit('setAllWorks', response.data.works)
        },
    },
    
    mutations: {
        setAllWorks(state, works) {
            state.works = works;
        },
    },
};