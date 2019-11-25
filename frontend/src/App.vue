<template>
  <v-app>
    <Navbar/>
    <v-content>
      <router-view />
    </v-content>
    
  </v-app>
</template>

<script>
//Components
import Navbar from './components/Layout/Navbar';

export default {
  name: "App",

  components: {
    Navbar,
  },

  data: () => ({
    //
  })
};
</script>
