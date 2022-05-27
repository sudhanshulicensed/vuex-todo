<template>
  <v-app>
    <!-- <div class="container"> -->
      <!-- {{ $store.state.todo.todoData }} -->
      <v-list v-for="(item, index) in todoData" :key="index">
        <v-list-item>
          <v-list-item-icon>
            <v-checkbox @click="addLineThrough(item.status, index)"
            v-model="item.status"></v-checkbox>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title :class="{'line-through': item.status}">{{ item }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    <!-- </div> -->
  </v-app>
</template>

<script>

  export default {
    name: "ListComp",
    data () {
      return {
        text: '',
        checkbox: false,
      }
    },
    methods: {

      addLineThrough(status, index){
        const payLoad = {
          status: status,
          index: index,
        }
          this.$store.dispatch('updateStatus', payLoad);
      }
    },
    computed:{
      todoData(){
      return this.$store.state.todo.todoData;
    }
    },
    mounted() {
      // console.log(this, 'this.$storethis.$storethis.$store');
    }
    
  }
</script>

<style scoped>
  .line-through{
    text-decoration: line-through;
  }
</style>