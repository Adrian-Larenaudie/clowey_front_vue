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
                <label class="textareaLabel" for="">Description</label>
                <textarea v-model="work.description" name="" id="" placeholder="Description"></textarea>
            </div>
        </div>

        <div class="formRightSide">
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
        margin: 1.5rem;
        padding: .5rem;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        font-weight: 600;
    }
    .formLeftSide {

    }
    .formInputs {
        display: flex;
        flex-wrap: wrap;
    }
    label {
        padding-bottom: .4rem;
    }
    .formInput, .formSelect {
        border-radius: .2rem;
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
    .fileLabel:hover {
        border: 2px solid #000;
    }
    .formSelect {

    }
    .formTextarea {

    }
    textarea {
        border-radius: .2rem;
        border: 2px solid rgb(164, 164, 164);
        resize : none;
        width: 97%;
        padding: .5rem;
        height: 4rem;
    }

    .formRightSide {
        display: flex;
        align-items: flex-end;
    }
    .formGroup, .formTextarea {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 1rem;

    }
    .formSubmit {
        font-size: var(--font-button-size);
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

    /* responsive part */
    @media only screen and (max-width: 931px)  {
        form {
            flex-direction: column;
            margin: 2rem;
        }
        .formInputs {
            flex-direction: column;
            align-items: center;
        }
        .formInput, .formSelect, .fileLabel, textarea {
            width: 200px;
        }
        .formSelect {
            width: 220px;
        }
        .fileLabel {
            width: 184px;
        }
        .formTextarea {
            width: 230px;
            margin: auto;
            
        }
        .formRightSide {
            justify-content: center;
        }
        .formSubmit {
            width: 220px;
        }
    }
</style>