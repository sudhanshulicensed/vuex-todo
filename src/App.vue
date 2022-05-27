<template>
  <v-app>
    

    <v-main>
      <ListComp />
    </v-main>
    <v-main>
      <ModalComp />
    </v-main>
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

  data: () => ({
    //
  }),
};
</script>
