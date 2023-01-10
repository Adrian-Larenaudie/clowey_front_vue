import axios from 'axios';
import { compileTemplate } from 'vue/compiler-sfc';

export default {
    namespaced: true,
    state: () => ({
  
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