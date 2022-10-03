<template>
  <div>
    <div v-for="item in ask" v-bind:key="item.data"> {{item.title}}</div>
  </div>
</template>

<script>
import {fetchAskList} from '../api/index'
export default {
  data() {
    return {
      ask: [],
    }
  },
  created() {
    const vm = this;
    fetchAskList()
    .then(function(response) {
      vm.ask = response.data
    })
    .catch(function(error) {
      console.log(error);
    })
  }
}
</script>

<style>

</style>