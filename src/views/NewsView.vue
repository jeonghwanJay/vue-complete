<template>
  <div>
    <div v-for="user in users" v-bind:key="user.data">{{user.title}}</div>
  </div>
</template>

<script>
import { fetchNewsList } from '../api/index'
export default {
  data() {
    return {
      users: [],
    }
  },
  created() {
    const vm = this;
    fetchNewsList() 
    .then(function(response) {
      vm.users = response.data;
    })
    .catch(function(error) {
      console.log(error);
    })
  }
}
</script>

<style>

</style>