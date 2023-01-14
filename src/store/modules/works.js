import Axios from '@/_services/caller.service.js';
import { accountService } from '@/_services';

export default {
    namespaced: true,
    state: () => ({
        works: [],
        newWork: {
            name: '',
            date: '',
            image: '',
            category: 'categorie',
            description: '',
            imageUrl: null,
        },
    }), 
    
    getters: {
        getAllWorks: (state) => {
            return state.works;
        },
        getNewWork: (state) => {
            return state.newWork;
        },
    },

    actions: {
        async actionGetAllWorks(context) {
            const response = await Axios.get('/work');
            context.commit('setAllWorks', response.data.works)
        },
        async actionPostNewWork(context, payload) {
            console.log(payload);
            console.log(accountService.getHeaderConfig());
            const response = await Axios.post('/work', payload, accountService.getHeaderConfig());
            console.log(response);
            if(response.status === 200) {
                context.dispatch('actionGetAllWorks');
            }
        },
    },
    
    mutations: {
        setAllWorks(state, works) {
            state.works = works;
        },
        setNewWorkValue(state, payload) {
            state.newWork[payload.field] = payload.value;
        },
    },
};