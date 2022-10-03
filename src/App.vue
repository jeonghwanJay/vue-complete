<template>
  <div>
    <Toolbar></Toolbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar.vue'
export default {
  components: {
   Toolbar,
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>