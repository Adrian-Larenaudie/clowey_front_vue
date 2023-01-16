<template>
    <div>
        <form @submit.prevent="submitEditWork">

            <div class="formLeftSide">

                <div class="formInputs">
                    <div class="formGroup">
                        <label for="">Nom de l'oeuvre*</label>
                        <input @change="onChangeField" :value="getWorkById(workId).name" name="name" class="formInput" type="text" placeholder="Nom">
                    </div>

                    <div class="formGroup">
                        <label for="">Date de réalisation</label>
                        <input @change="onChangeField" :value="getWorkById(workId).date" name="date" class="formInput" type="date" >
                    </div>  

                    <div class="formGroup">
                        <label for="">Catégorie à associer*</label>
                        <select @change="onChangeField" :value="getWorkById(workId).category_id" class="formSelect" name="category_id" id="">
                            <option value="categorie">Categorie</option>
                            <option v-for="category in getAllCategories" :value="category.id">{{ category.name }}</option>                       
                        </select>
                    </div>   
                </div>



                <div class="formTextarea">
                    <label class="textareaLabel" for="">Description*</label>
                    <textarea @change="onChangeField" :value="getWorkById(workId).description" name="description" id="" placeholder="Description"></textarea>
                </div>
            </div>

            <div class="imageContainer">
                <img :src="getWorkById(workId).imageMosaic" :alt="getWorkById(workId).name"/>
            </div>

            <div class="formRightSide">
                <LoaderComponent class="loader" v-if="getLoader('add_work_loader')"/>
                <div @click="deleteWork" v-if="!getLoader('add_work_loader')" class="formDelete">Supprimer</div>  
                <button v-if="!getLoader('add_work_loader')" class="formSubmit">Modifier</button>  
            </div>

        </form>
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
            ...mapGetters('works', ['getAllWorks', 'getWorkById']),
            ...mapGetters('categories', ['getAllCategories']),
            ...mapGetters('utils', ['getLoader']),
        },
        methods: {
            ...mapMutations('works', ['editWorkValue']),

            submitEditWork() {
                console.log('édition de l\'oeuvre ' + this.workId);
            },
            deleteWork() {
                console.log('suppression de l\'oeuvre ' + this.workId);
            },
            onChangeField(event) {
                this.editWorkValue({field: event.target.name, value: event.target.value, workId: this.workId})         
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
        width: fit-content;
        margin-left: auto;
        margin-right: auto;
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
        flex-wrap: wrap;
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
        background-color: var(--button-background-link-color);
        color: var(--button-light-color);
        padding: .5rem 1rem;
        cursor: pointer;
        transition: .5s;
    }
    .formSubmit:hover {
        background-color: var(--button-background-hover-color);
        color: var(--button-background-link-color);
        border: 2px solid var(--button-background-link-color);
    }

    .formDelete {
        font-size: var(--font-button-size);
        margin: 1rem;
        border: 2px solid transparent;
        border-radius: .2rem;
        background-color: var(--button-background-delete-color);
        color: var(--button-light-color);
        padding: .5rem 1rem;
        cursor: pointer;
        transition: .5s;
        font-weight: 500;
    }
    
    .formDelete:hover {
        background-color: var(--button-background-hover-color);
        color: var(--button-background-delete-color);
        border: 2px solid var(--button-background-delete-color);
    }

    /* responsive part */
    @media only screen and (max-width: 1150px)  { 
        form {
            margin-left: 3rem;
            margin-right: 3rem;
        }
    }
    @media only screen and (max-width: 1000px)  { 
        form {
            justify-content: center;
        }
    }
    @media only screen and (max-width: 960px)  {
        form {
            flex-direction: column;
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