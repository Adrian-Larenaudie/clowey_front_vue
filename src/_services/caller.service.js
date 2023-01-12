// import des modules nécessaires
import axios from 'axios';

// ici on défnit une base url pour toute nos requête axios (exploité dans les autres services)
const Axios = axios.create({
    baseURL: 'http://localhost:8000/api'
});

export default Axios;