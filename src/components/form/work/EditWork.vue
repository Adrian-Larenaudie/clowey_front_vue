<template>
    <h1>Composant formulaire de modification d'une oeuvre</h1>
    {{ workId }}
    <div>
<!--    <form @submit.prevent="submitNewWork">

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
                <button v-if="!getLoader('add_work_loader')" class="formSubmit">Supprimer</button>  
                <button v-if="!getLoader('add_work_loader')" class="formSubmit">Modifier</button>  
            </div>

        </form> -->
    </div>
</template>

<script>
    import { mapGetters, mapActions, mapMutations } from "vuex";
    import LoaderComponent from "@/components/LoaderComponent.vue";

    export default {
        name: 'WorkEditForm',
        components: {
            LoaderComponent,
        },
        props: ['workId'],
        computed: {
            ...mapGetters('works', ['getAllWorks']),
        },
    };
</script>

<style scoped>
    .loader {
        margin: 1rem;
    }
    form {
        border: solid 2px rgb(164, 164, 164);
        border-radius: .2rem;
        margin: 1.5rem;
        padding: .5rem;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        font-weight: 600;
        margin-top: 0;
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