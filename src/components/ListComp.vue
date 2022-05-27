<template>
  <v-app>
    <div class="container">
      {{ $store.state.todo.todoData }}
      <v-list v-for="(item, index) in todoData" :key="index">
        <v-list-item>
          <v-list-item-icon>
            <v-checkbox
      v-model="checkbox"
      label="Task"
    ></v-checkbox>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item }} </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- <v-list-item>
          <v-list-item-icon>
    <v-checkbox
      v-model="checkbox"
      label="Task"
    ></v-checkbox>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>1400 Main Street</v-list-item-title>
          </v-list-item-content>
        </v-list-item> -->
      </v-list>
    </div>
  </v-app>
</template>

<script>

// import { mapState } from "vuex"

  export default {
    name: "ListComp",
    data () {
      return {
        text: '',
        checkbox: true,
      }
    },
    // computed: {
    //   ...mapState(["todoData"]),
    // },
    computed:{
      todoData(){
      return this.$store.state.todo.todoData
    }
    },
    mounted() {
      // console.log(this, 'this.$storethis.$storethis.$store');
    }
    
  }
</script>

