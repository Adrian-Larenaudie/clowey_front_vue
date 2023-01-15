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
            try {
                await Axios.post('/work', payload, accountService.getHeaderConfig());
                context.commit('utils/toggleLoader', 'add_work_loader', {root: true});
                context.dispatch('actionGetAllWorks');
                context.commit('utils/setMessage', 'L\'oeuvre a été ajoutée avec succès :)', {root: true});
            
            } catch(err) {
                console.log(err);
                context.commit('utils/toggleLoader', 'add_work_loader', {root: true});
                context.commit('utils/setMessage', 'Erreur inconnue échec de l\'ajout', {root: true});
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