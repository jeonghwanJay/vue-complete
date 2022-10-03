<template>
  <div>
    <div v-for="item in fetchedAsk" v-bind:key="item.data"> {{item.title}}</div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'fetchedAsk'
    ])
  },
  created() {
    this.$store.dispatch('FETCH_ASK')
}
}
</script>

<style>

</style>