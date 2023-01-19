<template>
    <div>
        <form class="edit_form" @submit.prevent="submitEditWork">

                <div class="form_main_inputs">
                    <div class="form_group">
                        <label for="">Nom*</label>
                        <input @change="onChangeField" :value="getWorkById(workId).name" name="name" class="formInput" type="text" placeholder="Nom">
                    </div>

                    <div class="form_group">
                        <label for="">Date</label>
                        <input @change="onChangeField" :value="getWorkById(workId).date" name="date" class="formInput" type="date" >
                    </div>  

                    <div class="form_group">
                        <label for="">Catégorie*</label>
                        <select @change="onChangeField" :value="getWorkById(workId).category_id" class="formSelect" name="category_id" id="">
                            <option value="categorie">Categorie</option>
                            <option v-for="category in getAllCategories" :value="category.id">{{ category.name }}</option>                       
                        </select>
                    </div> 

                    <div class="form_group_textarea">
                        <label class="textareaLabel" for="">Description*</label>
                        <textarea @change="onChangeField" :value="getWorkById(workId).description" name="description" id="" placeholder="Description"></textarea>
                    </div>
                </div>

            <div class="image_container">
                <img :src="getWorkById(workId).imageMosaic" :alt="getWorkById(workId).name"/>
            </div>

            <div class="form_button_side">
                <LoaderComponent class="loader" v-if="getLoader('delete_work_loader')"/>
                <button v-if="!getLoader('delete_work_loader')" class="form_submit_button">&nbsp; Modifier &nbsp;</button> 
                <div @click="deleteWork" v-if="!getLoader('delete_work_loader')" class="form_delete_button">Supprimer</div>   
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
            ...mapActions('works', ['actionDeleteWork']),
            ...mapMutations('utils', ['toggleLoader']),

            submitEditWork() {
                console.log('édition de l\'oeuvre ' + this.workId);
            },
            deleteWork() {
                this.toggleLoader('delete_work_loader');
                this.actionDeleteWork(this.workId);
            },
            onChangeField(event) {
                this.editWorkValue({field: event.target.name, value: event.target.value, workId: this.workId})         
            },
        },
    };
</script>

<style scoped>
    .loader {
        margin: 1.5rem;
    }
    .edit_form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: .5rem;
        border: 2px solid rgb(217, 217, 217);
        border-radius: .2rem;
        padding: 1rem;
        background: #f0f0f0;
        box-shadow:  5px -5px 14px #d3d3d3,
                    -5px 5px 14px #ffffff;
    }
    .form_main_inputs {
        width: 100%;
    }
    .form_group, .form_group_textarea {
        display: flex;
        flex-direction: column;
    }
    .form_group_textarea {

    }

    label {
        text-align: left;
        padding: .5rem 0;
    }

    input, select {
        height: 1.5rem;
        padding: .2rem 0;
    }

    input, select, textarea{
        border:1px solid #fff;
        -ms-box-sizing:content-box;
        -moz-box-sizing:content-box;
        box-sizing:content-box;
        -webkit-box-sizing:content-box; 
        border-radius: .2rem;
    } 

    textarea {
        resize : none;
        height: 5rem;
    }

    input[type="date"]::-webkit-inner-spin-button,
    input[type="date"]::-webkit-calendar-picker-indicator {
        /* display: none;
        -webkit-appearance: none; */
    }
    .image_container {
        margin-top: 1rem;
        height: 300px;
        width: 300px;
    }
    .form_button_side {
        display: flex;
    }
    .form_submit_button,  .form_delete_button {
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
    .form_submit_button:hover {
        background-color: var(--button-background-hover-color);
        color: var(--button-background-link-color);
        border: 2px solid var(--button-background-link-color);
    }

    .form_delete_button {
        background-color: var(--button-background-delete-color);
        color: var(--button-light-color);
    }
    
    .form_delete_button:hover {
        background-color: var(--button-background-hover-color);
        color: var(--button-background-delete-color);
        border: 2px solid var(--button-background-delete-color);
    }
    /* .loader {
        margin: 1.5rem;
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

    // responsive part 
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
    } */
</style>