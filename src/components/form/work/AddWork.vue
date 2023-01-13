<template>
    <form @submit.prevent="submitAddWork">

        <div class="formLeftSide">

            <div class="formInputs">

                <div class="formGroup">
                    <label for="">Nom de l'oeuvre</label>
                    <input v-model="work.name" class="formInput" type="text" placeholder="Nom">
                </div>

                <div class="formGroup">
                    <label for="">Date de réalisation</label>
                    <input v-model="work.date" class="formInput" type="date" >
                </div>  

                <div class="formGroup">
                    <label for="">Catégorie à associer</label>
                    <select v-model="work.category" class="formSelect" name="" id="">
                        <option value="">catégotie 1</option>
                        <option value="">catégotie 2</option>
                    </select>
                </div>

                <div class="formGroup">
                    <p>Fichier image</p>
                    <label class="fileLabel" for="files">Choisir un fichier</label>
                    <input name="files" id="files" v-on:change="work.file" class="inputFile" type="file">
                </div>
                
            </div>

            <div class="formTextarea">
                <label for="">Description</label>
                <textarea v-model="work.description" name="" id="" placeholder="Description"></textarea>
            </div>

        </div>

        <div class="formRightSide">

            <div class="formGroup--banner">
                <label for="banner">Présence sur la bannière</label>
                <input v-model="work.banner" class="formChcekbox" type="checkbox">
            </div>

            <button class="formSubmit">Ajouter</button>  

        </div>
        
    </form>
</template>

<script>
    export default {
        name: 'WorkAddForm',
        data() {
            return {
                work: {
                    name: '',
                    date: '',
                    file: '',
                    category: '',
                    description: '',
                    banner: '',
                },
            };
        },
        methods: {
            submitAddWork() {
                console.log(this.work);
                console.log('ajout d\'une oeuvre en BDD');
            },
        },
    };
</script>

<style scoped>
    form {
        border: solid 2px rgb(164, 164, 164);
        border-radius: .2rem;
        margin: .5rem;
        padding: .5rem;
        display: flex;
        justify-content: space-between;
        font-weight: 600;
    }
    .formLeftSide {

    }
    .formInputs {
        display: flex;
    }
    label {
        padding-bottom: .4rem;
    }
    .formInput, .formSelect {
        padding: .5rem;
        width: 190px;
        border: 2px solid rgb(164, 164, 164);
    }
    .inputFile {
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1;
    }
    .fileLabel {
        margin-top: .4rem;
        font-size: 1rem;
        font-weight: 500;
        border: 2px solid rgb(164, 164, 164);
        border-radius: .2rem;
        color: var(--button-dark-color);
        padding: .5rem 1rem;
        cursor: pointer;
        transition: .5s;
    }
    .formSelect {

    }
    .formTextarea {

    }
    textarea {
        border: 2px solid rgb(164, 164, 164);
        resize : none;
        width: 100%;
        padding: .5rem;
    }

    .formRightSide {

    }
    .formGroup, .formTextarea {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 1rem;

    }
    .formChcekbox {

    }
    .formSubmit {
        font-size: 1.2rem;
        margin: 1rem;
        border: 2px solid transparent;
        border-radius: .2rem;
        background-color: var(--button-background-submit-color);
        color: var(--button-light-color);
        padding: .5rem 1rem;
        cursor: pointer;
        transition: .5s;
    }
    .formSubmit:hover {
        background-color: var(--button-background-hover-color);
        color: var(--button-background-submit-color);
        border: 2px solid var(--button-background-submit-color);
    }
</style>