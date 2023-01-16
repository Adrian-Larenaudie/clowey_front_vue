<template>
    <form @submit.prevent="submitNewWork">

        <div class="formLeftSide">

            <div class="formInputs">
                <div class="formGroup">
                    <label for="">Nom de l'oeuvre*</label>
                    <input @change="onChangeField" :value="getNewWork.name" name="name" class="formInput" type="text" placeholder="Nom">
                </div>

                <div class="formGroup">
                    <label for="">Date de réalisation</label>
                    <input @change="onChangeField" :value="getNewWork.date" name="date" class="formInput" type="date" >
                </div>  

                <div class="formGroup">
                    <label for="">Catégorie à associer*</label>
                    <select @change="onChangeField" :value="getNewWork.category" class="formSelect" name="category" id="">
                        <option value="categorie">Categorie</option>
                        <option v-for="category in getAllCategories" :value="category.id">{{ category.name }}</option>                       
                    </select>
                </div>

                <div class="formGroup">
                    <p>Fichier image (.jpg)*</p>
                    <label class="fileLabel" for="files">Choisir un fichier</label>
                    <input @change="onChangeField" name="file" id="files" v-on:change="getNewWork.file" class="inputFile" type="file">
                </div>   
            </div>

            <div class="formTextarea">
                <label class="textareaLabel" for="">Description*</label>
                <textarea @change="onChangeField" :value="getNewWork.description" name="description" id="" placeholder="Description"></textarea>
            </div>
        </div>

        <div class="imageContainer">
            <img v-if="getNewWork.imageUrl" :src="getNewWork.imageUrl" alt=""/>
        </div>

        <div class="formRightSide">
            <LoaderComponent class="loader" v-if="getLoader('add_work_loader')"/>
            <button v-if="!getLoader('add_work_loader')" class="formSubmit">Ajouter</button>  
        </div>
        
    </form>
</template>

<script>
    import { mapGetters, mapActions, mapMutations } from "vuex";
    import { validationService } from '@/_services';
    import LoaderComponent from "@/components/LoaderComponent.vue";

    export default {
        name: 'WorkAddForm',
        components: {
            LoaderComponent,
        },
        data() {
            return {
                
            };
        },
        computed: {
            ...mapGetters('works', ['getNewWork']),
            ...mapGetters('categories', ['getAllCategories']),
            ...mapGetters('utils', ['getLoader']),
        },
        methods: {
            ...mapMutations('works', ['setNewWorkValue'],),
            ...mapActions('works', ['actionPostNewWork'],),
            ...mapMutations('utils', ['setMessage'],),
            ...mapMutations('utils', ['toggleLoader'],),

            submitNewWork() {
                const message = validationService.newWorkForm(this.getNewWork);
                this.setMessage(''); 
                if(message.includes('succès')) {
                    this.toggleLoader('add_work_loader');
                    this.actionPostNewWork({
                        name: this.getNewWork.name,
                        date: this.getNewWork.date,
                        description: this.getNewWork.description,
                        category_id: this.getNewWork.category !== 'categorie' ? parseInt(this.getNewWork.category, 10) : null,
                        image: this.getNewWork.image,
                    });    
                } else {
                    this.setMessage(message);
                    window.scroll(0, 0);
                }
            },

            onChangeField(event) {
                // s'il s'agit de l'input file
                if(event.target.name === 'file') {
                    // chargement de l'image dans le state
                    let reader = new FileReader();
                    reader.onload = (event) => {
                        this.setNewWorkValue({field: 'imageUrl', value: event.target.result});
                    }
                    // récupération d'une url pour l'afficher 
                    reader.readAsDataURL(event.target.files[0]);
                    // sauvegarde du fichier image dans le state du formulaire
                    this.setNewWorkValue({field: 'image', value: event.target.files[0]});
                } else {
                    // sur les autres inputs sauvegarde des valeurs dans le state du formulaire
                    this.setNewWorkValue({field: event.target.name, value: event.target.value})
                }            
            },
        },
    };
</script>

<style scoped>
    .loader {
        margin: 1rem;
    }
    form {
        background-color: #fff;
        border: solid 2px var(--border-from-color);
        border-radius: .2rem;
        margin: 1.5rem;
        padding: .5rem;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        font-weight: 600;
        margin-top: 0;
        max-width: 1000px;
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
        background: rgb(255,238,242);
        background: linear-gradient(315deg, rgba(255,238,242,0.9136029411764706) 0%, rgba(253,232,237,1) 100%);
        border-radius: .2rem;
        padding: .5rem;
        width: 190px;
        border: 2px solid var(--border-from-color);
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
        background: rgb(255,238,242);
        background: linear-gradient(315deg, rgba(255,238,242,0.9136029411764706) 0%, rgba(253,232,237,1) 100%);
        margin-top: .4rem;
        font-size: 1rem;
        font-weight: 500;
        border: 2px solid var(--border-from-color);
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
        background: rgb(255,238,242);
        background: linear-gradient(315deg, rgba(255,238,242,0.9136029411764706) 0%, rgba(253,232,237,1) 100%);
        border-radius: .2rem;
        border: 2px solid var(--border-from-color);
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
            margin-top: 0;
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