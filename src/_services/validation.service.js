let newWorkForm = (newWork) => {
    if(newWork.image === '') {
        return 'Erreur un fichier image est obligatoire !';
    }   
    if(newWork.description === '') {
        return 'Erreur la description est obligatoire !';
    }
    if(newWork.category === 'categorie') {
        return 'Erreur catégorie de l\'oeuvre non renseignée';
    }
    const count = newWork.image.name.length
    const extension = newWork.image.name[count-3] + newWork.image.name[count-2] + newWork.image.name[count-1]
    if(extension !== 'jpg') {
        return 'Erreur seulement le format jpg est autorisé !';
    }

    if(newWork.name.length >= 30) {
        return 'Erreur le nom est trop long 20 caractères maximum !';
    }
    if(newWork.name.trim().length === 0) {
        return 'Erreur le nom de l\'Oeuvre est obligatoire';
    }
    if(newWork.description.length >= 250) {
        return 'Erreur la description est trop longue 250 caractères maximum !';
    }
    return 'succès';
};

export const validationService = {
    newWorkForm,
};
