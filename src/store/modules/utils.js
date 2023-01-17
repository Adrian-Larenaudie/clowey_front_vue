export default {
    namespaced: true,
    state:() => ({
       mosaic_loader: false,
       work_loader: false,
       add_work_loader: false,
       edit_work_loader: false,
       delete_work_loader: false,
       message: '',
    }), 
    
    getters: {
        getLoader: (state) => (loaderName) => {
            return state[loaderName];
        },
        getMessage: (state) => {
            return state.message;
        },
    },

    actions: {
        
    },
    
    mutations: {
        toggleLoader(state, loaderName) {
            state[loaderName] = !state[loaderName];
        },
        setLoaderToFalse(state, loaderName) {
            state[loaderName] = false;
        },
        setMessage(state, message) {
            state.message = message;
        },
    },
};
