<template>
    <div class="in-container">
        <v-row justify="end">
            <v-dialog
            v-model="dialog"
            persistent
            max-width="390"
            >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
                >
                Open Dialog
                </v-btn>
            </template>
            <v-card>
                <v-card-title class="text-h5">
                What are you up Today?
                </v-card-title>
                <v-card-text> 
        <div>
            <v-col
                cols="12"
                md="4"
      >
            <v-textarea
            v-model="inputTodo.content"
                solo
                name="input-7-4"
                label="Make sure you you type what you want to add"
        >   
            </v-textarea>
            </v-col>
        </div>   

                </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="green darken-1"
                    text
                    @click="dialog = false"
                >
                    Close
                </v-btn>
                <v-btn
                    color="green darken-1"
                    text
                    @click="handleAddTask"
                >
                    Add
                </v-btn>
                </v-card-actions>
            </v-card>
            </v-dialog>
        </v-row>
    </div>
</template>

<script>

export default {
    name: "ModalComp",
    data () {
      return {
        dialog: false,
      }
},
computed: {
    inputTodo() {
        return this.$store.state.todo.inputTodo;
    }
},
methods: {
    handleAddTask(){
        this.$store.dispatch('addTask', this.inputTodo);
        this.dialog = true;
    },
}
}
</script>

<style scoped>

</style>
