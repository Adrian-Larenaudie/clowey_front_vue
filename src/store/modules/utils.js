export default {
    namespaced: true,
    state:() => ({
       mosaic_loader: false,
    }), 
    
    getters: {
        getMosaicLoader: (state) => {
            return state.mosaic_loader;
        },
    },

    actions: {
        
    },
    
    mutations: {
        toggleMosaicLoader(state) {
            state.mosaic_loader = !state.mosaic_loader;
        }
    },
};
