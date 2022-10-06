<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import ListItem from '../components/ListItem.vue'
import bus from '../utils/bus'
export default {
  computed: {
    ...mapGetters([
      'fetchedAsk'
    ])
  },
  components: {
    ListItem,
  },
  created() {
    bus.$emit('start:spinner')
    setTimeout(() => {
      this.$store.dispatch('FETCH_ASK')
    .then(() => bus.$emit('end:spinner'))
    .catch((error) => console.log(error))
    }, 3000)
  },
}
</script>

