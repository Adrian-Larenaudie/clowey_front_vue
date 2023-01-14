let newWorkForm = (newWork) => {
    const count = newWork.image.name.length
    const extension = newWork.image.name[count-3] + newWork.image.name[count-2] + newWork.image.name[count-1]
    console.log(extension);

    if(newWork.name.length > 20) {
        return false;
    }
    if(newWork.description.length > 250) {
        return false;
    }
    if(extension !== 'jpg') {
        return false;
    }
    if(newWork.category_id === 'categorie') {
        return false;
    }
    return true;
};

export const validationService = {
    newWorkForm,
};
