<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    'Navbar': Navbar
  }
}
</script>
