<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import ListItem from '../components/ListItem.vue'
export default {
  computed: {
    ...mapGetters([
      'fetchedAsk'
    ])
  },
  components: {
    ListItem,
  }
}
</script>

