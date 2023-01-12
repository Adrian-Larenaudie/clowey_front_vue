import router from '@/router'

// ici notre gardien va vérifier si il y a un token dans le local storage 
export function authGuard(to) {
    let token = localStorage.getItem('token');
    // si il est présent on retourne true en permettant à la route d'être jouée
    if(token) {
        return true;
    }
    // sinon on redirige vers la page de connexion
    router.push('/login');
}