<template>
  <div>
    <Toolbar></Toolbar>
    <transition name="page">
      <router-view></router-view>
    </transition>
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

/* Router Transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>