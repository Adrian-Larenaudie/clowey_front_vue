export default {
    namespaced: true,
    state:() => ({
       loader: false,
       message: '',
    }), 
    
    getters: {
        getLoader: (state) => {
            return state.mosaic_loader;
        },
        getMessage: (state) => {
            return state.message;
        },
    },

    actions: {
        
    },
    
    mutations: {
        toggleLoader(state) {
            state.mosaic_loader = !state.mosaic_loader;
        },
        setMessage(state, message) {
            state.message = message;
        },
    },
};
