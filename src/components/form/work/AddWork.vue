<template>
    <form @submit.prevent="submitNewWork">

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
                    <input @change="previewImage" name="files" id="files" v-on:change="work.file" class="inputFile" type="file">
                </div>   
            </div>

            <div class="formTextarea">
                <label class="textareaLabel" for="">Description</label>
                <textarea v-model="work.description" name="" id="" placeholder="Description"></textarea>
            </div>
        </div>

        <div class="imageContainer">
            <img v-if="imageUrl" :src="imageUrl" alt=""/>
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
                    name: null,
                    date: null,
                    image: null,
                    category: null,
                    description: null,
                },
                imageUrl: null,
            };
        },
        methods: {
            submitNewWork() {
                console.log(this.work);
                console.log('ajout d\'une oeuvre en BDD');
            },
            //l'image est chargée dans une variable sur l'évènement onChange de l'input file
            previewImage(event) {
                // nouvelle class FileReader
                let reader = new FileReader();
                // sur l'évènement onLoad de la classe
                reader.onload = (event) => {
                    // la variable imageUrl reçoit l'image chargée dans l'input file
                    this.imageUrl = event.target.result;
                }
                // la variable imageUrl reçoit un lien pour afficher l'image
                reader.readAsDataURL(event.target.files[0]);
                // la variable image reçoit le fichier à envoyer vers le backend
                this.work.image = event.target.files[0];
                console.log(this.image);
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
        margin: auto;
        margin-right: 0;
        margin-bottom: 0;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
    }
    .formGroup, .formTextarea {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 1rem;

    }
    .imageContainer {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        margin: 1rem;
    }
    img {
        overflow: hidden;
        width: 220px;
        border: 2px solid rgb(164, 164, 164);
        border-radius: .2rem;
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
    @media only screen and (max-width: 960px)  {
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
            margin: auto;
            justify-content: center;
        }
        .formSubmit {
            width: 220px;
        }
    }
</style>