<template>
  <v-app>
      <div class="container">
        <div class="d-flex justify-space-between">
          <div class="day">Today</div>
          <ModalComp />
        </div>
        <div class="main">
          <ListComp />
        </div>
    </div>
  </v-app>
</template>

<script>

import ListComp from "./components/ListComp.vue"
import ModalComp from "./components/ModalComp.vue"

export default {
  name: 'App',

  components: {
    ListComp,
    ModalComp,
  },
  methods: {

  }
};
</script>

<style>
  .container{
    box-sizing: border-box;
    width: 100%;
    margin :20px 0 20px;
  }

  .header{
    display: flex;
    justify-content: space-between;
  }
</style>
