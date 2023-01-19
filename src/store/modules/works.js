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
        getWorkById: (state) => (workId) => {
            return state.works.find(work => work.id === workId);
        },
    },

    actions: {
        async actionGetAllWorks(context) {
            const response = await Axios.get('/work');
            const works = response.data.works.reverse();
            context.commit('setAllWorks', works);
            context.commit('utils/setLoaderToFalse', 'work_loader', {root: true});
        },
        async actionPostNewWork(context, payload) {
            try {
                await Axios.post('/work', payload, accountService.getHeaderConfig());
                context.commit('utils/toggleLoader', 'add_work_loader', {root: true});
                context.dispatch('actionGetAllWorks');
                context.commit('utils/setMessage', 'L\'oeuvre a été ajoutée avec succès :)', {root: true});
                context.commit('cleanAddFormValues');
            
            } catch(err) {
                console.log(err);
                context.commit('utils/toggleLoader', 'add_work_loader', {root: true});
                context.commit('utils/setMessage', 'Erreur inconnue échec de l\ajout', {root: true});
            };
            window.scroll(0, 0);   
        },
        //TODO action editer une ouvre
        /* async actionEditWork(context, workId) {
            body = {

            }
            try {
                await Axios.post(`/work/${workId}`, body, accountService.getHeaderConfig());
                //context.commit('utils/toggleLoader', 'add_work_loader', {root: true});
                //context.dispatch('actionGetAllWorks');
                //context.commit('utils/setMessage', 'L\'oeuvre a été ajoutée avec succès :)', {root: true});
            
            } catch(err) {
                console.log(err);
                //context.commit('utils/toggleLoader', 'add_work_loader', {root: true});
                //context.commit('utils/setMessage', 'Erreur inconnue échec de l\'ajout', {root: true});
            }
            window.scroll(0, 0);
        }, */
        //TODO action supprimer une ouvre
        async actionDeleteWork(context, workId) {
            try {
                await Axios.delete(`/work/${workId}`, accountService.getHeaderConfig());
                context.commit('utils/toggleLoader', 'delete_work_loader', {root: true});
                context.dispatch('actionGetAllWorks');
                context.commit('utils/setMessage', 'L\'oeuvre a été supprimée avec succès :)', {root: true});
            
            } catch(err) {
                console.log(err);
                context.commit('utils/toggleLoader', 'delete_work_loader', {root: true});
                context.commit('utils/setMessage', 'Erreur inconnue échec de la suppression', {root: true});
            };
            context.commit('utils/setCurrentDeleteWorkId', null, {root: true});
        },
    },
    
    mutations: {
        setAllWorks(state, works) {
            state.works = works;
        },
        setNewWorkValue(state, payload) {
            state.newWork[payload.field] = payload.value;
        },
        cleanAddFormValues(state) {
            state.newWork = {
                name: '',
                date: '',
                image: '',
                category: 'categorie',
                description: '',
                imageUrl: null,
            };
        },
        editWorkValue(state, payload) {
            let works = [];
            state.works.map((work) => {
                if(work.id === payload.workId) {
                    work[payload.field] = payload.value;
                }
                works.push(work);
            });
            state.works = works;
        },
    },
};