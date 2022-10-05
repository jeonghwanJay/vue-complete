<template>
  <div>
    <!-- <ul class="news-list">
      <li v-for="item in fetchedAsk" v-bind:key="item.data" class="post">
        <div class="point">
          {{item.points}}
        </div>
          <div>
            <p class="news-title">
              <router-link v-bind:to="`item/${item.id}`">
                {{item.title}}
              </router-link>
            </p>
          <small class="link-text">{{item.time_ago}} by 
            <router-link v-bind:to="`user/${item.user}`" class="link-text">{{ item.user}}</router-link>
          </small>
        </div>
      </li>
    </ul> -->
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
//   created() {
//     this.$store.dispatch('FETCH_ASK')
// }
}
</script>

<style scoped>
/* .news-list {
  margin: 0;
  padding: 0;
  
}
.post {
  display: flex;
  list-style: none;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.point {
  width: 80px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #42b883;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
} */
</style>