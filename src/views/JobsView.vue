<template>
  <div>
    
    <!-- <ul class="news-list">
      <li v-for="job in this.$store.state.jobs" v-bind:key="job.data" class="post">
        <div class="point">
          {{job.points || 0}}
        </div>
          <div>
            <p class="news-title">
              <a v-bind:href="job.url">{{job.title}}</a>
            </p>
          <small class="link-text">{{job.time_ago}} by 
            <a v-bind:href="job.url">{{job.domain}}</a>
          </small>
        </div>
      </li>
    </ul> -->
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
export default {
  components: {
    ListItem, 
  }
  // created() {
  // this.$store.dispatch('FETCH_JOBS')
  // console.log(this.$store.state.jobs);
  }
// }
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
  color: #828282; */
/* } */
</style>